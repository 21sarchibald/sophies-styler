import { useEffect, useState } from "react";
import DownArrow from "../assets/icons/down-arrow.svg?react";
import SaveIcon from "../assets/icons/save-icon.svg?react";
import UnsaveIcon from "../assets/icons/unsave-icon.svg?react";
import ExternalLinkIcon from "../assets/icons/external-link-icon.svg?react";
import { colorQuestions } from "../data/colorQuestions";
import ColorSelection from "../components/ColorSelection";
import QuizAnswerButton from "../components/QuizAnswerButton";

import { getSavedImages, saveImage, unsaveImage, getOptimizedImage } from "../services/imageService";
import { analyzeColors, getColorPalette, getColorRecommendations, saveColorResults } from "../services/colorService";
// import { useAuth } from "../context/useAuth";

export default function ColorPalette() {

    // const { user } = useAuth();

    interface ColorQuizAnswer {
        id: string,
        text: string,
        image: string[],
        weights: {
            warm?: number;
            cool?: number;
            bright?: number;
            muted?: number;
            dark?: number;
            light?: number;
            highContrast?: number;
            lowContrast?: number;
          };
    }

    type ColorRecPhoto = {
        id: number;
        url: string;
        tags: string[];
        external_link: string;
        created_at: string;
    }

    const [selectionMenuOpen, setSelectionMenuOpen] = useState(false);
    const [quizModalOpen, setQuizModalOpen] = useState(false);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [questionAnswers, setQuestionAnswers] = useState({
        warm: 0,
        cool: 0,
        bright: 0,
        muted: 0,
        dark: 0,
        light: 0,
        highContrast: 0,
        lowContrast: 0
    });
    const [selectedAnswer, setSelectedAnswer] = useState<ColorQuizAnswer | null>(null);
    const [selectedWeights, setSelectedWeights] = useState<{ key: keyof typeof questionAnswers; value: number }[]>([]);
    const [recommendedSeasonDetails, setRecommendedSeasonDetails] = useState(() => {
        const colorPalette = localStorage.getItem("colorPalette");
        return colorPalette ? JSON.parse(colorPalette) : null;
    }); 

    const [colorRecPhotos, setColorRecPhotos] = useState<ColorRecPhoto[]>(() => {
        const photos = localStorage.getItem("colorRecPhotos");
        return photos ? JSON.parse(photos) : [];
    });

    // useEffect(() => {
    //     const photos = localStorage.getItem("colorRecPhotos");
    
    //     if (photos) {
    //         setColorRecPhotos(JSON.parse(photos));
    //     }
    // }, [user]);

    const [savedPhotos, setSavedPhotos] = useState<Set<string>>(new Set());

    useEffect(() => {
        async function loadSavedPhotos() {
            const data = await getSavedImages("color_palette");

            setSavedPhotos(new Set(data.map(img => img.image_url)))
        }

        loadSavedPhotos();
    }, []);

    const handleSave = async (url: string, externalLink: string) => {
        await saveImage(url, "color_palette", externalLink);

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
                warm: 0,
                cool: 0,
                bright: 0,
                muted: 0,
                dark: 0,
                light: 0,
                highContrast: 0,
                lowContrast: 0
            }
        )
    }

    const selectPalette = async (paletteName: string) => {
        const results = await getColorPalette(paletteName);
        setRecommendedSeasonDetails(results);
        localStorage.setItem("colorPalette", JSON.stringify(results));

        // set it in supabase
        await saveColorResults(results);

        const recommendationResponse = await getColorRecommendations(results);
        setColorRecPhotos(recommendationResponse ?? []);
        localStorage.setItem("colorRecPhotos", JSON.stringify(recommendationResponse));
        setSelectionMenuOpen(false);
    }

    const populateQuestion = (questionIndex: number) => {
        const answers = colorQuestions[questionIndex].answers;

        return (
            <div className="flex flex-col gap-1 md:flex-row md:flex-wrap md:justify-evenly">
                {answers.map((answer) => (
                        <QuizAnswerButton
                            
                            key={answer.id}
                            isSelected={selectedAnswer?.id === answer.id}
                            padding={10}
                            onClick={() => {

                                setSelectedAnswer(answer);

                                const answerWeights: { key: keyof typeof questionAnswers; value:  number }[] = [];
                                Object.entries(answer.weights).forEach(([key, value]) => {
                                    answerWeights.push( {key: key as keyof typeof questionAnswers, value} );
                                })
                                setSelectedWeights(answerWeights);
                            }}
                        >
                            {answer.image && <img className="pb-5 mx-auto w-24 sm:w-24 md:w-28 lg:w-38 object-cover"src={answer.image[0]} alt="Answer visual aid"/>}
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
                    {colorRecPhotos && (
                        colorRecPhotos.map((rec: ColorRecPhoto) => { return (
                            <div key={rec.url} className="relative group">
                                {savedPhotos.has(rec.url) ? (
                                <button
                                onClick={() => handleUnsave(rec.url)}
                                className="bg-white/90 opacity-0 transition-opacity duration-200 group-hover:opacity-100 hover:bg-white hover:cursor-pointer h-7 w-7 z-9 absolute right-1 top-1 rounded-sm"
                                >
                                    <UnsaveIcon className="w-7 h-7"/>
                                </button>
                                ) : (
                                <button
                                onClick={() => handleSave(rec.url, rec.external_link)}
                                className="bg-white/90 opacity-0 transition-opacity duration-200 group-hover:opacity-100 hover:bg-white hover:cursor-pointer h-7 w-7 z-9 absolute right-1 top-1 rounded-sm"
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
                                    className="bg-white/90 opacity-0 transition-opacity duration-200 group-hover:opacity-100 hover:bg-white hover:cursor-pointer h-7 w-7 z-9 absolute left-1 bottom-1 rounded-sm"
                                    >
                                        <ExternalLinkIcon className="w-7 h-7"/>
                                    </a>
                                )}
                            <img 
                                src={getOptimizedImage(rec.url)}
                                alt="Photo" 
                                className="mb-4 w-full break-inside-avoid rounded-lg object-cover transition-transform duration-200 group-hover:scale-[1.02]" />
                            </div>
                        )})
                    )}
                </div>
            </div>
            <div className="w-full rounded-xl bg-white p-5 text-center shadow-sm lg:sticky lg:top-0 lg:h-screen lg:w-80 xl:w-96">
                <h2 className="font-heading text-2xl">Your Color Palette</h2>
                {recommendedSeasonDetails && (
                    <h2 className="font-heading font-extrabold text-2xl p-5">{recommendedSeasonDetails.season}</h2>
                )}
                <div className="mx-auto grid aspect-square w-full max-w-[270px] grid-cols-7 overflow-hidden rounded-lg">
                    {recommendedSeasonDetails && recommendedSeasonDetails.bestColors.map((color: string) => {
                    return (
                        <div
                            key={color}
                            style={{ backgroundColor: color || 'white'}}
                        ></div>
                    )
                    })}
            </div>
                <div>
                    <p className="font-heading text-left p-5">{recommendedSeasonDetails?.description}</p>
                </div>
            <button
                className="bg-gray-300 pt-3 pb-3 pl-3 pr-3 text-center text-l font-heading rounded-xl hover:cursor-pointer hover:bg-gray-200"
                onClick={() => setSelectionMenuOpen(!selectionMenuOpen)}
            >
                Select Color Palette <DownArrow className="inline"/>
            </button>
            {selectionMenuOpen && (
                <div className="h-48 overflow-y-auto rounded-bl-xl rounded-br-xl shadow-2xl">
                    <button 
                    onClick={() => {
                        setQuizModalOpen(true);
                        setSelectionMenuOpen(false);
                    }}
                    className="w-full hover:bg-gray-200 hover:cursor-pointer p-2"
                    >
                        Take Quiz
                    </button>
                    <ColorSelection onClick={selectPalette} />
                </div>
            )}
            </div>
        </main>

        

        {quizModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-heading">
                <div className="absolute inset-0 bg-gray-950 opacity-75">
                    <button onClick={() => setQuizModalOpen(false)} className="text-white absolute top-5 right-5 w-10 text-4xl hover:text-gray-400 hover:cursor-pointer">X</button>
                </div>

                <div className="relative z-10 max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-xl bg-white p-6">

                    <h3 className="font-heading text-2xl text-center p-5">{colorQuestions[questionIndex].heading}</h3>
                    <div>
                        {populateQuestion(questionIndex)}
                    </div>
                    <button 
                        className="bg-black text-white px-6 py-4 rounded-xl mx-auto block mt-5 hover:cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
                        disabled={!selectedAnswer}


                        onClick={async () => {
                        
                        const answersArray = { ... questionAnswers };

                        selectedWeights.forEach(weight => {
                            answersArray[weight.key] += weight.value;

                        })

                        setQuestionAnswers(answersArray);

                        if (questionIndex >= colorQuestions.length - 1) {
                            
                            const apiResponse = await analyzeColors(answersArray) || null;
                            setRecommendedSeasonDetails(apiResponse);

                            localStorage.setItem("colorPalette", JSON.stringify(apiResponse))

                            // set it in supabase
                            await saveColorResults(apiResponse);
                            const recommendationResponse = await getColorRecommendations(apiResponse);
                            setColorRecPhotos(recommendationResponse ?? []);
                            localStorage.setItem("colorRecPhotos", JSON.stringify(recommendationResponse));
                            
                            resetQuiz();
                        }
                        else {
                            setQuestionIndex(questionIndex + 1)
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