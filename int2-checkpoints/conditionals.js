/* global draw ellipse rect p processing width height size noFill*/
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//
var rectangle = 20;
var strokeColor = 300;
var circleHeight = 10;
draw = function(){


noFill();
if(mouseX>10,mouseY>10){
    stroke(strokeColor,10,strokeColor);
    strokeColor = strokeColor-0.1;
    noFill();
    
    rectangle = rectangle+0.2;
    rect(mouseX,mouseY,rectangle,rectangle);
} else{
   rect(mouseX,mouseY,rectangle,rectangle);
}

circleHeight = circleHeight+0.1;
if (mouseX>300){
    stroke(strokeColor,strokeColor,300);
    rect(mouseX,mouseY+10,10,circleHeight);
}
else{
    ellipse(mouseX,mouseY+10,10,circleHeight);
    stroke(strokeColor,300,300);

}
fill(300,300,300);
line(10,mouseY,400,400);

};



   
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
