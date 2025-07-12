
async function searchJobs() {
    const input = document.getElementById("jobInput").value.toLowerCase();
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "<p>Searching for jobs...</p>";

    if (!input) {
        resultsDiv.innerHTML = "<p>Please enter a job description.</p>";
        return;
    }

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '455325b8e6msh97a9c64c7da9848p1ecfbdjsn54a89d03bbca', // <- Replace this with your real key
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(`https://jsearch.p.rapidapi.com/search?query=${encodeURIComponent(input)}&page=1&num_pages=1`, options);
        const data = await response.json();

        if (!data.data || data.data.length === 0) {
            resultsDiv.innerHTML = "<p>No jobs found for that search.</p>";
            return;
        }

        let output = "<h3>Results:</h3>";
        data.data.forEach(job => {
            output += `
                <div class="job-card">
                    <h4>${job.job_title}</h4>
                    <p><strong>Company:</strong> ${job.employer_name || "N/A"}</p>
                    <p><strong>Location:</strong> ${job.job_city || "Unknown"}, ${job.job_country}</p>
                    <a href="${job.job_apply_link}" target="_blank">Apply Now</a>
                </div>
            `;
        });

        resultsDiv.innerHTML = output;
    } catch (error) {
        resultsDiv.innerHTML = "<p>Error fetching job listings. Try again later.</p>";
        console.error(error);
    }
}
