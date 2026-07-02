import type { SeasonDetails } from "../types/SeasonDetails";

import { supabase } from "./supabase";

export interface Traits {
    warm: number;
    cool: number;
    bright: number;
    muted: number;
    dark: number;
    light: number;
    highContrast: number;
    lowContrast: number;
}

const { data: { user },
    } = await supabase.auth.getUser();

export async function analyzeColors(traits: Traits): Promise<SeasonDetails | null> {

    try {
        const results = await fetch('http://localhost:8080/api/colors/analyze', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(traits)
        });
        
        const response = await results.json();
        console.log(response);

        if (!results.ok) {
            throw new Error(`Error: ${results.status}`)
        }
        
        return response as SeasonDetails;
    }
    
    catch (error) {
        console.log(error)
        return null;
    }
}

export async function getColorPalette(paletteName: string): Promise<SeasonDetails | null> {
    try {
        const results = await fetch('http://localhost:8080/api/colors/getPalette', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: paletteName,
        });

        const response = await results.json();
        console.log(response);

        if (!results.ok) {
            throw new Error(`Error: ${results.status}`)
        }

        return response as SeasonDetails;
    }
    catch (error) {
        console.log(error);
        return null;
    }
}

export async function saveColorResults(result:SeasonDetails | null) {
    console.log("save function running");

    if (user) {
        const {data, error} = await supabase.from("color_palette_assignments").upsert(
            {
                user_id: user?.id,
                palette: result?.season,
                color_details: result,
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

export async function getColorRecommendations(seasonDetails:SeasonDetails | null) {
    console.log('get color rec function running')

        const { data, error } = await supabase.from("color_palette_images").select("*")
        .contains("tags", [seasonDetails?.seasonCode])

        console.log(data);
        if (!error) {
            return data;
        }
}