function Knife() {
  this.xpos = 600;
  this.ypos = 450;
  this.dead=false;
  this.fall= function() {
    if (this.ypos<700) {
      this.ypos+=10;
    }
    if (this.xpos>100 && this.xpos<200 && this.ypos>500) {
      this.ypos=2000;
      this.dead=true;
    }
  }

  this.move= function() {
    if (mouseIsPressed) {
      this.xpos=mouseX;
      this.ypos=mouseY;
    } else this.fall();
  }

  this.display= function() {
    this.move();
    fill(125);
    rect(this.xpos, this.ypos, 8, 15);
    fill(200);
    triangle(this.xpos, this.ypos+15, this.xpos+10, this.ypos+15, this.xpos+5, this.ypos+55);
  }
}
