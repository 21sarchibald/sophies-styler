import { useState } from "react";
import { hairQuestions } from "../data/hairQuestions";
import QuizAnswerButton from "../components/QuizAnswerButton";

import analyzeHair, { saveHairResults } from "../services/hairService";
import type { HairDetails } from "../types/HairDetails";

import diamondHead from "../assets/images/hair/diamond-head.png";
import heartHead from "../assets/images/hair/heart-head.png";
import longHead from "../assets/images/hair/long-head.png";
import ovalHead from "../assets/images/hair/oval-head.png";
import roundHead from "../assets/images/hair/round-head.png";
import squareHead from "../assets/images/hair/square-head.png";

export default function Hair() {

    interface HairAnswer {
        id: string;
        text: string;
        image: string[];
    }

    type HairSubmission = {
        faceShape: string;
        hairColor: string;
        hairTexture: string;
    }

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
        hairColor: "",
        hairTexture: "",
    })

    const [hairDetails, setHairDetails] = useState(() => {
        const hairstyle = localStorage.getItem("hairstyle");

        return hairstyle ? JSON.parse(hairstyle) : null;
    });

    const resetQuiz = () => {
        setQuizModalOpen(false);
        setQuestionIndex(0);
        setSelectedAnswer(null);
        setQuestionAnswers(
            {
                faceShape: "",
                hairColor: "",
                hairTexture: "",
            }
        )
    }

    const populateQuestion = (questionIndex: number) => {
        const answers = hairQuestions[questionIndex].answers;

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
                            {answer.image && <img className="pb-5 mx-auto w-36"src={answer.image[0]} alt="Answer visual aid"/>}
                            {answer.text}
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
                <h2 className="font-heading text-2xl">Your Hairstyle</h2>
                {hairDetails && (
                    <>
                    <h2 className="font-heading font-extrabold text-2xl pt-5">{hairDetails.faceShape}</h2>
                    </>
                )}
                <div className="h-120 w-68 mx-auto">
                {hairDetails && (
                    <>
                    <img src={hairImages[hairDetails.faceShape]} alt="" className="w-36 mx-auto"/>
                    <ul>
                            {hairDetails.faceShapeSuggestions.map((suggestion: string) => (
                                <li
                                key={suggestion}
                                >
                                {suggestion}
                                </li>
                            ))}
                        </ul>
                    <h2 className="font-heading font-extrabold text-2xl pt-5">{hairDetails.hairColor}</h2>
                    <img></img>
                    <h2 className="font-heading font-extrabold text-2xl pt-5">{hairDetails.hairTexture}</h2>
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
            <div className="fixed inset-0 flex font-heading">
                <div className="absolute inset-0 bg-gray-950 opacity-75">
                    <button onClick={() => setQuizModalOpen(false)} className="text-white absolute top-5 right-5 w-10 text-4xl hover:text-gray-400 hover:cursor-pointer">X</button>
                </div>

                <div className="relative mx-auto my-auto bg-white w-350 h-160 opacity-100 z-10 p-5">

                    <h3 className="font-heading text-2xl text-center p-5">{hairQuestions[questionIndex].heading}</h3>
                    <div>
                        {populateQuestion(questionIndex)}
                    </div>
                    <button 
                        className="bg-black text-white px-6 py-4 rounded-xl mx-auto block mt-20 hover:cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
                        disabled={!selectedAnswer}


                        onClick={ async () => {
                            const answersArray = { ... questionAnswers };
                            const questionId = hairQuestions[questionIndex].id as keyof HairSubmission;

                            answersArray[questionId] = selectedAnswer?.text ?? "";

                            setQuestionAnswers(answersArray);

                            if (questionIndex >= hairQuestions.length - 1) {
                                const apiResponse = await analyzeHair(answersArray) || null;

                                if (apiResponse) {
                                    setHairDetails(apiResponse);
                                }

                                localStorage.setItem("hairstyle", JSON.stringify(apiResponse));
                                saveHairResults(apiResponse);
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