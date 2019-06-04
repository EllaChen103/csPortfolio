/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var xPos = 0;
var x2Pos = 40;
var x3Pos = 0;
var yPos = 0;
var y2Pos = 0;
var y3Pos = 40;
var xWidth = 20;
var yWidth = 20;
var x2Width = 5;
var x4Pos = 200;
var y4Pos = 0;
var x5Pos = 360;
var y5Pos = 400;
var x6Pos = 220;
var y6Pos = 0;

var fillColor = 0;
var fill2Color = 200;
draw = function() {
    line(0,55,350,400)
    line(0,25,372,400)
    //first circle pattern
    fill(fillColor,150,0);
        fillColor = fillColor + 10;
    stroke(100,50,0);
    ellipse(xPos, yPos,10,10);
    xPos = xPos+5;
    if (xPos>175) {
        xPos = xPos-5;
    }
    yPos = yPos+5;
    //second circle pattern
    fill(fillColor,100,150)
    ellipse(x2Pos,y2Pos,20,20);
    x2Pos = x2Pos+20;
    y2Pos = y2Pos+20;
    if (x2Pos>200){
        
    }
    //third circle pattern
    fill(10,fill2Color,50)
    ellipse(x3Pos,y3Pos, xWidth, yWidth);
    xWidth = xWidth-0.25;
    yWidth = yWidth-0.25;
    y3Pos = y3Pos+5;
    x3Pos = x3Pos+5;
    //fourth circle pattern
    fill(0,fillColor,100)
    ellipse(x4Pos, y4Pos, x2Width, 20);
    y4Pos = y4Pos+40;
    x2Width = x2Width+2.5
    fill2Color = fill2Color-25;
    //fifth circle patter
    fill(300,fillColor,0)
    ellipse(x5Pos,y5Pos,xWidth,yWidth)
    x5Pos = x5Pos-5;
    y5Pos = y5Pos-5;
    //sixth circle pattern
    ellipse(x6Pos,y6Pos,10,10)
    if (y6Pos>135){
        x6Pos = x6Pos+15;
        y6Pos = y6Pos+15;
    }
    else{
        y6Pos = y6Pos+20;
    }
    
    
    

    
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
