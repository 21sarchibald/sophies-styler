type SilhouetteSubmission = {
    silhouette: string;
}

export default async function analyzeSilhouette(silhouette: SilhouetteSubmission) {
    try {
        const results = await fetch('http://localhost:8080/api/silhouette/analyze', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(silhouette)
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