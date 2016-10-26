var bSize,vitesseX,vitesseY;
function setup() {
   createCanvas(windowWidth,windowHeight);
   ellipseMode(CENTER);
   bSize=200;
   vitesseX=rotationX;
   vitesseY=rotationY;
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
 ellipse(vitesseX,vitesseY, bSize,bSize);
}