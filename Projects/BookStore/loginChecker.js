function LoginObserver(event) {
    const isLogin = localStorage.getItem("isLogin");
    const path = window.location.pathname;

    if (isLogin !== "true" && (path !== "/Bookstore/" && path !== "/Bookstore/index.html")) {
        window.location.href = "/Bookstore/index.html";
    }
}

const logoutButton = document.getElementById("logoutLink");

function logout() {
    window.location.href = "/Bookstore/";
    localStorage.setItem("isLogin", "false");
}

logoutButton.addEventListener('click', logout);

document.addEventListener("DOMContentLoaded", LoginObserver);
