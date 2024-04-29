document.querySelector(".burger").addEventListener("click", toggleMenu);
document.querySelector("header nav ul").addEventListener("click", toggleMenu);

function toggleMenu() {
    var element = document.querySelector("header nav ul");
    element.classList.toggle("open");
};