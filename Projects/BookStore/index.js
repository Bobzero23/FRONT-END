const form = document.getElementById("my-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    axios.post("http://localhost:8081/login", {
        username: usernameInput.value,
        password: passwordInput.value,
    })
        .then(function (response) {
            if (response.status === 201) {
                location.reload();
                window.location.href = "home.html";
            } else {
                alert(response.data);
            }
        })
        .catch(function (error) {
            alert("Invalid input")
            console.error(error);
        });
});
