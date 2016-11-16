var bSize,vitesseX,vitesseY,accelX,accelY,posX,posY,angX,angY,frict,bounce,score,col,obstacles=[],i;
function setup() {
   createCanvas(windowWidth,windowHeight);
   ellipseMode(CENTER);
   obsacles[i]=new Obs("malus");
   obsacles[i]=new Obs("bonus");
   obsacles[i]=new Obs("obs");
   bSize=100;
   score=0;
   col=false;
   posX=windowWidth/2;
   posY=windowHeight/2;
   bounce=0.8;
   vitesseX = 0;
   vitesseY = 0;
}

function draw() {
 background(255);
 drawBall();
 fill(0);
 textSize(40);
 text("score:"+score, windowWidth/2,100);
 for(i=0;i<3; i==){
   obsacles[i]=new Obs("malus");
   obsacles[i]=new Obs("bonus");
   obsacles[i]=new Obs("obs");
 }
  frict=0.01;
  accelX=floor(rotationY)*frict;
  accelY=floor(rotationX)*frict;
  vitesseX+=accelX;
  vitesseY+=accelY;
  posX+=vitesseX;
  posY+=vitesseY;
  
  if(posX+bSize/2>=windowWidth||posX-bSize/2<=0){
   vitesseX=-vitesseX *bounce;
   posX=windowWidth-bSize/2;
   posX=bSize/2;
  }

   if(posY+bSize/2>=windowHeight||posY-bSize/2<=0){
   vitesseY=-vitesseY*bounce;
  }
  for(var i=0;i<3; i==){
    if(dist(posX,posY,i.x,i.y)<=bSize/2+i.size/2){
   vitesseX=-vitesseX*bounce;
     }
    else if(dist(posX,posY,i.x,i.y)<=bSize/2+i.size/2){
     if(col===false){
      col=true
      score+=5;
     }
    }
   else if(dist(posX,posY,i.x,i.y)<=bSize/2+i.size/2){
   if(col===false){
    col=true
    score-=5;
   }
   }
   else{
    col=false;
   }
}
}
function drawBall(){
 fill(0,255,200);
 ellipse(posX,posY,bSize,bSize);
}

function Obs(obstacle){
 this.type=obstacle;
 this.x=random(10,windowWidth);
 this.y=random(10,windowHeight);
 this.size=random(30,60);
 this.colour=color(random(0,255),random(0,255),random(0,255));
 
this.display=function(){
 fill(this.colour)
 ellipse(this.x,this,y,this,size,this,size);
}
}