function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(238, 229, 210);
  
  fill(204, 102, 153);
  noStroke();  
  arc(150, 150, 200, 200, radians(180), radians(270));
  
  fill(102, 153, 102);
  noStroke();
  rect(150, 150, 100, 115);
  
  fill(051, 102, 153);
  noStroke();
  arc(150, 150, 200, 200, radians(0), radians(90));
  
  fill(000, 102, 051);
  noStroke();
  rect(150, 40, 210, 110);
  
  fill(255, 204, 000);
  noStroke();
  arc(250, 150, 200, 200, radians(270), radians(0));
  
  fill(238, 229, 210);
  noStroke();
  square(150, 50, 100);
  
  fill(153, 102, 153);
  stroke(0);
  strokeWeight(1);
  rect(70, 150, 20, 60);
  
  fill(153, 102, 153);
  stroke(0);
  strokeWeight(3);
  rect(110, 150, 20, 60);
  
  fill(255, 0, 0);
  noStroke();
  triangle(200, 265, 100, 400, 300, 400);
  
  fill(255, 165, 0);
  noStroke();
  rect(150, 350, 100, 50);
  
  fill(0);
  triangle(250, 150, 360, 150, 250, 265);
  
  stroke(0);
  fill(153, 102, 102);
  arc(460, 150, 200, 200, radians(90), radians(180));
  
  fill(153, 204, 102);
  arc(460, 150, 200, 200, radians(270), radians(0));
  
  fill(153, 204, 204);
  square(460, 150, 100);
  
  fill(153, 204, 255);
  square(360, 50, 100);
  
  fill(255, 0, 0);
  noStroke();
  triangle(600, 400, 450, 400, 600, 250);
  
  
  
}