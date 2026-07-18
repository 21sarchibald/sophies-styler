import heroImage from "../assets/images/home/hero-image.png";
import paintSwatchImage from "../assets/images/home/paint-swatches.png";
import silhouetteImage from "../assets/images/home/silhouette-photo.png";
import hairFlipImage from "../assets/images/home/hair-flip.png";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <div className="relative top-7 w-full h-[300px] overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroImage})`}} />
                <div className="absolute inset-0 bg-white/70"/>
                <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
                    <h1 className="font-heading text-4xl text-black text-center sm:text-5xl lg:text-6xl font-bold">Personalized Styling. 100% Free.</h1>
                    <h2 className="mx-auto mt-4 max-w-3xl text-center text-xl text-black lg:text-2xl">Every woman deserves to look and feel her best. Personal style is not one-size-fits-all. Find styles that emphasize your natural beauty.</h2>
                </div>
            </div>

            <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 py-10 sm:px-8 md:py-16 lg:flex-row lg:items-stretch lg:justify-center">
                <Link
                    to="/color-palette"
                    className="flex w-full max-w-sm flex-col rounded-xl bg-violet-200 p-6 transition-transform duration-200 hover:scale-105"
                >
                    <h3 className="mb-2 text-center font-heading text-2xl font-bold md:text-3xl p-1">
                        Discover your color palette
                    </h3>

                    <img
                        src={paintSwatchImage}
                        alt="Paint swatches"
                        className="mx-auto mt-auto w-full max-w-[180px] object-contain"
                    />
                </Link>

                <Link
                    to="/silhouette"
                    className="flex w-full max-w-sm flex-col rounded-xl bg-blue-200 p-6 transition-transform duration-200 hover:scale-105"
                >
                    <h3 className="mb-5 text-center font-heading text-2xl font-bold md:text-3xl p-1">
                        Discover your silhouette
                    </h3>

                    <img
                        src={silhouetteImage}
                        alt="Silhouette"
                        className="mx-auto mt-auto w-full max-w-[180px] object-contain"
                    />
                </Link>

                <Link
                    to="/hair"
                    className="flex w-full max-w-sm flex-col rounded-xl bg-pink-200 p-6 transition-transform duration-200 hover:scale-105"
                >
                    <h3 className="mb-2 text-center font-heading text-2xl font-bold md:text-3xl p-1">
                        Discover your hairstyle
                    </h3>

                    <img
                        src={hairFlipImage}
                        alt="Hair"
                        className="mx-auto mt-auto w-full max-w-[180px] object-contain"
                    />
                </Link>
            </div>
        </>
    );
}
