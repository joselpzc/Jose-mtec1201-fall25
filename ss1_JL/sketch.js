/*

face in intrigue 
By Jose Lopez

he smiling at a triangle :)

*/



function setup() {
  createCanvas(1280, 720);

  rectMode(CENTER);

  background(200,103,20);
 
//object of interest
  stroke(233,815,45,950);
  fill(0,200,250,127);
  triangle(30,20,40,540,320,234);

  //face
  stroke(23,34,456,23);
  ellipse(890,350,400,500);
  //eyes
  ellipse(800,320,45,120);
  ellipse(885,320,40,120); 
  //smile
  triangle(980,455,855,575,750,450);
  stroke(203,34,45,450);
  //eyebrows
  rect(930,230,95,30);
  rect(805,230,95,30);
  

  
}
