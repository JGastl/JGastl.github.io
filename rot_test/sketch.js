var i, newGame, bSize, vitesseX, vitesseY, accelX, accelY, posX, posY, angX, angY, frict, bounce, score, obstacles = [],
  img, type = 0,img2,img3,img4,img5,
  typeobs, obsSize, obsX, obsY, timer, level, iMax, scoreLevels =  [0,20, 40, 60,80,100,110],
  timerLevels = [ 0,16 * 60, 26 * 60, 36 * 60,46*60,56*60,66*60];
//////////////////////////////////////////////
function preload() {
  img = loadImage("back.jpg");
  img2=loadImage("player.png");
  img3=loadImage("bonus.png");
  img4=loadImage("malus.png");
  img5=loadImage("obs.png");
}
///////////////////////////////////////////////////////////////
function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  rectMode(RADIUS);
  textAlign(CENTER);
  level = 1;
  newGame=true;
  timer = timerLevels[level]
  bSize = 50;
  score = 0;
  posX = windowWidth / 2;
  posY = windowHeight / 2;
  bounce = 0.8;
  vitesseX = 0;
  vitesseY = 0;
}
//////////////////////////////////////////
function draw() {
  if (newGame === true) {
    obstac();
    newGame = false;
  }
  background(img, 100);
  testCol();
  
  drawBall();
  for (i = 0; i < iMax; i++) {
    obstacles[i].drawObs();
  }
  fill(255);
  textSize(25);
  text("score:" + score, 50, 30);
  text("Time:" + floor(timer / 60), windowWidth / 2 - 30, 30);

  if (timer <= 0) {
    if (score >= scoreLevels[level]) {
      level += 1;
      newGame = true;
      score = 0;
      timer=timerLevels[level]
    } else {
      gameOver();
    }
  }else{
    timer--;
  }
  //////////////////////////////////////////////////////////
  function drawBall() {
    if (timer >= 0) {
      image(img2,posX, posY, bSize, bSize);
      frict = 0.01;
      accelX = floor(rotationY) * frict;
      accelY = floor(rotationX) * frict;
      vitesseX += accelX;
      vitesseY += accelY;
      posX += vitesseX;
      posY += vitesseY;

      if (posX + bSize / 2 >= windowWidth) {
        vitesseX = -vitesseX * bounce;
        posX = windowWidth - bSize / 2;
      }
      if (posX - bSize / 2 <= 0) {
        vitesseX = -vitesseX * bounce;
        posX = bSize / 2;
      }
      if (posY + bSize / 2 >= windowHeight) {
        vitesseY = -vitesseY * bounce;
        posY = windowHeight - bSize / 2;
      }
      if (posY - bSize / 2 <= 0) {
        vitesseY = -vitesseY * bounce;
        posY = bSize / 2;
      }
    }
  }
}
////////////////////////////////////////////////////////
function obstac() {
  obsSize = random(30, 60);
  var cycle = true;
  if (level == 1) {
    iMax = 3
  } else if (level == 2) {
    iMax = 4
  } else if (level == 3) {
    iMax = 5
  }else if (level == 4) {
    iMax = 6
  }else if (level == 5) {
    iMax = 7
  }else if (level == 6) {
    iMax = 8
  }
  for (i = 0; i < iMax; i++) {
    if (type === 0) {
      typeobs = "malus";
      type++;
    } else if (type === 1) {
      typeobs = "obs";
      type++;
    } else {
      typeobs = "bonus";
      type = 0;
    }
    obstacles[i] = new Obs(typeobs, obsSize, obsX, obsY);
  }
  while (cycle) {
    obsX = random(10, windowWidth);
    obsY = random(10, windowHeight);
    cycle = false
    for (var j = 0; j < i; j++) {
      if (dist(obsX, obsY, obstacles[j].obsX, obstacles[j].obsY <= obsSize / 2 + obstacles[j].size / 2)) {
        cycle = true;
        break;
      }
    }
  }
}
////////////////////////////////////////////////
function testCol() {
  for (i = 0; i < iMax; i++) {
    if (dist(posX, posY, obstacles[i].x, obstacles[i].y) <= bSize / 2 + obstacles[i].size / 2) {
      if (obstacles[i].type === "obs") {
        vitesseX = -vitesseX * bounce;
        vitesseY = -vitesseY * bounce;
      } else if (obstacles[i].type === "bonus") {
        if (obstacles[i].col === false) {
          obstacles[i].col = true
          score += 5;
        }
      } else if (obstacles[i].type === "malus") {
        if (obstacles[i].col === false) {
          obstacles[i].col = true
          score -= 5;
        }
      }
    } else {
      obstacles[i].col = false;
    }
  }
}
/////////////////////////////////////////////////
function Obs(obstacle) {
  this.type = obstacle;
  this.x = random(10, windowWidth);
  this.y = random(10, windowHeight);
  this.size = random(30, 60);
  this.col = false
  if (this.type === "obs") {
    this.colour = color(0, 0, 255);
  } else if (this.type === "bonus") {
    this.colour = color(0,255,0);
  } else {
    this.colour = color(255, 0, 0);
  }
  this.drawObs = function() {
    fill(this.colour)
    ellipse(this.x, this.y, this.size, this.size);
  }
}
///////////////////////////////////////////
function gameOver() {
  fill(0);
  rect(windowWidth / 2, windowHeight / 2, 155, 55);
  fill(255);
   rect(windowWidth / 2, windowHeight / 2, 150, 50);
   fill(0);
  text("GAME OVER", windowWidth / 2, windowHeight / 2);
  accelX=0;
  accelY=0;
}