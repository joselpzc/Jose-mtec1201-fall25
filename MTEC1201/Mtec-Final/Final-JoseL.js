/*
Name: Jose Lopez
Title: "Glowing"
Instructions:
- Move your mouse to swim around the ocean.
- Avoid the angler fish that follows you!
- Press keys 1, 2, or 3 to change ocean color.
- Click to start or restart.
Description:
A glowing fish swims in a shifting ocean, chased by angler fish.
Avoid getting caught for as long as you can. Survive 10 seconds 
for level 2 and 20 seconds for level 3
*/

let bgColor;
let player;
let angler;
let fish, fish2, fish3;   // angler fish 
let fishSpeed;
let fishSpeed2 = 2;
let fishSpeed3 = 2;

let gameState = "menu"; // "menu", "play", "level2", "level3", "gameOver"
let startTime;
let survivalTime = 0;
let bubbles = [];
let topScore = 0;

let fishSlowed = false;
let slowEndTime = 0;

let seaweed, coral;

// glow class
class GlowTrail {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(20, 80);
    this.r = random(0, 255);
    this.g = random(0, 255);
    this.b = random(0, 255);
  }

  show() {
    noStroke();
    fill(this.r, this.g, this.b, 150);
    ellipse(this.x, this.y, this.size);
  }
}


// Images
function preload() {
  angler = loadImage('images/angler.png');
  seaweed = loadImage('images/seaweed1.png');
  coral = loadImage('images/coral.png');
}

function setup() {
  createCanvas(1500, 800);
  imageMode(CENTER);
  textAlign(CENTER, CENTER);
  bgColor = color(0, 30, 60);
  resetGame();

  for (let i = 0; i < 20; i++) {
    bubbles.push({ x: random(width), y: random(height), size: random(5, 20), speed: random(0.2, 1) });
  }
}

function draw() {
  background(bgColor);
  drawBubbles();

  if (gameState === "menu") {
    showMenu();
  } else if (gameState === "play") {
    playGame();
  } else if (gameState === "level2") {
    playLevel2();
  } else if (gameState === "level3") {
    playLevel3();
  } else if (gameState === "gameOver") {
    showGameOver();
    
  }
}

function drawBubbles() {
  for (let b of bubbles) {
    fill(200, 250, 255, 100);
    ellipse(b.x, b.y, b.size);
    b.y -= b.speed;
    if (b.y < -20) {
      b.y = height + 20;
      b.x = random(width);
    }
  }
}

// menu
function showMenu() {
  fill(255);
  textSize(40);
  text("GLOWING", width / 2, height / 2 - 60);
  textSize(20);
  text("Survive 10s for Level 2\nSurvive 20s for Level 3!\n\nClick to start!", width / 2, height / 2 + 20);
}

function playGame() {

  player.set(mouseX, mouseY);

  fishSpeed += 0.02;

  // Move fish 1
  let d1 = p5.Vector.sub(player, fish);
  d1.normalize();
  d1.mult(fishSpeed);
  fish.add(d1);

  // Draw fish 1 + scenery
  image(angler, fish.x, fish.y, 150, 150);
  image(seaweed, 920, 710, 250, 250);
  image(coral, 200, 710, 250, 150);


  // glowing trail
  let trail = new GlowTrail(player.x, player.y);
trail.show();

  // Time
  survivalTime = (millis() - startTime) / 1000;
  fill(255);
  text("Survival Time: " + survivalTime.toFixed(2) + "s", width / 2, 30);
  text("Top Score: " + topScore.toFixed(2) + "s", width / 2, 60);

  // level 2 at 10 seconds
  if (survivalTime >= 10) {
    fish2 = createVector(random(width), random(height));
    fishSpeed = 3;      // slow fish #1
    gameState = "level2";
    return;
  }

  // Collision
  if (p5.Vector.dist(player, fish) < 75) {
    if (survivalTime > topScore) topScore = survivalTime;
    gameState = "gameOver";
  }
}

