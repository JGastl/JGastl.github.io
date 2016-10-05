document.ontouchmove = function(event){
 event.preventDefault();
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  rectMode(CENTER);
  strokeWeight(5);
}

function draw() {
   background(255);
    fill(255,0,0);
  for(var i=0;i<touches.length;i++){
   rect(touches[i].x, touches[i].y,200,200);
   line(touches[i].x, touches[i].y, touches[i++].x, touches[i++].y);
}
}