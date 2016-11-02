var bSize,vitesseX,vitesseY,accelX,accelY,posX,posY,angX,angY,frict,bounce, obX1, obY1, obX2, obY2, obX3, obY3, obSize1, obSize2, obSize3,score;
function setup() {
   createCanvas(windowWidth,windowHeight);
   ellipseMode(CENTER);
   bSize=100;
   score=0;
   posX=windowWidth/2;
   posY=windowHeight/2;
   bounce=0.8;
   vitesseX = 0;
   vitesseY = 0;
   obSize1=random(50,100);
   obSize2=random(50,100);
   obSize3=random(50,100);
   obX1=random(10,windowWidth);
   obX2=random(10,windowWidth);
   obX3=random(10,windowWidth);
   obY1=random(10,windowHeight);
   obY2=random(10,windowHeight);
   obY3=random(10,windowHeight);
}

function draw() {
 background(255);
 obs();
 drawBall();
 fill(0);
 textSize(40);
 text("Rx: " + floor(rotationX), 100, 100);
 text("Ry: " +floor(rotationY), 100, 150);
 text("Rz: " + floor(rotationZ), 100, 200);
 text("score:"+score, windowWidth/2,100);
 
  frict=0.01;
  accelX=floor(rotationY)*frict;
  accelY=floor(rotationX)*frict;
  vitesseX+=accelX;
  vitesseY+=accelY;
  posX+=vitesseX;
  posY+=vitesseY;
  
  if(posX+bSize/2>=windowWidth||posX-bSize/2<=0){
   vitesseX=-vitesseX *bounce;
  }

   if(posY+bSize/2>windowHeight||posY-bSize/2<=0){
   vitesseY=-vitesseY*bounce;
  }
    if(dist(posX,posY,obX1,obY1)<=bSize/2+obSize1/2){
   vitesseX=-vitesseX*bounce;
  }
    if(dist(posX,posY,obX2,obY2)==(bSize/2+obSize2/2)){
     score+=5;
  }
    if(dist(posX,posY,obX3,obY3)==(bSize/2+obSize3/2)){
   score-=5;
  }
}
function drawBall(){
 fill(0,255,200);
 ellipse(posX,posY,bSize,bSize);
}

function obs(){
 fill(0,0,255);
 ellipse(obX1,obY1,obSize1,obSize1);
 fill(0,255,0);
 ellipse(obX2,obY2,obSize2,obSize2);
 fill(255,0,0);
 ellipse(obX3,obY3,obSize3,obSize3);
}