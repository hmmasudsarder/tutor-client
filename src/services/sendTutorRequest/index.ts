
export const sendTutorRequest = async (tutorId: string, userEmail: string) => {
    console.log(tutorId, userEmail)
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}api/requests/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                tutorId,
                userEmail,
            }),
        });

        console.log(response, "response")
        const data = await response.json();
        console.log(data, "data")
        if (!response.ok) {
            throw new Error(data.message || "Something went wrong!");
        }
        return data;
    } catch (error) {
        console.error("Error sending request:", error);
        throw error;
    }
};
