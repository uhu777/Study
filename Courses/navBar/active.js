const toggle = document.querySelector(".menuBar")
const categoryRe = document.querySelector(".category")
const linkRe = document.querySelector(".link")

function activeRe() {
    categoryRe.classList.toggle("active")
    linkRe.classList.toggle("active")
}

toggle.addEventListener("click", activeRe);