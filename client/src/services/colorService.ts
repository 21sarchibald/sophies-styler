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

export default async function analyzeColors(traits: Traits) {

    try {
        const results = await fetch('http://localhost:8080/api/colors/analyze', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(traits)
        });
        
        const text = await results.text();
        console.log(text);

        if (!results.ok) {
            throw new Error(`Error: ${results.status}`)
        }


    }

    catch (error) {
        console.log(error)
    }
}