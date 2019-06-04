var newColor = document.getElementById("newColor");
var colorButton = document.getElementById("colorButton");


colorButton.addEventListener("click", function(){
    document.body.style.backgroundColor = newColor.value;
})
