function setup() {
  createCanvas(windowWidth,windowHeight);
  rectMode(center);
}

function draw() {
  
}
function touchStarted() {
  background(255);
  textSize(50);
  text(touches[0].x, 50, 50);
  text(touches[0].y, 50, 100);
  rect(windowWidth/2, windowHeight/2, 40,40);
}