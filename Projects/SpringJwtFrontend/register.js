const formEl = document.getElementById("my-form")

formEl.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstnameEl = document.getElementById("firstname").value;
    const lastnameEl = document.getElementById("lastname").value;
    const emailEl = document.getElementById("email").value;
    const passwordEl = document.getElementById("password").value;

    const formData = new FormData();
    formData.append("firstname", firstnameEl);
    formData.append("lastname", lastnameEl);
    formData.append("email", emailEl);
    formData.append("password", passwordEl);

    axios.post(`http://localhost:8080/api/v1/auth/signup`, formData)
    .then((response) => {
        console.log(response.data);
        window.location.reload()        
        // window.location.href = "login.html"
    }).catch((error) => {
        console.error("Error ", error);
    })
    
})

