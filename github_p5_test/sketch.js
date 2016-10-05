function setup() {
  createCanvas(windowWidth,windowHeight);
  rectMode(CENTER);
  fill(random(0,255),random(0,255),random(0,255))
}

function draw() {
  
}
function touchStarted() {
  background(255);
  rect(touches[0].x, touches[0].y,400,400);
}