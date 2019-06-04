var num1 = document.getElementById("num1");
var button1 = document.getElementById("button1");
var num2 = document.getElementById("num2");
var button2 = document.getElementById("button2");
var prob2 = document.getElementById("prob2");
var num3 = document.getElementById("num3");
var button3 = document.getElementById("button3");
var prob3 = document.getElementById("prob3");
var num4 = document.getElementById("num4");
var button4 = document.getElementById("button4");
var prob4 = document.getElementById("prob4");

//when button is clicked, call on function pat
button1.addEventListener("click",pat);

    
function pat(){
    //first pattern problem
    if(parseInt(num1.value) === 35){
        //if input is correct, show next problem and enable second function
        button2.addEventListener("click",pascal);
        prob2.style.display = "block";
    }else{
        //if input is incorrect, make screen red
        document.body.style.backgroundColor = "#f44141";
    }
}

function pascal(){    
        if(parseInt(num2.value) === 3){
        //
        button3.addEventListener("click",pascal2);
        prob3.style.display = "block";
        }else{
            //if input is incorrect, make screen red
            document.body.style.backgroundColor = "#f44141";
    }
}

function pascal2(){
    if(parseInt(num3.value) === 84){
        button4.addEventListener("click",fib)
        prob4.style.display = "block";
    }else{
        //if input is incorrect, make screen red
        document.body.style.backgroundColor = "#f44141";
    }
}
function fib(){
    if(parseInt(num4.value) === 233){
        document.body.style.backgroundColor = "#48f442";
    }else{
        //if input is incorrect, make screen red
        document.body.style.backgroundColor = "#f44141";
    }
}