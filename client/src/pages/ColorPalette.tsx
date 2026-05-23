import { useState } from "react";
import { questions } from "../data/questions";

export default function ColorPalette() {

    const [quizModalOpen, setQuizModalOpen] = useState(false);
    const [questionIndex, setQuestionIndex] = useState(0);

    const resetQuiz = () => {
        setQuizModalOpen(false);
        setQuestionIndex(0);
    }

    const populateQuestion = (questionIndex) => {
        const answers = questions[questionIndex].answers;

        return (
            <div>
                {answers.map((answer) => (
                        <button>
                            {answer.images && <img src={answer.images[0]}/>}
                            
                            
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
                    
                        onClick={() => 
                        
                        (questionIndex >= questions.length - 1) 
                        ? resetQuiz()
                        : setQuestionIndex(questionIndex + 1)
                    
                        }>Next</button>
                    {/* <div>Progress bar</div> */}

                </div>

            </div>
        )
    }
        </>
    )
}