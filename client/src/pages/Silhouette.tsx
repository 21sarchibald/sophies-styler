import { useState } from "react";
import DownArrow from "../assets/icons/down-arrow.svg?react";
import { silhouetteQuestions } from "../data/silhouetteQuestions";
import QuizAnswerButton from "../components/QuizAnswerButton";

import analyzeSilhouette from "../services/silhouetteService";

import appleSilhouette from "../assets/images/silhouette/apple-silhouette.png";
import hourglassSilhouette from "../assets/images/silhouette/hourglass-silhouette.png";
import invertedTriangleSilhouette from '../assets/images/silhouette/inverted-triangle-silhouette.png';
import pearSilhouette from "../assets/images/silhouette/pear-silhouette.png";
import rectangleSilhouette from "../assets/images/silhouette/rectangle-silhouette.png";

export default function Silhouette() {

    interface SilhouetteAnswer {
        id: string;
        text: string;
        image: string[];
    }

    type SilhouetteSubmission = {
        silhouette: string;
        proportions: string;
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
        proportions: "",
    });

    const [silhouetteDetails, setSilhouetteDetails] = useState(() => {
        const silhouette = localStorage.getItem("silhouette");

        return silhouette ? JSON.parse(silhouette) : null;
    });

    const resetQuiz = () => {
        setQuizModalOpen(false);
        setQuestionIndex(0);
        setSelectedAnswer(null);
        setQuestionAnswers(
            {
                silhouette: "",
                proportions: "",
            }
        )
    }

    const populateQuestion = (questionIndex: number) => {
        const answers = silhouetteQuestions[questionIndex].answers;

        return (
            <div className="flex flex-wrap justify-evenly">
                {answers.map((answer) => (
                        <QuizAnswerButton
                            key={answer.id}
                            isSelected={selectedAnswer?.id === answer.id}
                            padding={5}
                            onClick={() => {
                                setSelectedAnswer(answer);
                            }}
                        >
                            {answer.image && <img className="pb-5 mx-auto w-28"src={answer.image[0]} alt="Answer visual aid"/>}
                            {answer.text && <div className="w-32">{answer.text}</div>}
                        </QuizAnswerButton>
                ))
                }
            </div>
        )
    }

    return (
        <>
        <main className="grid grid-cols-3 h-full">
            <div className="col-span-2">Pics of Suggestions</div>
            <div className="col-span-1 text-center flex flex-col justify-evenly h-full">
                <h2 className="font-heading text-2xl">Your Silhouette</h2>
                {silhouetteDetails && (
                    <h2 className="font-heading font-extrabold text-2xl pt-5">{silhouetteDetails.silhouette}</h2>
                )}
                <div className=" h-120 w-68 mx-auto">
                    {silhouetteDetails && (
                        <>
                        <img src={silhouetteImages[silhouetteDetails.silhouette]} className="w-36 mx-auto"/>
                        <ul>
                            {silhouetteDetails.silhouetteSuggestions.map((suggestion: string) => (
                                <li
                                key={suggestion}
                                >
                                {suggestion}
                                </li>
                            ))}
                        </ul>
                        <h2 className="font-heading text-left p-5">{silhouetteDetails.proportions}</h2>
                        <ul>
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
                <div>
                </div>
            <button
                className="bg-gray-300 pt-3 pb-3 pl-3 pr-3 text-center text-l font-heading rounded-xl hover:cursor-pointer hover:bg-gray-200"
                onClick={() => setQuizModalOpen(true)}
            >Take Quiz
            </button>
            </div>
        </main>

        {quizModalOpen && (
            <div className="fixed inset-0 flex font-heading">
                <div className="absolute inset-0 bg-gray-950 opacity-75">
                    <button onClick={() => setQuizModalOpen(false)} className="text-white absolute top-5 right-5 w-10 text-4xl hover:text-gray-400 hover:cursor-pointer">X</button>
                </div>

                <div className="relative mx-auto my-auto bg-white w-280 h-150 opacity-100 z-10 p-5">

                    <h3 className="font-heading text-2xl text-center p-5">Which silhouette matches yours best?</h3>
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

                            setQuestionAnswers(answersArray);

                            if (questionIndex >= silhouetteQuestions.length - 1) {
                                const apiResponse = await analyzeSilhouette(answersArray) || null;

                                if (apiResponse) {
                                    setSilhouetteDetails(apiResponse);
                                }

                                localStorage.setItem("silhouette", JSON.stringify(apiResponse));
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