/*
Name: Jose Lopez
Title: "Glowing"
Instructions:
- Move your mouse to swim around the ocean.
- Avoid the angler fish that follows you!
- Press keys 1, 2, or 3 to change ocean color.
- Click to start or restart.
Description:
A glowing fish swims in a shifting ocean, chased by an angler fish.
Avoid getting caught for as long as you can.
*/

let bgColor;
let player;
let angler;
let fish;
let fishSpeed;
let gameState = "menu"; // "menu", "play", "gameOver"
let startTime;
let survivalTime = 0;
let bubbles=[];
let = topScore = 0;


//image
function preload() {
  angler = loadImage('images/angler.png');
  seaweed = loadImage('images/seaweed1.png');
  coral = loadImage('images/coral.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
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
// menu//

function showMenu() {
  fill(255);
  textSize(40);
  text("GLOWING", width / 2, height / 2 - 60);
  textSize(20);
  text("Move your mouse to swim.\nAvoid the angler fish.\n\nClick to start!", width / 2, height / 2 + 20);
}


function playGame() {
  // Player follows mouse
  player.set(mouseX, mouseY);

  //increase fish speed over time
  fishSpeed += 0.02;

  // Update angler fish position, with the help of stackOverflow and a youtube video (https://www.youtube.com/watch?v=zv7fViWS7CA)
  let dir = p5.Vector.sub(player,fish);
  dir.normalize();
  dir.mult(fishSpeed);
  fish.add(dir);

  image(angler, fish.x, fish.y, 150, 150);
  image(seaweed, 920, 600, 250, 250);
  image(coral, 200, 600, 250, 150);

  // random glowing shape trail
  let size = random(20, 80);
  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(0, 255);
  noStroke();
  fill(r, g, b, 150);
  ellipse(player.x, player.y, size, size);

  // timer
  survivalTime = (millis() - startTime) / 1000;
  fill(255);
  textSize(20);
  text("Survival Time: " + survivalTime.toFixed(2) + 's' , width / 2, 30);
  text("Top Score: " + topScore.toFixed(2) + "s", width / 2, 60); 

  // Collision detection
  let d = p5.Vector.dist(player,fish);
  if (d < 75) {
    if (survivalTime > topScore) {
      topScore = survivalTime;
    }
    gameState = "gameOver";
  }
}

function showGameOver() {
  fill(255);
  textSize(40);
  text(" GAME OVER ", width / 2, height / 2 - 60);
  textSize(20);
  text("You survived for " + survivalTime.toFixed(2) + " seconds!", width / 2, height / 2);
  text("Top Score: " + topScore.toFixed(2) + "s\n", width / 2, height / 2 + 40); 
  text("Click to restart", width / 2, height / 2 + 60);
}

// resets game values without leaving program
function resetGame() {
  player= createVector(width/2, height/2);
  fish = createVector(random(width), random(height));
  fishSpeed = random(1.5, 3);
  startTime = millis();
}

// mouse click handles starting/restarting
function mousePressed() {
  if (gameState === "menu") {
    gameState = "play";
    resetGame();
  } else if (gameState === "gameOver") {
    gameState = "menu";
  }
}

// change ocean color with keys
function keyPressed() {
  if (key === '1') {
    bgColor = color(0, 30, 60); // dark blue
  } else if (key === '2') {
    bgColor = color(0, 60, 40); // green sea
  } else if (key === '3') {
    bgColor = color(40, 0, 60); // purple sea
  }
}