function playLevel2() {
  player.set(mouseX, mouseY);

  image(seaweed, 920, 710, 250, 250);
  image(coral, 200, 710, 250, 150);

  fishSpeed2 += 0.015;

  // Fish 1 stays slow
  let d1 = p5.Vector.sub(player, fish);
  d1.normalize();
  d1.mult(fishSpeed);  
  fish.add(d1);

  // Fish 2 moves normally
  let d2 = p5.Vector.sub(player, fish2);
  d2.normalize();
  d2.mult(fishSpeed2);
  fish2.add(d2);

  // Draw them
  image(angler, fish.x, fish.y, 150, 150);
  image(angler, fish2.x, fish2.y, 150, 150);

  // glowing
  let trail = new GlowTrail(player.x, player.y);
trail.show();

  // Time
  survivalTime = (millis() - startTime) / 1000;
  fill(255);
  text("LEVEL 2", width / 2, 20);
  text("Survival Time: " + survivalTime.toFixed(2) + "s", width / 2, 50);

  // level 3 at 20 seconds
  if (survivalTime >= 20) {
    fish3 = createVector(random(width), random(height));
    fishSpeed = 3;     // slow fish 1 again
    fishSpeed2 = 3;    // slow fish 2 
    gameState = "level3";
    return;
  }

  // collision check
  if (p5.Vector.dist(player, fish) < 75 ||
      p5.Vector.dist(player, fish2) < 75) {
    if (survivalTime > topScore) topScore = survivalTime;
    gameState = "gameOver";
  }
}

// level 3
function playLevel3() {
  player.set(mouseX, mouseY);

  image(seaweed, 920, 710, 250, 250);
  image(coral, 200, 710, 250, 150);

  fishSpeed3 += 0.02;

  // fish 1 stays slow
  let d1 = p5.Vector.sub(player, fish);
  d1.normalize();
  d1.mult(fishSpeed);
  fish.add(d1);

  // fish 2 stays slow
  let d2 = p5.Vector.sub(player, fish2);
  d2.normalize();
  d2.mult(fishSpeed2);
  fish2.add(d2);

  // fish 3 moves normally
  let d3 = p5.Vector.sub(player, fish3);
  d3.normalize();
  d3.mult(fishSpeed3);
  fish3.add(d3);

  // draw all 3
  image(angler, fish.x, fish.y, 150, 150);
  image(angler, fish2.x, fish2.y, 150, 150);
  image(angler, fish3.x, fish3.y, 150, 150);

  // glowing
  let trail = new GlowTrail(player.x, player.y);
trail.show();

  // time + label
  survivalTime = (millis() - startTime) / 1000;
  fill(255);
  text("LEVEL 3", width / 2, 20);
  text("Survival Time: " + survivalTime.toFixed(2) + "s", width / 2, 50);

  // collision
  if (p5.Vector.dist(player, fish) < 75 ||
      p5.Vector.dist(player, fish2) < 75 ||
      p5.Vector.dist(player, fish3) < 75) {
    if (survivalTime > topScore) topScore = survivalTime;
    gameState = "gameOver";
  }
}

function showGameOver() {
  fill(255);
  textSize(40);
  text("GAME OVER", width / 2, height / 2 - 60);
  textSize(20);
  text("You survived: " + survivalTime.toFixed(2) + "s", width / 2, height / 2);
  text("Top Score: " + topScore.toFixed(2) + "s", width / 2, height / 2 + 40);
  text("Click to restart", width / 2, height / 2 + 80);
}

function resetGame() {
  player = createVector(width/2, height/2);

  fish  = createVector(random(width), random(height));
  fish2 = null;
  fish3 = null;

  fishSpeed = random(1.5, 3);
  fishSpeed2 = 2;
  fishSpeed3 = 2;

  startTime = millis();
}

function mousePressed() {
  if (gameState === "menu") {
    gameState = "play";
    resetGame();
  } else if (gameState === "gameOver") {
    gameState = "menu";
  }
}

function keyPressed() {
  if (key === '1') bgColor = color(0, 30, 60);
  else if (key === '2') bgColor = color(0, 60, 40);
  else if (key === '3') bgColor = color(40, 0, 60);
}
