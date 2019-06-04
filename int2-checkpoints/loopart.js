/* global draw ellipse rect p stroke processing width height size noFill*/
var sketch = function(processing) {
    with(processing) {
        size(400, 400);
        background(255);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//



        for (var i = 0; i < 800; i += 20) {

            if (i > 399) {
                stroke(random(i,0), 3, i);
                ellipse(800 - i, i - 390, 80, 40);
            }
            else {
                stroke(random(0,i), 0, i/3);
                ellipse(i, 10, 20, 100);
            }
        }
        
        for(var j=0;j<400;j+=40){
            for(var y=0; y<400;y+=40){
                noFill();
                stroke(random(0,400),j,j*j);
                strokeWeight(random(1,10));
                rect(j,y,20,20);
                
            }
        }










        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
    }
};
var p = new Processing(document.getElementById("output-canvas"), sketch);
