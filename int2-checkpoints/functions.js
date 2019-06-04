/* global draw ellipse rect p stroke processing width height size noFill rotate*/
var sketch = function(processing) {
    with(processing) {
        size(400, 400);
        background(255);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//
        
        function spiralRect(width) {
            for(x = 0; x < 1000; x+=0.09){
                noFill();
                stroke(x,30,0);
                rect(x,20,width/2,20);
                rotate(0.7);
            }
        }
        draw = function() {
            background(255, 255, 255);
            spiralRect(mouseX);

        }
      
    }
};

// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
var p = new Processing(document.getElementById("output-canvas"), sketch);
