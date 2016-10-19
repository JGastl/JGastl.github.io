function setup() {
   createCanvas(windowWidth,windowHeight); 
}

function draw() {
 background(255);
 textSize(40);
 floor(text("Rx: " + rotationX, 100, 100));
 floor(text("Ry: " + rotationY, 100, 150));
 floor(text("Rz: " + rotationZ, 100, 200));
}