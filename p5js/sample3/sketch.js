let m = 0;
let blink = 0;
let clouds = 0;
let birds1 = -20, birds2 = -120, birds3 = -220;
let tears = null;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  // 배경
  if (m === 0) {
    background(135, 206, 235);
  } else if (m === 1) {
    background(220, 235, 250);
  } else {
    background(40, 50, 70);
  }


  if (m === 0) {
    //
    noStroke();
    fill(255, 230, 100);
    ellipse(520, 80, 70, 70);
    stroke(255, 230, 100);
    strokeWeight(3);
    line(520, 15, 520, 0);
    line(520, 145, 520, 160);
    line(450, 80, 435, 80);
    line(590, 80, 605, 80);
    line(470, 35, 455, 20);
    line(570, 35, 585, 20);
    line(470, 125, 455, 140);
    line(570, 125, 585, 140);

    
    stroke(30);
    strokeWeight(2);
    line(birds1, 60, birds1 - 10, 54);
    line(birds1, 60, birds1 + 10, 54);
    line(birds2, 100, birds2 - 8, 94);
    line(birds2, 100, birds2 + 8, 94);
    line(birds3, 40, birds3 - 10, 34);
    line(birds3, 40, birds3 + 10, 34);

    birds1 += 1.2;
    birds2 += 1.5;
    birds3 += 1.0;
    if (birds1 > width + 20) birds1 = -20;
    if (birds2 > width + 20) birds2 = -20;
    if (birds3 > width + 20) birds3 = -20;

    tears = null;
  } 
  else if (m === 1) {
    noStroke();
    fill(255);
    let x = 500 - clouds;
    ellipse(x, 90, 60, 40);
    ellipse(x + 30, 80, 60, 40);
    ellipse(x + 60, 90, 60, 40);

    let x2 = 150 + clouds * 0.5;
    ellipse(x2, 70, 70, 44);
    ellipse(x2 + 30, 60, 60, 36);
    ellipse(x2 + 55, 72, 55, 34);

    clouds += 0.5;
    if (clouds > width + 200) clouds = 0;
    tears = null;
  } 
  else {
    stroke(255);
    strokeWeight(1.5);
    for (let i = 0; i < 100; i++) {
      let rx = random(width);
      let ry = random(height);
      line(rx, ry, rx + 2, ry + 10);
    }
    if (tears === null) tears = 205;
  }

  stroke(0);
  strokeWeight(1.5);
  fill(10, 20, 150);
  rect(110, 330, 380, 120, 50);

  stroke(60);
  fill(244, 208, 187);
  rect(265, 285, 70, 60, 6);

  fill(244, 208, 187);
  stroke(60);
  strokeWeight(1.5);
  ellipse(300, 200, 200, 220);

  // 머리
  noStroke();
  fill(30);
  arc(300, 170, 195, 160, PI, TWO_PI);
  fill(244, 208, 187);
  triangle(320, 170, 323, 170, 320, 130);
  triangle(315, 170, 312, 170, 313, 130);

  // 귀
  stroke(60);
  strokeWeight(1);
  fill(244, 208, 187);
  ellipse(190, 200, 20, 34);
  ellipse(410, 200, 20, 34);
  noStroke();
  fill(230, 190, 170);
  ellipse(190, 205, 8, 14);
  ellipse(410, 205, 8, 14);

  // 눈
  if (blink > 0) {
    noFill();
    stroke(0);
    strokeWeight(2.5);
    line(240, 195, 280, 195);
    line(320, 195, 360, 195);
    blink--;
  } else {
    noStroke();
    fill(255);
    ellipse(260, 195, 40, 20);
    ellipse(340, 195, 40, 20);
    fill(0);
    ellipse(260, 195, 12, 12);
    ellipse(340, 195, 12, 12);
    fill(255);
    ellipse(256, 191, 4, 4);
    ellipse(336, 191, 4, 4);
  }

  // 눈썹
  stroke(50);
  strokeWeight(4);
  if (m === 2) {
    line(230, 178, 280, 170);
    line(320, 170, 370, 178);
  } else {
    noStroke();
    fill(50);
    rect(235, 172, 50, 6, 2);
    rect(315, 172, 50, 6, 2);
  }

  // 코
  noStroke();
  fill(228, 188, 165);
  triangle(294, 230, 306, 230, 300, 205);
  stroke(205, 175, 150);
  line(300, 206, 300, 226);

  // 입
  noStroke();
  fill(180, 50, 60);
  if (m === 0) {
    arc(300, 255, 64, 22, 0, PI);
  } else if (m === 1) {
    rectMode(CENTER);
    rect(300, 255, 40, 4, 2);
    rectMode(CORNER);
  } else {
    arc(300, 265, 64, 22, PI, TWO_PI);
  }

  // 눈물
  if (m === 2 && tears !== null) {
    noStroke();
    fill(180, 220, 255, 220);
    ellipse(340, tears, 7, 10);
    tears += 2;
    if (tears > 280) tears = 205;
  }
}

function mousePressed() {
  blink = 12;
}

function keyPressed() {
  if (key === '1') {
    m++;
    if (m > 2) m = 0;
  }
}
