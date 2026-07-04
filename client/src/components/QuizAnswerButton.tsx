
export default function QuizAnswerButton({ 
    children,
    isSelected,
    // padding,
    // width,
    onClick,
}: {
    children: React.ReactNode;
    isSelected: boolean;
    padding?: number;
    width?: number;
    onClick: () => void;
}) {
    return (
        <button 
            onClick={() => {
                onClick();
            }}

            className={`rounded-2xl p-5 hover:bg-blue-50 hover:cursor-pointer ${isSelected ? 'bg-blue-50' : 'bg-white'}`}
        >{children}</button>
    )
}