
export default function QuizAnswerButton({ 
    children,
    isSelected,
    onClick,
}: {
    children: React.ReactNode;
    isSelected: boolean;
    onClick: () => void;
}) {
    return (
        <button 
            onClick={() => {
                onClick();
            }}

            className={`rounded-2xl p-10 hover:bg-blue-50 hover:cursor-pointer ${isSelected ? 'bg-blue-50' : 'bg-white'}`}
        >{children}</button>
    )
}