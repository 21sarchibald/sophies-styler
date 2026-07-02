import { getHairRecommendations } from "./hairService";
import { getSilhouetteRecommendations } from "./silhouetteService";
import { supabase } from "./supabase";

export async function getUserColorPalette(userId: string) {
    const { data, error } = await supabase
        .from("color_palette_assignments")
        .select("*")
        .eq("user_id", userId)
        .single();

    if (error) {
        throw error
    }

    if (data) {
        console.log("data", data);
        localStorage.setItem("colorPalette", JSON.stringify(data.color_details));
    }
}

export async function getUserSilhouette(userId: string) {
    const { data, error } = await supabase
        .from("silhouette_assignments")
        .select("*")
        .eq("user_id", userId)
        .single();

    if (error) {
        throw error
    }

    if (data) {
        
        const details = {
            silhouette: data.silhouette,
            silhouetteSuggestions: data.silhouette_suggestions,
            proportions: data.proportions,
            proportionsSuggestions: data.proportions_suggestions,
        }

        // const recommendations = await getSilhouetteRecommendations(data);


        console.log("data", data);
        localStorage.setItem("silhouette", JSON.stringify(details));

        // console.log(recommendations);

        // localStorage.setItem("silhouetteRecPhotos", JSON.stringify(recommendations));

    }
}

export async function getUserHair(userId: string) {
    const { data, error } = await supabase
        .from("hair_assignments")
        .select("*")
        .eq("user_id", userId)
        .single();

    if (error) {
        throw error
    }

    if (data) {

        const details = {
            faceShape: data.face_shape,
            faceShapeSuggestions: data.face_shape_suggestions,
            hairColor: data.hair_color,
            hairTexture: data.hair_texture,
        }

        console.log("data", data);

        // const recommendations = await getHairRecommendations(data);

        localStorage.setItem("hairstyle", JSON.stringify(details));

        // localStorage.setItem("hairRecPhotos", JSON.stringify(recommendations));

    }
}

export async function initializeUser(userId: string) {
    getUserColorPalette(userId);
    getUserSilhouette(userId);
    getUserHair(userId);
}