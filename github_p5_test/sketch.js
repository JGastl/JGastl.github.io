function setup() {
  createCanvas(windowWidth,windowHeight);
  rectMode(CENTER);

}

function draw() {
  
}
function touchStarted() {
  background(255);
    fill(random(0,255),random(0,255),random(0,255));
  for(var i=0;i<touches.length;i++){
   rect(touches[0].x, touches[0].y,200,200);
  }

  
}