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

  // Display and update all creatures
  for (let i = 0; i < creatures.length; i++) {
    creatures[i].move();
    creatures[i].display();
  }

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

    // Bounce off edges
    if (this.x < 0 || this.x > width) {
      this.speedX *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.speedY *= -1;
    }
  }

  display() {
    noStroke();
    fill(this.r, this.g, this.b, 150);
    ellipse(this.x, this.y, this.size);

    // Conditional glow effect
    if (this.size > 60) {
      stroke(255, 200);
      strokeWeight(2);
      noFill();
      ellipse(this.x, this.y, this.size + random(5, 20)); // glowing ring
    } else if (this.size > 40) {
      fill(255, 255, 150, 100);
      ellipse(this.x + random(-5, 5), this.y + random(-5, 5), this.size / 2);
    } else {
      fill(200, 255, 255, 150);
      rect(this.x, this.y, this.size / 2, this.size / 2);
    }
  }
}

function mouseMoved() {
  // Create new creatures when moving mouse
  let c = new Creature(mouseX, mouseY);
  creatures.push(c);
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
