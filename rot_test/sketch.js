var bSize=100;
function setup() {
   createCanvas(windowWidth,windowHeight); 
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
 ellipse(windowWidth/2,windowHeight/2, bSize,bSize);
}