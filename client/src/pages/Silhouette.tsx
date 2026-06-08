import { useState } from "react";
import { silhouetteQuestions } from "../data/silhouetteQuestions";
import QuizAnswerButton from "../components/QuizAnswerButton";

import analyzeSilhouette from "../services/silhouetteService";

export default function Silhouette() {

    interface SilhouetteAnswer {
        id: string;
        text: string;
        image: string[];
    }

    type SilhouetteSubmission = {
        silhouette: string;
    }

    const [quizModalOpen, setQuizModalOpen] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<SilhouetteAnswer | null>(null);
    const questionIndex = 0;

    const resetQuiz = () => {
        setQuizModalOpen(false);
        setSelectedAnswer(null);
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
        <div>Silhouette</div>
        <button onClick={() => setQuizModalOpen(true)}>Open Quiz</button>
        <main className="grid grid-cols-3">
            <div className="col-span-2">Pics of Suggestions</div>
            <div className="col-span-1">Suggestion Info</div>
        </main>

        {quizModalOpen && (
            <div className="fixed inset-0 flex font-heading">
                <div className="absolute inset-0 bg-gray-950 opacity-75">
                    <button onClick={() => setQuizModalOpen(false)} className="text-white absolute top-5 right-5 w-10 text-4xl hover:text-gray-400 hover:cursor-pointer">X</button>
                </div>

                <div className="relative mx-auto my-auto bg-white w-180 h-120 opacity-100 z-10 p-5">

                    <h3 className="font-heading text-2xl text-center p-5">Which silhouette matches yours best?</h3>
                    <div>
                        {populateQuestion(questionIndex)}
                    </div>
                    <button 
                        className="bg-black text-white px-6 py-4 rounded-xl mx-auto block mt-20 hover:cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
                        disabled={!selectedAnswer}


                        onClick={() => {

                            if (selectedAnswer) {
                                console.log(selectedAnswer.text);
                                const text = selectedAnswer.text;
                                const submission: SilhouetteSubmission = { silhouette: text }
                                analyzeSilhouette(submission);
                                resetQuiz();
                            }
                        }
                        }>Submit</button>
                    {/* <div>Progress bar</div> */}

                </div>

            </div>
        )
    }
    </>
    )
}