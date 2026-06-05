import { useState } from "react";
import { colorQuestions } from "../data/colorQuestions";
import QuizAnswerButton from "../components/QuizAnswerButton";

import analyzeColors from "../services/colorService";

export default function ColorPalette() {

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
        // weights: {key: keyof typeof questionAnswers; value: number }[]
    }

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

    const populateQuestion = (questionIndex: number) => {
        const answers = colorQuestions[questionIndex].answers;

        return (
            <div className="flex justify-evenly">
                {answers.map((answer) => (
                        <QuizAnswerButton
                            
                            key={answer.id}
                            isSelected={selectedAnswer?.id === answer.id}
                            onClick={() => {

                                setSelectedAnswer(answer);

                                const answerWeights: { key: keyof typeof questionAnswers; value:  number }[] = [];
                                Object.entries(answer.weights).forEach(([key, value]) => {
                                    answerWeights.push( {key: key as keyof typeof questionAnswers, value} );
                                })
                                setSelectedWeights(answerWeights);
                                // console.log(selectedWeights);
                            }}
                        >
                            {answer.image && <img className="pb-5 mx-auto w-85 object-cover"src={answer.image[0]} alt="Answer visual aid"/>}
                            {answer.text}
                        </QuizAnswerButton>
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
            <div className="fixed inset-0 flex font-heading">
                <div className="absolute inset-0 bg-gray-950 opacity-75">
                    <button onClick={() => setQuizModalOpen(false)} className="text-white absolute top-5 right-5 w-10 text-4xl hover:text-gray-400 hover:cursor-pointer">X</button>
                </div>

                <div className="relative mx-auto my-auto bg-white w-180 h-120 opacity-100 z-10 p-5">

                    <h3 className="font-heading text-2xl text-center p-5">{colorQuestions[questionIndex].heading}</h3>
                    <div>
                        {populateQuestion(questionIndex)}
                    </div>
                    <button 
                        className="bg-black text-white px-6 py-4 rounded-xl mx-auto block mt-5 hover:cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
                        disabled={!selectedAnswer}


                        onClick={() => {
                        
                        const answersArray = { ... questionAnswers };

                        selectedWeights.forEach(weight => {
                            answersArray[weight.key] += weight.value;

                        })
                        // console.log('answersArray', answersArray);

                        setQuestionAnswers(answersArray);

                        if (questionIndex >= colorQuestions.length - 1) {
                            // console.log("question answers", answersArray);
                            
                            analyzeColors(answersArray);
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