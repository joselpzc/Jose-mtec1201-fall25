/*
Jose Lopez
"Underwater Bioluminescence"
Instructions: 
- Move your mouse across the screen to create glowing creatures. 
- Click to release a burst of random bubbles. 
- Press keys 1, 2, or 3 to change ocean moods (color themes).

'Creatures' will spawn in following your mouse and every time you click. 
They will burst in random directions with differing sizes and color.
Reminiscent of deep sea underwater animals.

*/

let bgColor;
let creatures = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgColor = color(10, 30, 60); // deep ocean background
}

function draw() {
  background(bgColor);

  // Instructions
  fill(255, 200);
  textSize(14);
  text("Move mouse to spawn creatures | Click = burst bubbles | Keys 1-3 = change ocean mood", 20, height - 20);
}

// Creature object
class Creature {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(20, 80);
    this.r = random(100, 255);
    this.g = random(100, 255);
    this.b = random(200, 255);
    this.speedX = random(-2, 2);
    this.speedY = random(-2, 2);
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;

  }

  display() {
    noStroke();
    fill(this.r, this.g, this.b, 150);
    ellipse(this.x, this.y, this.size);

  }
}

function mousePressed() {
  // Burst of random bubbles
  for (let i = 0; i < 10; i++) {
    let c = new Creature(mouseX + random(-50, 50), mouseY + random(-50, 50));
    creatures.push(c);
  }
}

function keyPressed() {
  // Ocean moods (conditionals)
  if (key === '1') {
    bgColor = color(10, 30, 60); // deep blue
  } else if (key === '2') {
    bgColor = color(0, 60, 40); // greenish deep sea
  } else if (key === '3') {
    bgColor = color(50, 0, 70); // purple twilight
  } else {
    bgColor = color(0); // default black ocean
  }
}
