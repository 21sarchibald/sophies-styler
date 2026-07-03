import paintSwatchImage from "../assets/images/home/paint-swatches.png";
import silhouetteImage from "../assets/images/home/silhouette-photo.png";
import hairFlipImage from "../assets/images/home/hair-flip.png";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 py-10 sm:px-8 md:py-16 lg:flex-row lg:items-stretch lg:justify-center">
            <Link
                to="/color-palette"
                className="flex w-full max-w-sm flex-col rounded-xl bg-violet-200 p-6 transition-transform duration-200 hover:scale-105"
            >
                <h3 className="mb-8 text-center font-heading text-2xl font-bold md:text-3xl">
                    Discover your color palette
                </h3>

                <img
                    src={paintSwatchImage}
                    alt="Paint swatches"
                    className="mx-auto mt-auto w-full max-w-[220px] object-contain"
                />
            </Link>

            <Link
                to="/silhouette"
                className="flex w-full max-w-sm flex-col rounded-xl bg-blue-200 p-6 transition-transform duration-200 hover:scale-105"
            >
                <h3 className="mb-8 text-center font-heading text-2xl font-bold md:text-3xl">
                    Discover your silhouette
                </h3>

                <img
                    src={silhouetteImage}
                    alt="Silhouette"
                    className="mx-auto mt-auto w-full max-w-[220px] object-contain"
                />
            </Link>

            <Link
                to="/hair"
                className="flex w-full max-w-sm flex-col rounded-xl bg-pink-200 p-6 transition-transform duration-200 hover:scale-105"
            >
                <h3 className="mb-8 text-center font-heading text-2xl font-bold md:text-3xl">
                    Discover your hairstyle
                </h3>

                <img
                    src={hairFlipImage}
                    alt="Hair"
                    className="mx-auto mt-auto w-full max-w-[220px] object-contain"
                />
            </Link>
        </div>
    );
}