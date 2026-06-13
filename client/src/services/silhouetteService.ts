import type { SilhouetteDetails } from "../types/SilhouetteDetails";

type SilhouetteSubmission = {
    silhouette: string;
    proportions: string;
}

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