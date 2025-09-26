/*
Name: Jose Lopez
"Glowing"
Instructions:
- Move your mouse and it will move with you.
- Press keys 1, 2, or 3 to change the ocean color.
Description:
Random shapes with ability to change background color.
They appear where you move the mouse, and change colors randomly.
*/

let bgColor;
let x, y, size;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgColor = color(0, 30, 60);
}

function draw() {
  background(bgColor);

  // shapes  follows the mouse
  x = mouseX;
  y = mouseY;
  size = random(20, 80);

  // random colors
  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(0, 255);

  // conditional statement for different shapes
  if (size > 60) {
    fill(r, g, b, 150);
    ellipse(x, y, size, size);
  } else if (size > 40) {
    fill(r, g, b, 150);
    rect(x, y, size, size);

  }
}

function mousePressed(){
  strokeWeight(random(0,15));
}

function keyPressed() {
  if (key === '1') {
    bgColor = color(0, 30, 60); // dark blue
  } else if (key === '2') {
    bgColor = color(0, 60, 40); // green sea
  } else {
    bgColor = color(40, 0, 60); // purple sea
  }
}
