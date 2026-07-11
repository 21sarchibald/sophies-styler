interface ColorSelectionProps {
    onClick: (paletteName: string) => void;
}

export default function ColorSelection({ 
    onClick, 
}: ColorSelectionProps) {
    const colorPalettes = [
        "Light Spring",
        "True Spring",
        "Bright Spring",
        "Light Summer",
        "True Summer",
        "Soft Summer",
        "Dark Autumn",
        "True Autumn",
        "Soft Autumn",
        "Dark Winter",
        "True Winter",
        "Bright Winter",
    ]

    return (
        <div>
        {colorPalettes.map((palette) => (
            <button 
            key={palette}
            onClick={() => onClick(palette)}
            className="block text-center w-full hover:bg-gray-200 hover:cursor-pointer p-2 border-t border-gray-400"
            >
            {palette}
            </button>
        ))}
        </div>
    );
}