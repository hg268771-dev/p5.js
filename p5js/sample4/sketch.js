let jx = [];
let jy = [];

function setup() {
  createCanvas(600, 400);
  frameRate(15);

  for (let i = 0; i < 16; i++) {
    jx[i] = random(-40, 40);
    jy[i] = random(-40, 40);
  }
}

function draw() {
  let t = frameCount / 15;
  let c = t % 10;

  colorMode(RGB, 255);
  let bg1 = color(238, 229, 210);
  let bg2 = color(255, 60, 120);
  let bg;


  if (c < 3) {
    bg = bg1;
  } else if (c < 8) {
    let u = (c - 3) / 5;
    let k = sin(u * PI);
    bg = lerpColor(bg1, bg2, k);
  } else {
    bg = bg1;
  }
  background(bg);


  let cc = 0;
  if (c >= 3 && c < 8) {
    let u = (c - 3) / 5;
    cc = sin(u * PI);
  }


  let s, sc;
  if (c < 3) {
    let u = c / 3;
    s = lerp(1, 0.1, u);
    sc = 0;
  } else if (c < 4) {
    let u = c - 3;
    s = lerp(0.1, 1.5, u);
    sc = u;
  } else if (c < 5) {
    s = 1.5;
    sc = 1;
  } else if (c < 6) {
    let u = c - 5;
    s = lerp(1.5, 1, u);
    sc = lerp(1, 0, u);
  } else {
    s = 1;
    sc = 0;
  }


  let ang = 0;
  if (c < 3) {
    let u = c / 3;
    ang = TWO_PI * u * u;
  }


  let p1 = (sin(frameCount * 0.05) + 1) / 2;
  let p2 = (cos(frameCount * 0.04) + 1) / 2;

  let wob = 5 * sin(frameCount * 0.1);

  push();
  translate(width / 2, height / 2);
  rotate(ang);
  scale(s);
  translate(-width / 2, -height / 2);

  let i = 0;


  // 1
  push();
  translate(sc * (-200 + jx[i]), sc * (-100 + jy[i]));
  fill(lerpColor(color(204, 102, 153), color(255, 0, 150), cc * p1));
  noStroke();
  arc(150, 150, 200, 200, radians(180), radians(270));
  pop();
  i++;

  // 2
  push();
  translate(sc * (-160 + jx[i]), sc * (20 + jy[i]));
  fill(lerpColor(color(102,153,102), color(0,255,120), cc * p2));
  noStroke();
  rect(150,150,100,115);
  pop();
  i++;

  // 3
  push();
  translate(sc * (-250 + jx[i]), sc * (0 + jy[i]));
  fill(lerpColor(color(51,102,153), color(0,180,255), cc * p1));
  noStroke();
  arc(150,150,200,200,radians(0),radians(90));
  pop();
  i++;

  // 4
  push();
  translate(sc * (-120 + jx[i]), sc * (-180 + jy[i]));
  fill(lerpColor(color(0,102,51), color(0,255,150), cc * p2));
  noStroke();
  rect(150,40,210,110);
  pop();
  i++;

  // 5
  push();
  translate(sc * (0 + jx[i]), sc * (-220 + jy[i]));
  fill(lerpColor(color(255,204,0), color(255,80,0), cc * p1));
  noStroke();
  arc(250,150,200,200,radians(270),radians(0));
  pop();
  i++;

  // 6
  push();
  translate(sc * (-80 + jx[i]), sc * (-120 + jy[i]));
  fill(lerpColor(color(238,229,210), color(255,200,180), cc * p2));
  noStroke();
  square(150,50,100);
  pop();
  i++;

  // 7
  push();
  translate(sc * (-260 + jx[i]), sc * (200 + jy[i]));
  fill(lerpColor(color(153,102,153), color(220,0,220), cc * p1));
  stroke(0);
  strokeWeight(1);
  rect(70,150,20,60 + wob);
  pop();
  i++;

  // 8
  push();
  translate(sc * (-210 + jx[i]), sc * (220 + jy[i]));
  fill(lerpColor(color(153,102,153), color(255,0,200), cc * p2));
  stroke(0);
  strokeWeight(3);
  rect(110,150,20,60 - wob);
  pop();
  i++;

  // 9
  push();
  translate(sc * (-150 + jx[i]), sc * (260 + jy[i]));
  fill(lerpColor(color(255,0,0), color(255,80,150), cc * p1));
  noStroke();
  triangle(200,265,100,400,300,400);
  pop();
  i++;

  // 10
  push();
  translate(sc * (-20 + jx[i]), sc * (230 + jy[i]));
  fill(lerpColor(color(255,165,0), color(255,255,0), cc * p2));
  noStroke();
  rect(150,350,100,50);
  pop();
  i++;

  // 11
  push();
  translate(sc * (0 + jx[i]), sc * (-240 + jy[i]));
  fill(lerpColor(color(0,0,0), color(80,80,80), cc * p1));
  noStroke();
  triangle(250,150,360,150,250,265);
  pop();
  i++;

  // 12
  push();
  translate(sc * (200 + jx[i]), sc * (-100 + jy[i]));
  fill(lerpColor(color(153,102,102), color(255,120,120), cc * p2));
  stroke(0);
  strokeWeight(1);
  arc(460,150,200,200,radians(90),radians(180));
  pop();
  i++;

  // 13
  push();
  translate(sc * (260 + jx[i]), sc * (-60 + jy[i]));
  fill(lerpColor(color(153,204,102), color(200,255,80), cc * p1));
  noStroke();
  arc(460,150,200,200,radians(270),radians(0));
  pop();
  i++;

  // 14
  push();
  translate(sc * (200 + jx[i]), sc * (40 + jy[i]));
  fill(lerpColor(color(153,204,204), color(100,255,255), cc * p2));
  noStroke();
  square(460,150,100);
  pop();
  i++;

  // 15
  push();
  translate(sc * (240 + jx[i]), sc * (-190 + jy[i]));
  fill(lerpColor(color(153,204,255), color(50,150,255), cc * p1));
  noStroke();
  square(360,50,100);
  pop();
  i++;

  // 16
  push();
  translate(sc * (260 + jx[i]), sc * (220 + jy[i]));
  fill(lerpColor(color(255,0,0), color(255,150,0), cc * p2));
  noStroke();
  triangle(600,400,450,400,600,250);
  pop();
  i++;

  pop();
}

function keyPressed() {
  if (key ==='1') {
    saveGif('Odd_phosphorus', 10);
  }
}