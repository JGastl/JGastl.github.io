<<<<<<< HEAD
var bSize, vitesseX, vitesseY, accelX, accelY, posX, posY, angX, angY, frict, bounce, score, obstacles = [],
 img, type = 0,
 typeobs, obsSize, obsX, obsY,distmin=20;

function preload() {
 img = loadImage("back.jpg");
=======
var i, newGame,bSize, vitesseX, vitesseY, accelX, accelY, posX, posY, angX, angY, frict, bounce, score,obstacles = [],img, type=0, typeobs, obsSize,obsX,obsY, timer,level,iMax;
//////////////////////////////////////////////
function preload(){
 img=loadImage("back.jpg");
>>>>>>> origin/master
}
///////////////////////////////////////////////////////////////
function setup() {
 createCanvas(windowWidth, windowHeight);
 ellipseMode(CENTER);
<<<<<<< HEAD
 for (var i = 0; i < 3; i++) {
  if (type === 0) {
   typeobs = "obs";
   type++;
  } else if (type === 1) {
   typeobs = "bonus";
   type++;
  } else {
   typeobs = "malus";
   type = 0;
  }
  
  
  obsSize = random(30, 60);
  var cycle = true;
  while (cycle) {
   obsX = random(10, windowWidth);
   obsY = random(10, windowHeight);
   cycle = false
   for (var j = 0; j < i; j++) {
    if (dist(obsX, obsY, obstacles[j].obsX, obstacles[j].obsY <= obsSize / 2 + obstacles[j].obsSize / 2+distmin)) {
     cycle = true;
     break;
    }
   }
  }
  obstacles[i] = new Obs(typeobs, obsSize, obsX, obsY);
 }
=======
 rectMode(CENTER)
 level=0
 timer=16*60;
>>>>>>> origin/master
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
<<<<<<< HEAD
 background(img, 100);
 drawBall();
 fill(255);
 textSize(40);
 text("score:" + score, windowWidth / 2, windowHeight / 2);
 for (i = 0; i < 3; i++) {
  obstacles[i].drawObs();
=======
   if(level===0){
   level=1;
   newGame=true;
 }
if(newGame===true){
  obstac();
  newGame=false;
}
 background(img,100);
 newGame=false;
 timer-=1;
 drawBall();
 for(i = 0; i < iMax; i++){
 obstacles[i].drawObs();
>>>>>>> origin/master
 }
 fill(255);
 textSize(25);
 text("score:" + score, 20, 30);
 text("Time:" + floor(timer/60), windowWidth/2-30, 30);
  text("NEXT LVL: 20 Points", 20, 60);
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
<<<<<<< HEAD
 for (i = 0; i < 3; i++) {
  if (dist(posX, posY, obstacles[i].x, obstacles[i].y) <= bSize / 2 + obstacles[i].size / 2) {
   if (obstacles[i].type === "obs") {
=======
}
if (timer<=0){
  if(score>=20){
    level+=1
    newGame=true
  }else{
   accelX=0;
   accelY=0;
   gameOver;
  }
}
//////////////////////////////////////////////////////////
function drawBall() {
 fill(0, 255, 255);
 ellipse(posX, posY, bSize, bSize);
}
////////////////////////////////////////////////////////
function obstac(){
  obsSize=random(30,60);
  var cycle=true;
if(level==1){
  iMax=3
}
else if(level==2){
  iMax=4
}
else if(level==3){
  iMax=5
}
 for (i = 0; i < iMax; i++) {  
   if(type===0){
   typeobs="malus";
   type++;
  }
  else if(type===1){
   typeobs="obs";
   type++;
  }
  else{
   typeobs="bonus";
   type=0;
  }
  obstacles[i] = new Obs(typeobs,obsSize,obsX,obsY);
 }
    while(cycle){
  obsX=random(10,windowWidth);
  obsY=random(10, windowHeight);
  cycle=false
  for(var j=0;j<i;j++){
   if(dist(obsX,obsY,obstacles[j].obsX,obstacles[j].obsY<=obsSize/2+obstacles[j].size/2)){
    cycle=true;
    break;
   }
  }
 }
 for (i = 0; i < iMax; i++) {
    if (dist(posX, posY, obstacles[i].x,obstacles[i].y) <= bSize / 2 + obstacles[i].size / 2){
    if(obstacles[i].type==="obs"){
>>>>>>> origin/master
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
<<<<<<< HEAD

function drawBall() {
 fill(0, 255, 255);
 ellipse(posX, posY, bSize, bSize);
}

function Obs(obstacle, size, x, y) {
=======
/////////////////////////////////////////////////
function Obs(obstacle) {
>>>>>>> origin/master
 this.type = obstacle;
 this.x = x;
 this.y = y;
 this.size = size;
 this.col = false
 if (this.type === "obs") {
  this.colour = color(0, 0, 255);
 } else if (this.type === "bonus") {
  this.colour = color(0, 255, 0);
 } else {
  this.colour = color(255, 0, 0);
 }
 this.drawObs = function() {
  fill(this.colour)
  ellipse(this.x, this.y, this.size, this.size);
 }
<<<<<<< HEAD
}
=======
}
///////////////////////////////////////////
function gameOver(){
  fill(255);
   rect(windowWidth/2,windowHeight/2,55,55);
   fill(0);
   rect(windowWidth/2,windowHeight/2,50,50);
   text("GAME OVER",windowWidth/2,windowHeight/2);
}
>>>>>>> origin/master
