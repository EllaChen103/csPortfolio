/* global draw ellipse rect p stroke processing width height size noFill rotate*/
var sketch = function(processing) {
    with(processing) {
        size(400, 400);
        background(255);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//
        
        
        function drawEllipse(xPos){
           
           noFill();
           stroke(xPos+20,random(40,100),random(100,150));
           strokeWeight(random(0.5,1.5));
           ellipse(xPos, 0, random(5,20), random(2,25));          

        }
        
        function drawRect(xPos){
           noFill();
           stroke(0,random(40,100),random(100,255));
           strokeWeight(random(0.5,1.5));
           rect(xPos, 0, random(4,15), random(4,15));
        }
        
        translate(width/2,height/2);
        for(var i = 0; i < 350; i+=0.5){ 
           drawEllipse(i);
           //drawRect(i);
           rotate(0.1);
       }
    }
};

// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
var p = new Processing(document.getElementById("output-canvas"), sketch);
