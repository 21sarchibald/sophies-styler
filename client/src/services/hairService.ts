
export default async function analyzeHair(faceShape: string) {
    try {
        const results = await fetch('http://localhost:8080/api/hair/analyze', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(faceShape)
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