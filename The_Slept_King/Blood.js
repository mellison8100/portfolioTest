 function Blood() {
  this.drops= [];
  this.i=255;
  this.bleed= function() {
      this.drops.push( {xpos:150, ypos:  500, xmove: (random(10)-3), ymove: (random(10)-15)});
    
  }
  this.summon= function() {
    if(keyIsPressed){
      console.log("pressed");
      
      fill(0,0,255,this.i);
      rect(0,0,1200,1000);
      this.i--;
      text("It didnt work", 170,260);
    }
  }
  this.display= function() {
    this.bleed();
    for (this.j=0; this.j<this.drops.length; this.j++) {
      fill(255, 0, 0);
      this.drops[this.j].xpos+=this.drops[this.j].xmove;
      this.drops[this.j].xmove-=.01;
      this.drops[this.j].ypos+=this.drops[this.j].ymove;
      this.drops[this.j].ymove+=.1;
      ellipse(this.drops[this.j].xpos, this.drops[this.j].ypos, 10, 10);
    }
  }
  this.summon();
}