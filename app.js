
function searchJobs() {
    const input = document.getElementById("jobInput").value.toLowerCase();
    const resultsDiv = document.getElementById("results");
    let output = "";

    if (!input) {
        resultsDiv.innerHTML = "<p>Please enter a job description.</p>";
        return;
    }

    const fakeJobs = [
        { title: "Remote Customer Service Assistant", match: input.includes("remote") || input.includes("customer") },
        { title: "Graduate Finance Analyst – Entry Level", match: input.includes("graduate") || input.includes("finance") },
        { title: "Health & Safety Advisor (£22,000)", match: input.includes("health") || input.includes("safety") }
    ];

    const matchedJobs = fakeJobs.filter(job => job.match);

    if (matchedJobs.length > 0) {
        matchedJobs.forEach(job => {
            output += `<p>🔹 <strong>${job.title}</strong></p>`;
        });
    } else {
        output = "<p>No strong matches found. Try a different keyword.</p>";
    }

    resultsDiv.innerHTML = output;
}
