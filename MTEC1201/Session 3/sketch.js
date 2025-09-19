/* Jose Lopez 9/12/25 
*/

let num = 100;
let ellipseHeight = 50;
let grow = 0.5;
let xLocation = 0;

let r = 4;
let g = 67;
let b = 56;

const centerPosX= 500;
const centerPosY= 450;


function setup() {
  createCanvas(800, 600);
}

function draw(){

  background(r,g,b);

  ellipse(mouseX /2 , mouseY - 200, num, ellipseHeight= 100);

  rectMode(CENTER);
  rect( mouseX *0.5, mouseY, grow,grow);
  grow += 0.5;

  ellipse(xLocation, height/2, width /4, width /4);
  xLocation++;

  print(xLocation);

}

function mousePressed() {
  r++;
  g+=40;
  b+=27;
  print('mouse is pressed');

}

function keyPressed(){

  print('my god... what have you done?');
}