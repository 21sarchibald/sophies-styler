import type { SeasonDetails } from "../types/SeasonDetails";

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

export default async function analyzeColors(traits: Traits): Promise<SeasonDetails | null> {

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