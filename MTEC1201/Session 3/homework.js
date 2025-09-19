/*
Jose L.
"Echo Circles"

Concept:  
Circles follow your mouse while changing colors and size. Click mouse to return circle to initial size and/or press any key to clear the background.

Instructions:  
- Move your mouse around to draw echoing circles.  
- Press a key to clear the screen.  
- Click the mouse to return circle to initial size  
*/

let circleSize = 20;   // base size of the circles
let growth = 0.5;      // how much size increases per frame

function setup() {
  createCanvas(600, 400);
  background(20);
}

function draw() {
  noStroke();
  fill(100 + mouseX % 155, 150, 200, 120);
  
  ellipse(mouseX, mouseY, circleSize, circleSize);
  
  circleSize += growth;
  
}

// key pressed clears the screen
function keyPressed() {
  background(20);
}

// mouse click returns circle to initial size 
function mousePressed() {
    circleSize = 20;

  }