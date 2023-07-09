
  const candidatesData = [
    { name: 'John Doe', location: 'New York', jobRole: 'Software Engineer' },
    { name: 'Jane Smith', location: 'San Francisco', jobRole: 'Web Developer' },
    { name: 'Michael Johnson', location: 'Chicago', jobRole: 'Data Scientist' },
    { name: 'Sarah Wilson', location: 'Los Angeles', jobRole: 'UI/UX Designer' },
    { name: 'David Lee', location: 'Seattle', jobRole: 'Product Manager' },
    { name: 'Jane Smith', location: 'New York', jobRole: 'Web Developer' },
];

function searchCandidates() {
    // Clear previous search results
    document.getElementById('candidates').innerHTML = '';

    // Get search criteria values
    const location = document.getElementById('location').value.toLowerCase();
    const jobRole = document.getElementById('job-role').value.toLowerCase();

    // Filter candidates based on search criteria
    const filteredCandidates = candidatesData.filter(candidate =>
        candidate.location.toLowerCase().includes(location) &&
        candidate.jobRole.toLowerCase().includes(jobRole)
    );

    // Display search results
    filteredCandidates.forEach(candidate => {
        const listItem = document.createElement('li');
        listItem.textContent = `${candidate.name} - ${candidate.location} - ${candidate.jobRole}`;
        document.getElementById('candidates').appendChild(listItem);
    })};