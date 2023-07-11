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
            });
        })
        .catch(function (error) {
            console.error(error);
        });
});
