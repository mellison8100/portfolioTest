function PlayerCharacter (){
  this.p=new Character("Young Laddie Jacob", 100, 500, 10, 100, 100, 100);
  this.dgu=false;
  this.helpful=0;
  this.isFriends=false;
  this.p.setAttack1("Punch", 40, 1000);
  this.p.setAttack2("Scream", 23, 1000);
  this.p.setAttack3("Cry for help", 2, 1000);
  this.p.setAttack4("Give Up", 0, 999);
 
  function dontGiveUp(){
    if(isFriends==true){
      this.p.setAttack1("You Fool",0,0);
      this.p.setAttack4("You Fool",0,0);
      this.p.setAttack3("You Fool",0,0);
      this.setAttack2("You Fool",0,0);
    }else if(helpful==2){
      this.p.setAttack4("Spare Them", 100, 1000); 
      this.isFriends=true;
    }else if(helpful==1){
      this.p.setAttack4("Become Friends", 0, 1000); 
      this.helpful++;
    }else if(dgu==true){
      this.p.setAttack4("Help Them Heal", -100, 1000); 
      this.helpful++;
    }else if(dgu==false){
      this.p.setAttack4("Dont Give Up", 100, 1000); 
      this.dgu=true;
    }
  };
  function player() {
    return this.p;
  };
  function pDisplay() {
    fill(37, 255, 83);
    ellipse(mouseX, mouseY, 50, 100);
    fill(0);
    ellipse(mouseX+10, mouseY-30, 10, 10);
    ellipse(mouseX-10, mouseY-30, 10, 10);
    fill(48, 39, 255);
    ellipse(mouseX+10, mouseY-20, 5, 7);
    ellipse(mouseX-10, mouseY-20, 5, 7);
  };
}