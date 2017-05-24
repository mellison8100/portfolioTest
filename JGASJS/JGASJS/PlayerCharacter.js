function PlayerCharacter(){
  this.p=new Character("Young Laddie Jacob", 100, 500, 10, 100, 100, 100);
  this.dgu= false;
  this.helpful= 0;
  this.isFriends= false;
  this.p.a1=new Attack("Punch", 40, 1000);
  this.p.a2=new Attack("Scream", 23, 1000);
  this.p.a3=new Attack("Cry for help", 2, 1000);
  this.p.a4=new Attack("Super Effective", 70, 999);
  
 this.pDisplay=function() {
    fill(37, 255, 83);
    ellipse(mouseX, mouseY, 50, 100);
    fill(0);
    ellipse(mouseX+10, mouseY-30, 10, 10);
    ellipse(mouseX-10, mouseY-30, 10, 10);
    fill(48, 39, 255);
    ellipse(mouseX+10, mouseY-20, 5, 7);
    ellipse(mouseX-10, mouseY-20, 5, 7);
  };
};