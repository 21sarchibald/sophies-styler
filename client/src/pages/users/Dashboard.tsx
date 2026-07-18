import { useAuth } from "../../context/useAuth";
import { signOut } from "../../services/authService"
import { useNavigate } from "react-router-dom";
import { getUserColorPalette, getUserSilhouette, getUserHair } from "../../services/userService";
import { getSavedImages, getOptimizedImage, unsaveImage } from "../../services/imageService";
import { useEffect, useState } from "react";
import ExternalLinkIcon from "../../assets/icons/external-link-icon.svg?react"
import UnsaveIcon from "../../assets/icons/unsave-icon.svg?react"
import GallerySkeleton from "../../components/skeletons/GallerySkeleton";
import DashboardSkeleton from "../../components/skeletons/DashboardSkeleton";

export default function Dashboard() {

    const { user } = useAuth();
    const navigate = useNavigate();

    type SavedPhoto = {
        id: number;
        image_url: string;
        tags: string[];
        external_link: string;
        created_at: string;
    }

    const [loading, setLoading] = useState(true);
    const [signingOut, setSigningOut] = useState(false);

    const [allSavedPhotos, setAllSavedPhotos] = useState<SavedPhoto[]>([]);
    const [userColorPalette, setUserColorPalette] = useState("");
    const [userSilhouette, setUserSilhouette] = useState("");
    const [userHair, setUserHair] = useState("");

    useEffect(() => {
        const userId = user?.id || "";
        if (!userId) return;

    
        async function loadDashboard() {
            try {
                const [colorPalette, silhouette, hair, savedImages] = await Promise.all([
                getUserColorPalette(userId),
                getUserSilhouette(userId),
                getUserHair(userId),
                getSavedImages(),
            ]);

            console.log("color", colorPalette);
console.log("silhouette", silhouette);
console.log("hair", hair);
console.log("images", savedImages);
    
            setUserColorPalette(colorPalette?.season ?? "");
            setUserSilhouette(silhouette?.silhouette ?? "");
            setUserHair(hair?.faceShape ?? "");
            setAllSavedPhotos(savedImages);
            }
            finally {
                setLoading(false);
            }
        }
            loadDashboard();
    }, [user?.id]);

    const handleUnsave = async (url: string) => {
        await unsaveImage(url);

        setAllSavedPhotos(prev =>
            prev.filter(photo => photo.image_url !== url)
        );
    }


    async function handleSignOut() {
        setSigningOut(true);
        const error = await signOut();

        if (error) {
            console.log("Error logging out");
            setSigningOut(false);
            return;
        } else {
            navigate("/users/login");
        }
    }

    if (loading) {
        return (
            <main className="mx-auto flex max-w-7xl flex-col-reverse gap-8 px-4 py-6 lg:flex-row">
    
                <div className="flex-1">
                    <GallerySkeleton />
                </div>
    
                <DashboardSkeleton />
    
            </main>
        );
    }

    return (
        <>
        <main className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-6 lg:flex-row">
            <div className="flex-1">
                <div className="w-full rounded-xl bg-white p-5 shadow-sm lg:sticky lg:top-0 lg:h-screen lg:w-80 xl:w-96 flex-col items-center justify-center">
                    <h2 className="font-heading text-2xl font-bold text-center">Your Profile</h2>
                    <div className="p-5">
                        <h3 className="font-heading text-l font-bold">Name:</h3>
                        <p className="mb-4">
                            {user?.user_metadata.first_name} {user?.user_metadata.last_name}
                        </p>
                        <h3 className="font-heading text-l font-bold">Email:</h3>
                        <p className="mb-4">
                            {user?.email}
                        </p>
                        <h3 className="font-heading text-l font-bold">Color Palette:</h3>
                        <p className="mb-4">
                            {userColorPalette}
                        </p>
                        <h3 className="font-heading text-l font-bold">Silhouette:</h3>
                        <p className="mb-4">
                            {userSilhouette}
                        </p>
                        <h3 className="font-heading text-l font-bold">Face Shape:</h3>
                        <p className="mb-4">
                            {userHair}
                        </p>
                    </div>
                    <button disabled={signingOut} onClick={handleSignOut} className="w-full bg-black text-white hover:cursor-pointer hover:bg-gray-800 p-3 rounded-4xl disabled:bg-gray-500 disabled:cursor-not-allowed">{(signingOut) ? "Signing Out..." : "Sign Out"}
                    </button>
                </div>
            </div>
            <div className="flex-2">
                <h3 className="font-heading text-xl mb-2">Your Saved Inspiration</h3>
                <div className="columns-2 sm:columns-3 lg:columns-4 gap-4">
                    {allSavedPhotos.map((rec: SavedPhoto) => { return (
                        <div key={rec.image_url} className="relative group">
                            <button
                            onClick={() => handleUnsave(rec.image_url)}
                            className="bg-white/90 opacity-0 transition-opacity duration-200 group-hover:opacity-100 hover:bg-white hover:cursor-pointer h-7 w-7 z-9 absolute right-1 top-1 rounded-sm"
                            >
                                <UnsaveIcon className="w-7 h-7"/>
                            </button>
                            {rec.external_link && (
                                <a 
                                href={rec.external_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/90 opacity-0 transition-opacity duration-200 group-hover:opacity-100 hover:bg-white hover:cursor-pointer h-7 w-7 z-9 absolute left-1 bottom-1 rounded-sm"
                                >
                                    <ExternalLinkIcon className="w-7 h-7"/>
                                </a>
                            )}
                            <img 
                                src={getOptimizedImage(rec.image_url)}
                                alt="Photo" 
                                className="mb-4 w-full break-inside-avoid rounded-lg object-cover transition-transform duration-200 group-hover:scale-[1.02]" />
                        </div>
                        )})
                    }
                </div>
            </div>
        </main> 
    </>
    )
}