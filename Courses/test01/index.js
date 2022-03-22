let mlc = "";

const showButton = document.querySelector(".show");

function calculate(event) {
    mlc = "";
    event.preventDefault()

    const calcValue = document.querySelector("#multi_table");
    let valueIndex = calcValue.options.selectedIndex;

    console.log("now Selected Value is " + calcValue.options[valueIndex].value);

    let a = calcValue.options[valueIndex].value;

    console.log(typeof a);

    if(a.length<2){

        for(t=1;t<=9;t++) {
            mlc += "<h3> "+a+" * "+t+" = " +a*t+"</h3>";
        }

        console.log(mlc);

        const showScreen = document.querySelector(".screen");
        const tableName = document.querySelector(".name");

        tableName.innerHTML = "<h3>"+a+"단</h3>"
        showScreen.innerHTML = mlc;

    } if(a.length>2) {

        for(t=2;t<=9;t++) {
            for(a=1;a<=9;a++)
            mlc += "<h3> "+t+" * "+a+" = " +t*a+"</h3>";
        }

        console.log(mlc);

        const showScreen = document.querySelector(".screen");
        const tableName = document.querySelector(".name");

        tableName.innerHTML = "<h3>구구단</h3>"
        showScreen.innerHTML = mlc;

    }
}

showButton.addEventListener("click", calculate);