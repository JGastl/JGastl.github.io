var bSize,vitesseX,vitesseY,accelX,accelY,posX,posY,angX,angY,frict,bounce, obX, obY, obSize;
function setup() {
   createCanvas(windowWidth,windowHeight);
   ellipseMode(CENTER);
   bSize=100;
   posX=windowWidth/2;
   posY=windowHeight/2;
   bounce=5
   vitesseX = 0;
   vitesseY = 0;
   obSize=random(0,150);
   obX=random(0,windowWidth);
   obY=random(0,windowHeight);
}

function draw() {
 background(255);
 obs();
 drawBall();
 textSize(40);
 text("Rx: " + floor(rotationX), 100, 100);
 text("Ry: " +floor(rotationY), 100, 150);
 text("Rz: " + floor(rotationZ), 100, 200);
 
  frict=0.001;
  accelX=floor(rotationY)*frict;
  accelY=floor(rotationX)*frict;
  vitesseX+=accelX;
  vitesseY+=accelY;
  posX+=vitesseX;
  posY+=vitesseY;
  
  if(posX+bSize/2>=windowWidth||posX-bSize/2<=0){
   vitesseX=-vitesseX
  }

   if(posY+bSize/2>windowHeight||posY-bSize/2<=0){
   vitesseY=-vitesseY
  }
}
function drawBall(){
 fill(200,255,100);
 ellipse(posX,posY,bSize,bSize);
}

function obs(){
 fill(0,0,255);
 ellipse(obX,obY,obSize,obSize);
 fill(0,255,0);
 ellipse(obX,obY,obSize,obSize);
 fill(255,0,0);
 ellipse(obX,obY,obSize,obSize);
}