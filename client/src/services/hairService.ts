import type { HairDetails } from "../types/HairDetails";

type HairSubmission = {
    faceShape: string;
}

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