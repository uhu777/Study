'use strict'

const printButton = document.querySelector("#print_button");

function function_print(event) {
    event.preventDefault()
    let mt = "";
    let m = "";

    const optionValue = document.querySelector("#구구단");
    const selectedValue = optionValue.options.selectedIndex;

    console.log("Value is " + optionValue.options[selectedValue].value);

    let a = optionValue.options[selectedValue].value;

    if(a.length<2){
        for(m=1;m<10;m++){
            mt += "<h4> "+a+" * "+m+" = "+a*m+"</h4>";
        }
    } else {
        for(a=2;a<=9;a++){
            for(m=1;m<10;m++)
            mt += "<h4> "+a+" * "+m+" = "+a*m+"</h4>";
        }
    }

    const print_table = document.querySelector("#print");
    print_table.innerHTML = mt;
}

printButton.addEventListener("click" , function_print)