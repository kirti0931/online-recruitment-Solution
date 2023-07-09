// Fetch candidates data (dummy data for demonstration)
const candidatesData = [
    { name: 'John Doe', location: 'New York', jobRole: 'Software Developer' },
    { name: 'Jane Smith', location: 'San Francisco', jobRole: 'UX Designer' },
    { name: 'Mike Johnson', location: 'Chicago', jobRole: 'Project Manager' },
    { name: 'Emily Brown', location: 'Los Angeles', jobRole: 'Data Analyst' },
    { name: 'David Wilson', location: 'Seattle', jobRole: 'Marketing Specialist' },
  ];
  
  // Function to filter candidates based on location and job role
  function filterCandidates(location, jobRole) {
    return candidatesData.filter(candidate =>
      candidate.location.toLowerCase().includes(location.toLowerCase()) &&
      candidate.jobRole.toLowerCase().includes(jobRole.toLowerCase())
    );
  }
  
  // Function to display candidates in the candidate list
  function displayCandidates(candidates) {
    const candidatesList = document.getElementById('candidates');
  
    // Clear the existing candidate list
    candidatesList.innerHTML = '';
  
    // Check if any candidates match the search criteria
    if (candidates.length === 0) {
      candidatesList.innerHTML = '<li>No candidates found.</li>';
      return;
    }
  
    // Iterate through the filtered candidates and create list items
    candidates.forEach(candidate => {
      const listItem = document.createElement('li');
      listItem.textContent = `${candidate.name} - ${candidate.jobRole}, ${candidate.location}`;
      candidatesList.appendChild(listItem);
    });
  }
  
  // Function to handle the search form submission
  function handleSearch(event) {
    event.preventDefault();
    
    const locationInput = document.getElementById('location');
    const jobRoleInput = document.getElementById('job-role');
    const location = locationInput.value.trim();
    const jobRole = jobRoleInput.value.trim();
  
    // Filter candidates based on search criteria
    const filteredCandidates = filterCandidates(location, jobRole);
  
    // Display the filtered candidates
    displayCandidates(filteredCandidates);
  
    // Reset the search form
    locationInput.value = '';
    jobRoleInput.value = '';
  }
  
  // Attach event listener to the search form
  const searchForm = document.getElementById('search-form');
  searchForm.addEventListener('submit', handleSearch);