const formEl = document.getElementById("my-form")

formEl.addEventListener("submit", function (event) {
    event.preventDefault();

    const usernameEl = document.getElementById("username").value;
    const passwordEl = document.getElementById("password").value;

    const formData = new FormData();
    formData.append("usernameOrEmail", usernameEl);
    formData.append("password", passwordEl);

    axios.post(`http://localhost:1001/api/auth/signin`, formData)
    .then((response) => {
        console.log(response.data);
        window.location.href = "post.html"
    }).catch((error) => {
        console.error("Error ", error);
    })
    
})
