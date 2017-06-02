function Knife() {
  this.xpos = 600;
  this.ypos = 450;
  this.isGrabbed=false;

  this.fall= function() {
    if (this.ypos<700)
      this.ypos+=10;
  }

  this.move= function() {
    if (mouseIsPressed) {
      
      console.log(mouseX+" "+ mouseY+ " " + this.xpos+ " "+ this.ypos);
      if (mouseX<(this.xpos+15) && (this.xpos-5)<mouseX && (this.ypos+35)<mouseY && mouseY<(this.ypos-5)) {
        console.log("pressed");
        this.xpos=mouseX;
        this.ypos=mouseY;
      }
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
