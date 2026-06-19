import type { HairDetails } from "../types/HairDetails";
import { supabase } from "./supabase";

type HairSubmission = {
    faceShape: string;
}

const { data: { user },
    } = await supabase.auth.getUser();

export default async function analyzeHair(hairSubmission: HairSubmission) {
    try {
        const results = await fetch('http://localhost:8080/api/hair/analyze', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(hairSubmission)
        });
        
        const response = await results.json();
        console.log(response);

        if (!results.ok) {
            throw new Error(`Error: ${results.status}`)
        }

        return response as HairDetails;
    }

    catch (error) {
        console.log(error);
        return null;
    }
}

export async function saveHairResults(result:HairDetails | null) {
    console.log("save hair function running");

    if (user) {
        return await supabase.from("hair_assignments").upsert(
            {
                user_id: user?.id,
                face_shape: result?.faceShape,
                face_shape_suggestions: result?.faceShapeSuggestions,
                hair_color: result?.hairColor,
                hair_texture: result?.hairTexture,
            },
            {
                onConflict: "user_id"
            }
        )
    }
    else return;
}