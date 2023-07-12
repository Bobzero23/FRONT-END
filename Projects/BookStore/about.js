// Get the logout link element
const logoutLink = document.getElementById('logout-link');

// Add click event listener to the logout link
logoutLink.addEventListener('click', function (event) {
    // Prevent the default link behavior
    event.preventDefault();

    // Perform the logout logic here (e.g., clearing session data)

    // Replace the current URL with a new one
    history.pushState(null, null, location.href);
});