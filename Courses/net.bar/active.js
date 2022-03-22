const butten = document.querySelector("#butten");
const menu = document.querySelector(".navMenu");
const link = document.querySelector(".navLink");

function activeB() {
    menu.classList.toggle("active");
    link.classList.toggle("active");
}

butten.addEventListener("click", activeB)