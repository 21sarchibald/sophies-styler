import paintSwatchImage from '../assets/images/paint-swatches.png'
import silhouetteImage from '../assets/images/silhouette-photo.png'
import hairFlipImage from '../assets/images/hair-flip.png'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
        <div className="flex gap-15 ml-30 mt-20">
            <Link to="/color-palette" className="w-80 h-150 font-bold bg-violet-200 rounded-xl block hover:cursor-pointer transition-all duration-200 hover:scale-105">
                    <h3 className="font-heading text-3xl mb-20 mt-15 text-center">Discover your color palette</h3>
                    <img src={paintSwatchImage} className="my-0 mx-auto"/>
            </Link>
            <Link to="/silhouette" className="w-80 h-150 font-bold bg-blue-200 rounded-xl block hover:cursor-pointer transition-all duration-200 hover:scale-105">
                <h3 className="font-heading text-3xl mb-20 mt-15 text-center">Discover your silhouette</h3>
                <img src={silhouetteImage} className="my-0 mx-auto"/>
            </Link>
            <Link to="/hair" className="w-80 h-150 font-bold bg-pink-200 rounded-xl block hover:cursor-pointer transition-all duration-200 hover:scale-105">
                <h3 className="font-heading text-3xl mb-20 mt-15 text-center">Discover your hairstyle</h3>
                <img src={hairFlipImage} className="my-0 mx-auto"/>
            </Link>

        </div>
        </>
    )
}