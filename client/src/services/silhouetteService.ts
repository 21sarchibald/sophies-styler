import type { SilhouetteDetails } from "../types/SilhouetteDetails";
import { supabase } from "./supabase";

type SilhouetteSubmission = {
    silhouette: string;
    proportions: string;
}

const { data: { user },
    } = await supabase.auth.getUser();

export default async function analyzeSilhouette(silhouetteSubmission: SilhouetteSubmission) {
    try {
        const results = await fetch('http://localhost:8080/api/silhouette/analyze', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(silhouetteSubmission)
        });
        
        const response = await results.json();
        console.log(response);

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
    console.log("save silhouette function running");

    if (user) {
        return await supabase.from("silhouette_assignments").upsert(
            {
                user_id: user?.id,
                silhouette: result?.silhouette,
                silhouette_suggestions: result?.silhouetteSuggestions,
                proportions: result?.proportions,
                proportions_suggestions: result?.proportionsSuggestions,
            },
            {
                onConflict: "user_id"
            }
        )
    }
    else return;
}