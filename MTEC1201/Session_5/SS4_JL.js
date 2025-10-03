
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
let angler;
let ms = millis();    

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER); 
  
  bgColor = color(0, 30, 60);
  
}

function preload() {
  angler = loadImage('images/angler.png');
}


function draw() {
  background(bgColor);

  // follow mouse
  x = mouseX;
  y = mouseY;
  size = random(20, y);

  // random color
  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(0, 255);

image(angler, width / 4, height / 2, 150, 150);

  // shapes
  if (size > 200) {
    fill(r, g, b, 150);
    ellipse(x, y, size, size);
  } else {
    fill(r, g, b, 150);
    rect(x, y, size, size);
  }

  // live time since start
  let ms = millis();
  fill(255);
  textSize(16);
  text(`Startup time: ${round(ms, 2)} ms`, 5, 50);
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
