
export default function LoadingSpinner({ 
    text = "Loading"
}: {
    text?: string;
}) {
    return (
        <div className="flex flex-col items-center justify-center p-10">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-pink-600 border-t-transparent m-10"/>
            <p className="font-normal">{text}</p>
        </div>
    )
}