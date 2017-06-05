 function Blood() {
  this.drops= [];
  this.i=255;
  this.bleed= function() {
      this.drops.push( {xpos:150, ypos:  500, xmove: (random(10)-3), ymove: (random(10)-15)});
    
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
}