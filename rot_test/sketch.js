var bSize,vitesseX,vitesseY,accelX,accelY,posX,posY,angX,angY,frict;
function setup() {
   createCanvas(windowWidth,windowHeight);
   ellipseMode(CENTER);
   bSize=200;
   frict=0.001;
   accelX=rotationY*frict;
   accelY=rotationX*frict;
   vitesseX+=accelX;
   vitesseY+=accelY;
   posX+=vitesseX;
   posY+=vitesseY;
}

function draw() {
 background(255);
 drawBall();
 textSize(40);
 text("Rx: " + floor(rotationX), 100, 100);
 text("Ry: " +floor(rotationY), 100, 150);
 text("Rz: " + floor(rotationZ), 100, 200);
}
function drawBall(){
 fill(100);
 ellipse(posX,posY, bSize,bSize);
}