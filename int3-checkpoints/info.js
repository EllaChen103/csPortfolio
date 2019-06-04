var myCat = document.getElementById("myCat");
var dimsum = document.getElementById("dimsum");
var notMyCat = document.getElementById("notMyCat");
var lilKid = document.getElementById("lilKid");

myCat.addEventListener("click", giveMyCatBorder);

function giveMyCatBorder(){
    dimsum.style.borderColor = "black";
    dimsum.style.borderStyle = "solid";
    dimsum.style.borderWidth = "3px";
    
}
lilKid.addEventListener("mousedown", giveNotMyCatBorder);
function giveNotMyCatBorder (){
    lilKid.style.borderColor = "black";
    lilKid.style.borderStyle = "solid";
    lilKid.style.borderWidth = "3px";
}
notMyCat.addEventListener("click", function(){

    document.body.style.backgroundImage = "url('radish.gif')";
    notMyCat.innerHTML = "Wrong, my cat is better";
});
myCat.addEventListener("click", changeBackgroundAgain);
function changeBackgroundAgain(){
    document.body.style.backgroundImage = "url('cow.gif')";
}