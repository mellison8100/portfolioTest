var king;
var knife;
var killer;
var vein;
var life;
function preload() {
  king=loadImage("data/king.jpg");
  killer=loadImage("data/Macbeth1.png");
  life=loadImage("data/Macbeth2.png");
  knife=new Knife();
  vein=new Blood();
}

function setup() {
  createCanvas(1200, 900);
}

function keyPressed(){
  text("It didnt work", 470,380);
}

function draw() {

  noStroke();
  smooth();
  if (knife.dead==false) {
    background(255);
    image(king, 000, 500);
    image(life, 800, 500,404,520);
    textSize(50);
    text("Look like the flower\nClick and drag the knife \nto help Macbeth be the serpent underneath", 170,200);
    knife.display();
  }else{
    
    image(killer, 700, 400,504,624);
    vein.display();
    textSize(50);
    fill(255);
    text("\"Will all geat Neptune's ocean wash this blood\nClean from my hand?\"\nPress s to summon Neptune's ocean", 170,200);
  }
}