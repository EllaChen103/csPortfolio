var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var dropdown = document.getElementById("dropdown");
var calculateButton = document.getElementById("calculate");


calculateButton.addEventListener("click", calculate);
function calculate(){
    if(dropdown.value === "add"){
        alert(parseInt(num1.value) + parseInt(num2.value));
    }
    else if(dropdown.value === "subtract"){
        alert(parseInt(num1.value) - parseInt(num2.value));
    }
    else if(dropdown.value === "mulitply"){
        alert(parseInt(num1.value) * parseInt(num2.value));
    }
    else if (dropdown.value === "divide"){
        alert(parseInt(num1.value) / parseInt(num2.value));

    }
}