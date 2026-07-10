import { useEffect, useState } from "react";
import { silhouetteQuestions } from "../data/silhouetteQuestions";
import QuizAnswerButton from "../components/QuizAnswerButton";
import SaveIcon from "../assets/icons/save-icon.svg?react";
import UnsaveIcon from "../assets/icons/unsave-icon.svg?react";
import ExternalLinkIcon from "../assets/icons/external-link-icon.svg?react";

import { saveImage, unsaveImage, getSavedImages } from "../services/imageService";
import analyzeSilhouette, { getSilhouetteRecommendations } from "../services/silhouetteService";
import { saveSilhouetteResults } from "../services/silhouetteService";

import appleSilhouette from "../assets/images/silhouette/apple-silhouette.png";
import hourglassSilhouette from "../assets/images/silhouette/hourglass-silhouette.png";
import invertedTriangleSilhouette from '../assets/images/silhouette/inverted-triangle-silhouette.png';
import pearSilhouette from "../assets/images/silhouette/pear-silhouette.png";
import rectangleSilhouette from "../assets/images/silhouette/rectangle-silhouette.png";
import { useAuth } from "../context/useAuth";

export default function Silhouette() {

    const { user } = useAuth();

    interface SilhouetteAnswer {
        id: string;
        text: string;
        image: string[];
        code: string;
    }

    type SilhouetteSubmission = {
        silhouette: string;
        silhouetteCode: string;
        proportions: string;
        proportionsCode: string;
    }

    type SilhouetteRecPhoto = {
        id: number;
        url: string;
        tags: string[];
        external_link: string;
        created_at: string;
    }

    const silhouetteImages = {
        Apple: appleSilhouette,
        Hourglass: hourglassSilhouette,
        "Inverted Triangle": invertedTriangleSilhouette,
        Pear: pearSilhouette,
        Rectangle: rectangleSilhouette,
    }

    const [quizModalOpen, setQuizModalOpen] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<SilhouetteAnswer | null>(null);
    const [questionIndex, setQuestionIndex] = useState(0);

    const [questionAnswers, setQuestionAnswers] = useState<SilhouetteSubmission>({
        silhouette: "",
        silhouetteCode: "",
        proportions: "",
        proportionsCode: ""
    });

    const [silhouetteDetails, setSilhouetteDetails] = useState(() => {
        const silhouette = localStorage.getItem("silhouette");

        return silhouette ? JSON.parse(silhouette) : null;
    });

    const [silhouetteRecPhotos, setSilhouetteRecPhotos] = useState<SilhouetteRecPhoto[]>(() => {
        const photos = localStorage.getItem("silhouetteRecPhotos");
        return photos ? JSON.parse(photos) : [];
    });

    useEffect(() => {
    const photos = localStorage.getItem("silhouetteRecPhotos");

    if (photos) {
        setSilhouetteRecPhotos(JSON.parse(photos));
    }
}, [user]);

    const [savedPhotos, setSavedPhotos] = useState<Set<string>>(new Set());

    useEffect(() => {
        async function loadSavedPhotos() {
            const data = await getSavedImages("silhouette");

            setSavedPhotos(new Set(data.map(img => img.image_url)))
        }

        loadSavedPhotos();
    }, []);

    const handleSave = async (url: string) => {
        await saveImage(url, "silhouette");

        setSavedPhotos(prev => {
            const next = new Set(prev);
            next.add(url);
            return next;
        })
    }

    const handleUnsave = async (url: string) => {
        await unsaveImage(url);

        setSavedPhotos(prev => {
            const next = new Set(prev);
            next.delete(url);
            return next;
        })
    }

    const resetQuiz = () => {
        setQuizModalOpen(false);
        setQuestionIndex(0);
        setSelectedAnswer(null);
        setQuestionAnswers(
            {
                silhouette: "",
                silhouetteCode: "",
                proportions: "",
                proportionsCode: ""
            }
        )
    }

    const populateQuestion = (questionIndex: number) => {
        const answers = silhouetteQuestions[questionIndex].answers;

        return (
            <div className="flex flex-col items-center gap-1 md:flex-row md:flex-wrap md:justify-evenly">
                {answers.map((answer) => (
                        <QuizAnswerButton
                            key={answer.id}
                            isSelected={selectedAnswer?.id === answer.id}
                            padding={5}
                            onClick={() => {
                                setSelectedAnswer(answer);
                            }}
                        >
                            {answer.image && <img className="pb-5 mx-auto w-24 sm:w-24 md:w-28 lg:w-28"src={answer.image[0]} alt="Answer visual aid"/>}
                            {answer.text && <div className="w-32">{answer.text}</div>}
                        </QuizAnswerButton>
                ))
                }
            </div>
        )
    }

    return (
        <>
        <main className="mx-auto flex max-w-7xl flex-col-reverse gap-8 px-4 py-6 lg:flex-row">
            <div className="flex-1">
                <div className="columns-2 sm:columns-3 lg:columns-4 gap-4">
                    {silhouetteRecPhotos && (
                        silhouetteRecPhotos.map((rec: SilhouetteRecPhoto) => (
                            <div key={rec.url} className="relative group">
                                {savedPhotos.has(rec.url) ? (
                                <button
                                onClick={() => handleUnsave(rec.url)}
                                className="bg-white/90 opacity-0 transition-opacity duration-200 group-hover:opacity-100 hover:bg-white hover:cursor-pointer h-7 w-7 z-100 absolute right-1 top-1 rounded-sm"
                                >
                                    <UnsaveIcon className="w-7 h-7"/>
                                </button>
                                ) : (
                                <button
                                onClick={() => handleSave(rec.url)}
                                className="bg-white/90 opacity-0 transition-opacity duration-200 group-hover:opacity-100 hover:bg-white hover:cursor-pointer h-7 w-7 z-100 absolute right-1 top-1 rounded-sm"
                                >
                                    <SaveIcon className="w-7 h-7"/>
                                </button>
                                )
                                }
                                {rec.external_link && (
                                    <a 
                                    href={rec.external_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white/90 opacity-0 transition-opacity duration-200 group-hover:opacity-100 hover:bg-white hover:cursor-pointer h-7 w-7 z-100 absolute left-1 bottom-1 rounded-sm"
                                    >
                                        <ExternalLinkIcon className="w-7 h-7"/>
                                    </a>
                                )}
                            <img 
                                src={rec.url}
                                alt="Photo" 
                                className="mb-4 w-full break-inside-avoid rounded-lg object-cover transition-transform duration-200 group-hover:scale-[1.02]" />
                            </div>     
                        ))
                    )}
                </div>
                </div>
            <div className="w-full rounded-xl bg-white p-5 text-center shadow-sm lg:sticky lg:top-0 lg:h-screen lg:w-80 xl:w-96">
                <h2 className="font-heading text-2xl">Your Silhouette</h2>
                {silhouetteDetails && (
                    <h2 className="font-heading font-extrabold text-2xl pt-5">{silhouetteDetails.silhouette}</h2>
                )}
                <div className="mx-auto w-full max-w-xs">
                    {silhouetteDetails && (
                        <>
                        <img src={silhouetteImages[silhouetteDetails.silhouette as keyof typeof silhouetteImages]} className="w-36 mx-auto"/>
                        <ul className="mt-4 list-disc space-y-2 pl-5 text-left">
                            {silhouetteDetails.silhouetteSuggestions.map((suggestion: string) => (
                                <li
                                key={suggestion}
                                >
                                {suggestion}
                                </li>
                            ))}
                        </ul>
                        <h2 className="mt-8 mb-3 text-left font-heading text-xl">{silhouetteDetails.proportions}</h2>
                        <ul className="mt-4 list-disc space-y-2 pl-5 text-left">
                            {silhouetteDetails.proportionsSuggestions.map((suggestion: string) => (
                                <li
                                key={suggestion}
                                >
                                {suggestion}
                                </li>
                            ))}
                        </ul>
                        </>
                    )}
                </div>
                
            <button
                className="bg-gray-300 pt-3 pb-3 pl-3 pr-3 text-center text-l font-heading rounded-xl hover:cursor-pointer hover:bg-gray-200"
                onClick={() => setQuizModalOpen(true)}
            >Take Quiz
            </button>
            </div>
        </main>

        {quizModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-heading">
                <div className="absolute inset-0 bg-gray-950 opacity-75">
                    <button onClick={() => setQuizModalOpen(false)} className="absolute top-5 right-5 w-10 text-4xl text-white hover:cursor-pointer hover:text-gray-400">X</button>
                </div>

                <div className="relative z-10 max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-xl bg-white p-6">

                    <h3 className="font-heading text-2xl text-center p-5">{silhouetteQuestions[questionIndex].heading}</h3>
                    <div>
                        {populateQuestion(questionIndex)}
                    </div>
                    <button 
                        className="bg-black text-white px-6 py-4 rounded-xl mx-auto block mt-20 hover:cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
                        disabled={!selectedAnswer}


                        onClick={ async () => {
                            const answersArray = { ... questionAnswers };
                            const questionId = silhouetteQuestions[questionIndex].id as keyof SilhouetteSubmission;

                            answersArray[questionId] = selectedAnswer?.text ?? "";

                            answersArray[`${questionId}Code`] = selectedAnswer?.code as keyof SilhouetteSubmission;

                            setQuestionAnswers(answersArray);

                            if (questionIndex >= silhouetteQuestions.length - 1) {
                                const apiResponse = await analyzeSilhouette(answersArray) || null;

                                if (apiResponse) {
                                    setSilhouetteDetails(apiResponse);
                                }

                                localStorage.setItem("silhouette", JSON.stringify(apiResponse));
                                await saveSilhouetteResults(apiResponse);
                                console.log("api response in silhouette component: ", apiResponse);
                                const recommendationResponse = await getSilhouetteRecommendations(apiResponse);
                                setSilhouetteRecPhotos(recommendationResponse);
                                localStorage.setItem("silhouetteRecPhotos", JSON.stringify(recommendationResponse));
                                resetQuiz();
                            }

                            else {
                                setQuestionIndex(questionIndex + 1);
                                setSelectedAnswer(null);
                            }

                        }
                        }>Next</button>
                    {/* <div>Progress bar</div> */}

                </div>

            </div>
        )
    }
    </>
    )
}