import paintSwatchImage from '../assets/images/paint-swatches.png'

export default function Home() {
    return (
        <>
        <div><h1 className="font-heading">Home</h1></div>

        <div>
            <button className="w-80 h-150 bg-violet-200 rounded-xl">
                <h3 className="font-heading text-3xl mb-20">Discover your color palette</h3>
                <img src={paintSwatchImage} className="my-0 mx-auto"/>
            </button>
        </div>
        </>
    )
}