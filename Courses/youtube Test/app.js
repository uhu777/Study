const rotateB = document.querySelector(".rotateButton");
const title = document.querySelector(".titleT");

function work() {
    title.classList.toggle("titleE")
    rotateB.classList.toggle("button")
}

rotateB.addEventListener("click",work);

const thumbUp = document.querySelector(".info .action .thumbUp")
const thumbDown = document.querySelector(".thumbDown")
const share = document.querySelector(".share")
const save = document.querySelector(".save")
const report = document.querySelector(".report")

function color() {
    thumbUp.classList.toggle("color")
}

thumbUp.addEventListener("click",color)


function color1() {
    thumbDown.classList.toggle("color")
}

thumbDown.addEventListener("click",color1)


function color2() {
    share.classList.toggle("color")
}

share.addEventListener("click",color2)


function color3() {
    save.classList.toggle("color")
}

save.addEventListener("click",color3)


function color4() {
    report.classList.toggle("color")
}

report.addEventListener("click",color4)