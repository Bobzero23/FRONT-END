// Assuming you have an input field with id 'search-input' and a results section with id 'search-results'

// Function to perform the search
function searchBooks() {
    const query = document.getElementById('search-input').value;

    // Make a GET request to your backend API endpoint
    axios.post('http://localhost:8081/searchBook', { params: { query } })
        .then(response => {
            // Handle the response and extract the search results
            const results = response.data;

            // Update the HTML to display the search results
            const resultsSection = document.getElementById('search-results');
            resultsSection.innerHTML = '';

            if (results.length === 0) {
                resultsSection.innerHTML = 'No results found.';
            } else {
                results.forEach(book => {
                    const bookElement = document.createElement('div');
                    bookElement.textContent = book.name;
                    resultsSection.appendChild(bookElement);
                });
            }
        })
        .catch(error => {
            console.error('Error searching books:', error);
        });
}

// Add an event listener to trigger the search when the user submits the form or presses enter
document.getElementById('search-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    searchBooks();
});
