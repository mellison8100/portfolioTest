var king;
var isDead=false;
var knife;
function preload(){
  king=loadImage("data/king.jpg");
  knife=new Knife();
}

function setup() {
  createCanvas(1200, 900);
}

function draw(){
  noStroke();
  background(255);
  image(king, 000, 500);
  knife.display();
}