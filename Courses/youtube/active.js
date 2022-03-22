const toggle = document.querySelector(".info .name button")
const nameW = document.querySelector(".info .name span")


function work() {
    nameW.classList.toggle("stretch")
    toggle.classList.toggle("trans")
}

toggle.addEventListener("click", work);