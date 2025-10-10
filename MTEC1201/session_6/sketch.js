function setup() {
  createCanvas(800, 800);
  textSize(22);
}

function draw() {
  background(220);
  iceCream(200, 150, 75, 250, 170, 210, 'BERRY');
  iceCream(350, 300, 80, 250, 250, 210, 'VANILLA');
  iceCream(505, 180, 80, 80, 200, 160, 'MINT');
}

function iceCream(x,y, diameter, r,g,b, flavor){
  fill(178, 120, 35);
  triangle(x,y,x + 50, y, x+25, y+100);
  fill(r,g ,b);
  ellipse(x+25, y, diameter, diameter);
  text(flavor, x+25, y-50);
}

function rectRayDisplay(x, y, size, letter){
  fill(170, 120, 35);
  
}