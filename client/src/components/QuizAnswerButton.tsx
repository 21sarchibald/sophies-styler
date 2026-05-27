import { useState } from "react";

export default function QuizAnswerButton({ 
    children,
    onClick,
}: {
    children: React.ReactNode;
    onClick: () => void;
}) {

    const [isSelected, setIsSelected] = useState(false);

    return (
        <button 
            onClick={() => {
                setIsSelected(true);
                onClick();
            }}

            className={`rounded-2xl p-10 hover:bg-blue-50 hover:cursor-pointer ${isSelected ? 'bg-blue-50' : 'bg-white'}`}
        >{children}</button>
    )
}