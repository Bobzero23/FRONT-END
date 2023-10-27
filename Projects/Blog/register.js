const formEl = document.getElementById("my-form")

formEl.addEventListener("submit", function (event) {
    event.preventDefault();

    const usernameEl = document.getElementById("username").value;
    const emailEl = document.getElementById("email").value;
    const passwordEl = document.getElementById("password").value;

    const formData = new FormData();
    formData.append("username", usernameEl);
    formData.append("email", emailEl);
    formData.append("password", passwordEl);

    axios.post("http://localhost:1001/api/auth/signup", formData)
    .then((response) => {
        console.log(response.data);
        window.location.href = "login.html"
    }).catch((error) => {
        console.error("Error ", error);
    })
})

