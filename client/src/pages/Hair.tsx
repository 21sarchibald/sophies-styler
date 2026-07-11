import { useEffect, useState } from "react";
import { hairQuestions } from "../data/hairQuestions";
import QuizAnswerButton from "../components/QuizAnswerButton";
import SaveIcon from "../assets/icons/save-icon.svg?react";
import UnsaveIcon from "../assets/icons/unsave-icon.svg?react";

import { getSavedImages, saveImage, unsaveImage, getOptimizedImage } from "../services/imageService";
import analyzeHair, { getHairRecommendations, saveHairResults } from "../services/hairService";

import diamondHead from "../assets/images/hair/diamond-head.png";
import heartHead from "../assets/images/hair/heart-head.png";
import longHead from "../assets/images/hair/long-head.png";
import ovalHead from "../assets/images/hair/oval-head.png";
import roundHead from "../assets/images/hair/round-head.png";
import squareHead from "../assets/images/hair/square-head.png";
import { useAuth } from "../context/useAuth";

export default function Hair() {

    const { user } = useAuth();

    interface HairAnswer {
        id: string;
        text: string;
        image: string[];
        code: string;
    }

    type HairQuestionId = | "faceShape" | "hairColor" | "hairTexture";

    type HairSubmission = {
        faceShape: string;
        faceShapeCode: string;
        hairColor: string;
        hairColorCode: string;
        hairTexture: string;
        hairTextureCode: string;
    }

    type HairRecPhoto = {
        id: number;
        url: string;
        tags: string[];
        created_at: string;
      };

    const hairImages = {
        Diamond: diamondHead,
        Heart: heartHead,
        Long: longHead,
        Oval: ovalHead,
        Round: roundHead,
        Square: squareHead,
    }

    const [quizModalOpen, setQuizModalOpen] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<HairAnswer | null>(null);
    const [questionIndex, setQuestionIndex] = useState(0);

    const [questionAnswers, setQuestionAnswers] = useState<HairSubmission>({
        faceShape: "",
        faceShapeCode: "",
        hairColor: "",
        hairColorCode: "",
        hairTexture: "",
        hairTextureCode: ""
    })

    const [hairDetails, setHairDetails] = useState(() => {
        const hairstyle = localStorage.getItem("hairstyle");

        return hairstyle ? JSON.parse(hairstyle) : null;
    });

    const [hairRecPhotos, setHairRecPhotos] = useState<HairRecPhoto[]>(() => {
        const photos = localStorage.getItem("hairRecPhotos");
        return photos ? JSON.parse(photos) : [];
    });

    useEffect(() => {
        const photos = localStorage.getItem("hairRecPhotos");
    
        if (photos) {
            setHairRecPhotos(JSON.parse(photos));
        }
    }, [user]);

    const [savedPhotos, setSavedPhotos] = useState<Set<string>>(new Set());

    useEffect(() => {
        async function loadSavedPhotos() {
            const data = await getSavedImages("hair");

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
                faceShape: "",
                faceShapeCode: "",
                hairColor: "",
                hairColorCode: "",
                hairTexture: "",
                hairTextureCode: ""
            }
        )
    }

    const populateQuestion = (questionIndex: number) => {
        const answers = hairQuestions[questionIndex].answers;

        return (
            <div className="flex flex-col items-center gap-4 md:flex-row md:flex-wrap md:justify-evenly">
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
                            {answer.text}
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
                    {hairRecPhotos && (
                        hairRecPhotos.map((rec: HairRecPhoto) => (
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
                            <img 
                                src={getOptimizedImage(rec.url)}
                                alt="Photo" 
                                className="mb-4 w-full break-inside-avoid rounded-lg object-cover transition-transform duration-200 group-hover:scale-[1.02]" />
                            </div>     
                        ))
                    )}
                </div>
                </div>
            <div className="w-full rounded-xl bg-white p-5 text-center shadow-sm lg:sticky lg:top-0 lg:h-screen lg:w-80 xl:w-96">
                <h2 className="font-heading text-2xl">Your Hairstyle</h2>
                {hairDetails && (
                    <>
                    <h2 className="font-heading font-extrabold text-2xl pt-5">{hairDetails.faceShape}</h2>
                    </>
                )}
                <div className="mx-auto w-full max-w-xs">
                {hairDetails && (
                    <>
                    <img src={hairImages[hairDetails.faceShape as keyof typeof hairImages]} alt="" className="w-36 mx-auto"/>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-left">
                            {hairDetails.faceShapeSuggestions.map((suggestion: string) => (
                                <li
                                key={suggestion}
                                >
                                {suggestion}
                                </li>
                            ))}
                        </ul>
                    <h2 className="mt-8 mb-3 text-left font-heading text-xl">{hairDetails.hairColor}</h2>
                    <img></img>
                    <h2 className="mt-8 mb-3 text-left font-heading text-xl">{hairDetails.hairTexture}</h2>
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
                    <button onClick={() => setQuizModalOpen(false)} className="text-white absolute top-5 right-5 w-10 text-4xl hover:text-gray-400 hover:cursor-pointer">X</button>
                </div>

                <div className="relative z-10 max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-xl bg-white p-6">

                    <h3 className="font-heading text-2xl text-center p-5">{hairQuestions[questionIndex].heading}</h3>
                    <div>
                        {populateQuestion(questionIndex)}
                    </div>
                    <button 
                        className="bg-black text-white px-6 py-4 rounded-xl mx-auto block mt-20 hover:cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
                        disabled={!selectedAnswer}


                        onClick={ async () => {
                            const answersArray = { ... questionAnswers };
                            const questionId = hairQuestions[questionIndex].id as HairQuestionId;

                            answersArray[questionId] = selectedAnswer?.text ?? "";

                            console.log('questionId: ', questionId);

                            answersArray[`${questionId}Code`] = selectedAnswer?.code as keyof HairSubmission;

                            setQuestionAnswers(answersArray);

                            if (questionIndex >= hairQuestions.length - 1) {
                                const apiResponse = await analyzeHair(answersArray) || null;
                                // console.log("apiResponse hair: ", apiResponse);

                                if (apiResponse) {
                                    setHairDetails(apiResponse);
                                }
                                // console.log("apiResponse hair: ", apiResponse);
                                localStorage.setItem("hairstyle", JSON.stringify(apiResponse));
                                saveHairResults(apiResponse);
                                const recommendationResponse = await getHairRecommendations(apiResponse);
                                setHairRecPhotos(recommendationResponse ?? []);
                                localStorage.setItem("hairRecPhotos", JSON.stringify(recommendationResponse));
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