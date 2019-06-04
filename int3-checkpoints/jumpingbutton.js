var button = document.getElementById("jumpButton");
button.style.position = "absolute";
button.addEventListener("mousemove", function(){
    button.style.top = Math.random() * 300 + "px";
    button.style.right = Math.random() * 300 + "px";

});
document.body.addEventListener("click", changeBackground);

function changeBackground(){
    document.body.style.backgroundColor = "red";
}