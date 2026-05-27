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

export default async function analyzeQuiz(traits: Traits) {

    try {
        const results = await fetch('http://localhost:8080/api/analyze', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(traits)
        });
        console.log("Fetch worked");

        if (!results.ok) {
            throw new Error(`Error: ${results.status}`)
        }


    }

    catch (error) {
        console.log(error)
    }
}