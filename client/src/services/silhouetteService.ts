import type { SilhouetteDetails } from "../types/SilhouetteDetails";
import { supabase } from "./supabase";

type SilhouetteSubmission = {
    silhouette: string;
    proportions: string;
}

export default async function analyzeSilhouette(silhouetteSubmission: SilhouetteSubmission) {
    try {
        const results = await fetch(`${import.meta.env.VITE_API_URL}/api/silhouette/analyze`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(silhouetteSubmission)
        });
        
        const response = await results.json();

        if (!results.ok) {
            throw new Error(`Error: ${results.status}`)
        }

        return response as SilhouetteDetails;
    }

    catch (error) {
        console.log(error);
        return null;
    }
}

export async function saveSilhouetteResults(result:SilhouetteDetails | null) {

    const { data: { user },
    } = await supabase.auth.getUser();

    if (user) {
        const { data, error } = await supabase.from("silhouette_assignments").upsert(
            {
                user_id: user?.id,
                silhouette: result?.silhouette,
                silhouette_code: result?.silhouetteCode,
                silhouette_suggestions: result?.silhouetteSuggestions,
                proportions: result?.proportions,
                proportions_code: result?.proportionsCode,
                proportions_suggestions: result?.proportionsSuggestions,
            },
            {
                onConflict: "user_id"
            }
        )

        if (error) {
            console.error("Failed to save silhouette results", error);
            return;
        }
        return data;
    }
}

export async function getSilhouetteRecommendations(silhouetteDetails:SilhouetteDetails | null) {

        const { data, error } = await supabase.from("silhouette_images").select("*")
        .contains("tags", [silhouetteDetails?.silhouetteCode, silhouetteDetails?.proportionsCode])
        if (!error) {

            localStorage.setItem("silhouetteRecPhotos", JSON.stringify(data));
            return data;
        }
}