var back;
var b=new BattleSystem();
var p=new PlayerCharacter();
function preload(){
  back= loadImage("data/background.jpg");
}
function setup() {
  createCanvas(1200, 850);
  
}

function mouseClicked() {
  this.b.mouseC();
  if (b.getH(p.player())<=0) {
    back=loadImage("data/death.jpg");
    image(back, 0, 0);
  }
}
function draw() {
  

  image(back, 0, 0);
  fill(37, 255, 83);
    ellipse(mouseX, mouseY, 50, 100);
    fill(0);
    ellipse(mouseX+10, mouseY-30, 10, 10);
    ellipse(mouseX-10, mouseY-30, 10, 10);
    fill(48, 39, 255);
    ellipse(mouseX+10, mouseY-20, 5, 7);
    ellipse(mouseX-10, mouseY-20, 5, 7);
  //this.p.pDisplay();
  
  b.display();
  
  text("work", 20,200);
 
}