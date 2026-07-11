import type { HairDetails } from "../types/HairDetails";
import { supabase } from "./supabase";

type HairSubmission = {
    faceShape: string;
}


export default async function analyzeHair(hairSubmission: HairSubmission) {
       
    try {
        const results = await fetch(`${import.meta.env.VITE_API_URL}/api/hair/analyze`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(hairSubmission)
        });
        
        const response = await results.json();

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
    const { data: { user },
        } = await supabase.auth.getUser();

    if (user) {
        const { data, error }= await supabase.from("hair_assignments").upsert(
            {
                user_id: user?.id,
                face_shape: result?.faceShape,
                face_shape_code: result?.faceShapeCode,
                face_shape_suggestions: result?.faceShapeSuggestions,
                hair_color: result?.hairColor,
                hair_color_code: result?.hairColorCode,
                hair_texture: result?.hairTexture,
                hair_texture_code: result?.hairTextureCode,
            },
            {
                onConflict: "user_id"
            }
        )

        if (error) {
            console.error("Failed to save color results", error);
            return;
        }
        return data;
    }
}

export async function getHairRecommendations(hairDetails:HairDetails | null) {

        const { data, error } = await supabase.from("hair_images").select("*")
        .contains("tags", [hairDetails?.faceShapeCode, hairDetails?.hairColorCode, hairDetails?.hairTextureCode])

        if (!error) {

            localStorage.setItem("hairRecPhotos", JSON.stringify(data));
            return data;
        }
}