function setup() {
  createCanvas(800,800);
  //sets the size of canvas area with width and height

  //background(200); //black and white background

  background(255,127,0);
  line(500,50,10,300);
  line(0,0,400,400);

  stroke(550,233,45);
  strokeWeight(12);
  triangle(500,300,600,600,200,400);
 //draws a rectangle
  fill(100,200,50);
  rect(400,320,340);
  //rect(x,y,h):
  
  quad(230,420,32,321,434,233,234,345);

  ellipse(400,245,300,233);
  
}
