var back;
var b;
var p;
var playerImage;
var bossImage;
function preload(){
  back= loadImage("data/background.jpg");
  playerImage=loadImage("data/pFace");
  bossImage=loadImage("data/bFace");
  
  p=new PlayerCharacter();
  b=new BattleSystem(p, playerImage, bossImage);
}
function setup() {
  createCanvas(1200, 850);
  
}

function mouseClicked() {
  this.b.mouseC();
  if (b.getH(p.p)<=0) {
    back=loadImage("data/death.jpg");
    image(back, 0, 0);
  }
}
function draw() {
  image(back, 0, 0);
  this.p.pDisplay();
  text("work", 20,200);
  this.b.display();
  if(b.getH(p.p)<=0){
    image(back,0,0);
  }
  
 
}