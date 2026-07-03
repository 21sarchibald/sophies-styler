import { getColorRecommendations } from "./colorService";
import { getSilhouetteRecommendations } from "./silhouetteService";
import { getHairRecommendations } from "./hairService";
import { supabase } from "./supabase";

export async function getUserColorPalette(userId: string) {
    const { data, error } = await supabase
        .from("color_palette_assignments")
        .select("*")
        .eq("user_id", userId)
        .maybeSingle();

    if (error) {
        throw error
    }

    if (data) {
        console.log("data", data);

        const details = data.color_details;

        // const details = {
        //     season: responseDetails.season,
        //     seasonCode: responseDetails.seasonCode,
        //     seasonFamily: responseDetails.seasonFamily,
        //     temperature: string;
        //     value: string;

        //     description: string;

        //     bestColors: string[];
        //     bestNeutrals: string[];

        //     metals: string;

        //     avoidColors: string[];
        // }

        localStorage.setItem("colorPalette", JSON.stringify(details));
        return details;
    }
}

export async function getUserSilhouette(userId: string) {
    const { data, error } = await supabase
        .from("silhouette_assignments")
        .select("*")
        .eq("user_id", userId)
        .maybeSingle();

    if (error) {
        throw error
    }

    if (data) {
        
        const details = {
            silhouette: data.silhouette,
            silhouetteCode: data.silhouette_code,
            silhouetteSuggestions: data.silhouette_suggestions,
            proportions: data.proportions,
            proportionsCode: data.proportions_code,
            proportionsSuggestions: data.proportions_suggestions,
        }

        localStorage.setItem("silhouette", JSON.stringify(details));

        return details;

    }
}

export async function getUserHair(userId: string) {
    const { data, error } = await supabase
        .from("hair_assignments")
        .select("*")
        .eq("user_id", userId)
        .maybeSingle();

    if (error) {
        throw error
    }

    if (data) {

        const details = {
            faceShape: data.face_shape,
            faceShapeCode: data.face_shape_code,
            faceShapeSuggestions: data.face_shape_suggestions,
            hairColor: data.hair_color,
            hairColorCode: data.hair_color_code,
            hairTexture: data.hair_texture,
            hairTextureCode: data.hair_texture_code
        }

        localStorage.setItem("hairstyle", JSON.stringify(details));

        return details;

    }
}

export async function initializeUser(userId: string) {
    const colorPalette = await getUserColorPalette(userId);
    if (colorPalette) {
        await getColorRecommendations(colorPalette);
    }
    const silhouette = await getUserSilhouette(userId);
    if (silhouette) {
        await getSilhouetteRecommendations(silhouette);
    }
    const hair = await getUserHair(userId);
    console.log("hair response", hair);
    if (hair) {
        await getHairRecommendations(hair);
    }
}