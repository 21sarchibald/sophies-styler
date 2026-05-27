import { useState } from "react";
import { questions } from "../data/questions";

import analyzeQuiz from "../services/quizApi";

export default function ColorPalette() {

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
    const [selectedWeights, setSelectedWeights] = useState<{ key: keyof typeof questionAnswers; value: number }[]>([]);

    const resetQuiz = () => {
        setQuizModalOpen(false);
        setQuestionIndex(0);
    }

    const populateQuestion = (questionIndex: number) => {
        const answers = questions[questionIndex].answers;

        return (
            <div className="flex justify-evenly">
                {answers.map((answer) => (
                        <button
                            key={answer.id}
                            onClick={() => {
                                const answerWeights: { key: keyof typeof questionAnswers; value:  number }[] = [];
                                Object.entries(answer.weights).forEach(([key, value]) => {
                                    answerWeights.push( {key: key as keyof typeof questionAnswers, value} );
                                })
                                setSelectedWeights(answerWeights);
                                console.log(selectedWeights);
                            }}
                        >
                            {answer.image && <img src={answer.image[0]} alt="Answer visual aid"/>}
                            {answer.text}
                        </button>
                ))
                }
            </div>
        )
    }

    return (
        <>
        <div>Color Palette</div>
        <button onClick={() => setQuizModalOpen(true)}>Open Quiz</button>


        {quizModalOpen && (
            <div className="fixed inset-0 flex">
                <div className="absolute inset-0 bg-gray-950 opacity-75">
                    <button onClick={() => setQuizModalOpen(false)} className="text-white absolute top-5 right-5 w-10 text-4xl">X</button>
                </div>

                <div className="relative mx-auto my-auto bg-white w-180 h-120 opacity-100 z-10">

                    <h3 className="font-heading text-2xl text-center">{questions[questionIndex].heading}</h3>
                    <div>
                        {populateQuestion(questionIndex)}
                    </div>
                    <button className="bg-black text-white px-4 py-2 rounded-xl mx-auto"
                    
                        onClick={() => {
                        
                        const answersArray = { ... questionAnswers };

                        selectedWeights.forEach(weight => {
                            answersArray[weight.key] += weight.value;

                        })
                        console.log('answersArray', answersArray);

                        setQuestionAnswers(answersArray);

                        if (questionIndex >= questions.length - 1) {
                            console.log("question answers", questionAnswers);
                            
                            analyzeQuiz(questionAnswers);
                            resetQuiz()
                        }
                        else {
                            setQuestionIndex(questionIndex + 1)
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