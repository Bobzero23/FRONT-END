import logoutButton from "./index.js";

const logoutButton = document.getElementById('logoutLink');
logoutButton.addEventListener('click', () => {
    logoutButton();
});


document.addEventListener("DOMContentLoaded", function () {
    axios.get("http://localhost:8081/getAllBooks")
        .then(function (response) {
            var books = response.data;
            var table = document.getElementById("bookTable");

            books.forEach(function (book) {
                var row = table.insertRow();
                row.insertCell().textContent = book.book_name;
                row.insertCell().textContent = book.book_author;
                row.insertCell().textContent = book.book_price;
                row.insertCell().textContent = book.book_publisher;
                row.insertCell().textContent = book.book_publication_year;
            });
        })
        .catch(function (error) {
            console.error(error);
        });
});




