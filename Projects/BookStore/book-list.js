document.addEventListener("DOMContentLoaded", function () {
    axios.get("http://localhost:8081/getAllBooks")
        .then(function (response) {
            var books = response.data;
            var table = document.getElementById("bookTable");

            books.forEach(function (book) {
                var row = table.insertRow();
                row.insertCell().textContent = book.name;
                row.insertCell().textContent = book.author;
                row.insertCell().textContent = book.price;
                row.insertCell().textContent = book.publisher;
                row.insertCell().textContent = book.publication;
            });
        })
        .catch(function (error) {
            console.error(error);
        });
});




