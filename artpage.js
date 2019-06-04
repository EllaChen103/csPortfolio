/* global draw ellipse rect p random stroke processing width height size noFill rotate*/
var sketch = function(processing) {
    with(processing) {
        size(window.innerHeight, window.innerHeight);
        background(0);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//
        
        //var angleAmounts = [0.1,0.3,0.7,PI/4,PI/11,PI/9];
        //var angleAmount = angleAmounts[Math.floor(random(0,5))];
        function drawEllipse(xPos){
            // draws the outline of an ellipse with a random color and thickness
           noFill();
           stroke(xPos,random(200,255),random(150,255));
           strokeWeight(random(0.5,1.5));
           ellipse(xPos, 0, random(5,25), random(2,25));
           // the xPos variable causes the circle to get farther from the center
        }
        
        function drawRect(xPos){
            // draws the outline of an rectangle with a random color and thickness
           noFill();
           stroke(0,random(0,255),random(0,xPos-50));
           strokeWeight(random(1.5,2.5));
           rect(xPos, 0, random(5,30), random(2,30));
           // the xPos variable causes the rectangle to get farther from the center

        }
        function drawEye(xPos){
            // draws either a zero or a one; it will alternate between the two
           noFill();
           fill(random(0,50),random(xPos,250),random(100,xPos));
           text(xPos%2,xPos,30);
        }
        draw = function(){
            //continually make the background black and move the functions to the center
            background(0);
        translate(width/2,height/2);
        for(var i = 0; i < 550; i++){ 
            //repeatedly increase i in a loop
            if (i%2==0){
                //will draw ellipse and 0 if remainder is 0
                drawEllipse(i);
                drawEye(i);
            } else {
                //will draw rectangle and 1 if remainder is not 0
                drawRect(i);
                drawEye(i);
            }
            //rotate the shapes as they increase distance from center, making them a spiral
           rotate(mouseX/540);
       }
        };
    }
};

// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
var p = new Processing(document.getElementById("output-canvas"), sketch);
