var king;
var knife;
var killer;
var vein;
function preload() {
  king=loadImage("data/king.jpg");
  killer=loadImage("data/Macbeth1.png");
  knife=new Knife();
  vein=new Blood();
}

function setup() {
  createCanvas(1200, 900);
}

function draw() {

  noStroke();
  smooth();
  if (knife.dead==false) {
    background(255);
    image(king, 000, 500);
    
    knife.display();
  }else{
    
    image(killer, 800, 500,404,520);
    vein.display();
    textSize(50);
    fill(255);
    text("\"Will all geat Neptune's ocean wash this blood\nClean from my hand?\"", 170,200);
  }
}