const menuEl = document.querySelector("#menu");
const navUlEl = document.querySelector("nav ul");


menuEl.addEventListener("click", () => {
    navUlEl.classList.toggle("showmenu")
});