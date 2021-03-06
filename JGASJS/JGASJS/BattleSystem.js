function BattleSystem (p){
  this.b= new BossList();
  this.tBoss;
  this.pBoss= p.p;
  this.d= new Damage();
  this.bH;
  this.pH=(500/this.pBoss.HP)*this.pBoss.HP;
  this.tB;
  this.tP=this.pH;
  this.bossC=0;
  this.turn;
  this.isMenu=true;
  this.givenUp=false;
  
  this.getH=function(l) {
    return l.pH;
  };
  this.mouseC= function() {

    if (this.isMenu==false) {
      //damage calculations
      if (mouseX<850 && 650<mouseX && 550<mouseY&& mouseY<630) {
        this.tB=this.bH-this.d.damageCalculations(this.pBoss.a1, this.pBoss, this.tBoss);
      }
      if (mouseX<1125 && 925<mouseX && 550<mouseY&& mouseY<630) {
        this.tB=this.bH-this.d.damageCalculations(this.pBoss.a2, this.pBoss, this.tBoss);
      }
      if (mouseX<850 && 650<mouseX && 700<mouseY&& mouseY<880) {
        this.tB=this.bH-this.d.damageCalculations(this.pBoss.a3, this.pBoss, this.tBoss);
      }
      if (mouseX<1125 && 925<mouseX && 700<mouseY&& mouseY<880) {
        
          this.tB=this.bH-d.damageCalculations(this.pBoss.a4, this.pBoss, this.tBoss);
          this.turn++;
          this.p.dontGiveUp();
          if(turn<4){
          this.tP=(500/this.pBoss.HP)*this.pBoss.HP;
          }
        }else{
          this.givenUp=true;
        }
        
      }
      //health check
      if (this.bH<=0) {

        this.isMenu=true;
      } else{ this.tP= this.pH-this.d.damageCalculations(this.b.attackGen(this.tBoss), this.tBoss, this.pBoss);

      if (this.pH<=0) {
        this.isMenu=true;
      }
    }

    if (this.isMenu==true) {
      //generate chosen boss
      if (mouseX>600&&mouseY>650) {
        this.isMenu=false;
        this.tBoss=this.b.getBoss(2);
        this.bH=(500/this.tBoss.HP)*this.tBoss.HP;
        this.tB=this.bH;
      }
      if (mouseX<600&&mouseY>650) {
        this.isMenu=false;
        this.tBoss=this.b.getBoss(3);
        this.bH=(500/this.tBoss.HP)*this.tBoss.HP;
        this.tB=this.bH;
      }
      if (mouseX>600&&mouseY<200) {
        this.isMenu=false;
        this.tBoss=this.b.getBoss(1);
        this.bH=(500/this.tBoss.HP)*this.tBoss.HP;
        this.tB=this.bH;
      }
      if (mouseX<600&&mouseY<200) {
        this.isMenu=false;
        this.tBoss=this.b.getBoss(0);
        this.bH=(500/this.tBoss.HP)*this.tBoss.HP;
        this.tB=this.bH;
      }
    }
  };
  this.r;
  this.g;
  this.bb;

  this.display= function() {
    if (this.isMenu==false) {
      background(47, 60, 160);
      this.r=random(255);
      this.g=random(255);
      this.bb=random(255);
      if (this.tP<this.pH) {
        this.pH-=3;
      }else if(this.P>this.pH){
        this.pH+=3;
      }else{
        this.pH=this.tP;
      }
      if (this.tB<this.bH) {
        this.bH-=3;
      }else if(this.tB>this.bH){
        this.bH+=3;
      }else{
        this.bH=this.tB;
      }
      
      //character model
      smooth();
      for (this.i=0; this.i<=255; this.i++) {
        fill(255, 255, 0+this.i);
        ellipse(250, 600, 600-2*this.i, 270-2*this.i);
      }

      //enemy model
      fill(0, 255, 0);
      ellipse(1000, 200, 358, 358/2);

      //menu box
      fill(255);
      rect(600, 500, 600, 350);
      rect(650, 550, 200, 80);
      rect(925, 550, 200, 80);
      rect(650, 700, 200, 80);
      rect(925, 700, 200, 80);
      fill(0);
      textSize(20);
      text(this.pBoss.a1.name, 670, 600);
      text(this.pBoss.a2.name, 945, 600);
      text(this.pBoss.a3.name, 670, 750);
      text(this.pBoss.a4.name, 945, 750);
      
      //enemy health bar

      fill(10, 10, 60);
      rect(50, 50, 578, 100);
      fill(237, 30, 30);
      rect(89, 90, this.bH, 50);
      textSize(20);
      text(this.tBoss.name, 89, 80);
      //personal health bar
      fill(10, 10, 60);
      rect(610, 390, 578, 100);
      fill(this.r, this.g, this.bb);
      rect(649, 430, this.pH, 50);
      fill(255);
      text(this.pBoss.HP, 1070, 420);
      text(this.tP+"/", 1000, 420);
      textSize(20);
      text(this.pBoss.name, 649, 420);
      //jake
    }
  };
}