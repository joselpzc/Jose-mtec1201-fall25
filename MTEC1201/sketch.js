/*
Name: Jose Lopez
"Glowing Sea Creatures"
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

  // creature follows the mouse
  x = mouseX;
  y = mouseY;
  size = random(20, 80);

  // random colors
  let r = random(100, 255);
  let g = random(100, 255);
  let b = random(200, 255);

  // conditional statement for different shapes
  if (size > 60) {
    fill(r, g, b, 150);
    ellipse(x, y, size, size);
  } else if (size > 40) {
    fill(r, g, b, 150);
    rect(x, y, size, size);
  } else {
    fill(r, g, b, 150);
    triangle(x, y, x + size, y, x + size / 2, y - size);
  }

  // little text instruction
  fill(255);
  textSize(14);
  text("Move mouse, click, or press 1-3", 20, height - 20);
}

function mousePressed() {
  // click makes random bubbles
    let bx = mouseX + random(-50, 50);
    let by = mouseY + random(-50, 50);
    let bsize = random(10, 30);
    fill(200, 255, 255, 150);
    ellipse(bx, by, bsize, bsize);
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
