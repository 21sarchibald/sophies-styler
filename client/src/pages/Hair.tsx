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
import LoadingSpinner from "../components/LoadingSpinner";

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

    const [quizLoading, setQuizLoading] = useState(false);

    const [quizModalOpen, setQuizModalOpen] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<HairAnswer | null>(null);
    const [questionIndex, setQuestionIndex] = useState(0);
    const progress = ((questionIndex) / hairQuestions.length) * 100;


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

    const [savedPhotos, setSavedPhotos] = useState<Set<string>>(new Set());

    useEffect(() => {
        async function loadSavedPhotos() {
            const data = await getSavedImages("hair");

            setSavedPhotos(new Set(data.map(img => img.image_url)))
        }

        loadSavedPhotos();
    }, []);

    const handleSave = async (url: string) => {
        await saveImage(url, "hair");

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

    // if (loading) {
    //     return (
    //         <main className="mx-auto flex max-w-7xl flex-col-reverse gap-8 px-4 py-6 lg:flex-row">
    //             <div className="flex-1">
    //                 <GallerySkeleton />
    //             </div>
    
    //             <SidebarSkeleton />
    //         </main>
    //     );
    // }

    return (
        <>
        <main className="mx-auto flex max-w-7xl flex-col-reverse gap-8 px-4 py-6 lg:flex-row">
            <div className="flex-1">
                <h3 className="font-heading text-xl mb-2">Hairstyle Inspiration Photos</h3>
                <div className="columns-2 sm:columns-3 lg:columns-4 gap-4">
                    {hairRecPhotos && (
                        hairRecPhotos.map((rec: HairRecPhoto) => (
                            <div key={rec.url} className="relative group">
                                {user && (
                                    <>
                                        {savedPhotos.has(rec.url) ? (
                                        <button
                                        onClick={() => handleUnsave(rec.url)}
                                        className="bg-white/90 opacity-0 transition-opacity duration-200 group-hover:opacity-100 hover:bg-white hover:cursor-pointer h-7 w-7 z-9 absolute right-1 top-1 rounded-sm"
                                        >
                                            <UnsaveIcon className="w-7 h-7"/>
                                        </button>
                                        ) : (
                                        <button
                                        onClick={() => handleSave(rec.url)}
                                        className="bg-white/90 opacity-0 transition-opacity duration-200 group-hover:opacity-100 hover:bg-white hover:cursor-pointer h-7 w-7 z-9 absolute right-1 top-1 rounded-sm"
                                        >
                                            <SaveIcon className="w-7 h-7"/>
                                        </button>
                                        )
                                        }
                                    </>
                                )}
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
                    <h2 className="font-heading font-extrabold text-2xl pt-5 pb-5">{hairDetails.faceShape} Face Shape</h2>
                    </>
                )}
                <div className="mx-auto w-full max-w-xs mb-5">
                {hairDetails ? (
                    <>
                    <img src={hairImages[hairDetails.faceShape as keyof typeof hairImages]} alt="Face shape image" className="w-36 mx-auto"/>
                    <h4 className="font-heading text-xl text-left mt-5">Recommendations: </h4>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-left">
                            {hairDetails.faceShapeSuggestions.map((suggestion: string) => (
                                <li
                                key={suggestion}
                                >
                                {suggestion}
                                </li>
                            ))}
                        </ul>
                    <h4 className="mt-3 mb-3 text-left font-heading text-xl">Color: </h4>
                    <p className="text-left">{hairDetails.hairColor}</p>
                    
                    <h4 className="mt-3 mb-3 text-left font-heading text-xl">Texture: </h4>
                    <p className="text-left">{hairDetails.hairTexture}</p>
                    </>
                ): <p className="mt-5">Click the button below to discover your hairstyle and see recommendations!</p>}
                </div>
            <button
                className="w-full bg-black text-white hover:cursor-pointer hover:bg-gray-800 p-3 rounded-4xl"
                onClick={() => setQuizModalOpen(true)}
            >Take Quiz
            </button>
            </div>
        </main>

        {quizModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-gray-950 opacity-75">
                    <button onClick={() => setQuizModalOpen(false)} className="text-white absolute top-5 right-5 text-5xl hover:text-gray-400 hover:cursor-pointer">X</button>
                </div>

                <div className="relative z-10 max-h-[80vh] w-full max-w-6xl overflow-y-auto rounded-xl bg-white p-6">

                    {quizLoading ? (
                        <LoadingSpinner text="Finding styles for your face shape..."/>
                    ) : (
                    <>
                        <h3 className="font-heading text-2xl text-center p-5">{hairQuestions[questionIndex].heading}</h3>
                        <div>
                            {populateQuestion(questionIndex)}
                        </div>
                        <button 
                            className="bg-black font-heading text-white px-6 py-4 rounded-xl mx-auto block mt-20 hover:cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
                            disabled={!selectedAnswer}


                            onClick={ async () => {
                                const answersArray = { ... questionAnswers };
                                const questionId = hairQuestions[questionIndex].id as HairQuestionId;

                                answersArray[questionId] = selectedAnswer?.text ?? "";

                                answersArray[`${questionId}Code`] = selectedAnswer?.code as keyof HairSubmission;

                                setQuestionAnswers(answersArray);

                                if (questionIndex >= hairQuestions.length - 1) {
                                    setQuizLoading(true);

                                    try {
                                        const apiResponse = await analyzeHair(answersArray) || null;
                                    
                                        if (apiResponse) {
                                            setHairDetails(apiResponse);
                                        }
                                    
                                        localStorage.setItem("hairstyle", JSON.stringify(apiResponse));
                                        saveHairResults(apiResponse);
                                    
                                        const recommendationResponse = await getHairRecommendations(apiResponse);
                                        setHairRecPhotos(recommendationResponse ?? []);
                                        localStorage.setItem("hairRecPhotos", JSON.stringify(recommendationResponse));
                                        resetQuiz();
                                    } finally {
                                        setQuizLoading(false);
                                    }
                                }

                                else {
                                    setQuestionIndex(questionIndex + 1);
                                    setSelectedAnswer(null);
                                }
                            }
                            }>Next</button>
                        <div>
                            <p className="text-sm">Question {questionIndex + 1} of {hairQuestions.length}</p>
                            <div className="h-1 w-full mt-2 overflow-hidden rounded-full bg-gray-300">
                                <div className="h-full bg-pink-600 transition-all duration-500 ease-out" style={{ width: `${progress}%`}} />
                            </div>
                        </div>
                    </>

                    )}

                </div>

            </div>
        )
    }
    </>
    )
}