
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