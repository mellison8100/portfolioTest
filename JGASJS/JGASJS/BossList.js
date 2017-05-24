function BossList () {

  this.n=8;
  this. bList= [];
  this. John = new Character("John the Immortal Destructor", 100, 1, 90, 1, 1000, 1);
  this. Lukas = new Character("Lukas the Operatic Phantom", 100, 20, 90, 9001, 800, 4);
  this. Ryan = new Character("Ryan the Mortal Destructor", 100, 100, 90, 9001, 772, 5);
  this. Chancellor = new Character("Chancellor the Rocket Boss", 100, 500, 136, 655, 420, 2);
  this. Alex = new Character("Alex the Dave Destroyer", 100, 300, 800, 2, 69, 3);

  //adding characters to the array
  this.bList.push(this.John);
  this.bList.push(this.Lukas);
  this.bList.push(this.Ryan);
  this.bList.push(this.Chancellor);
  this.bList.push(this.Alex);
  //set john attack
  this.John.a1=new Attack("Bore Player", 20, 1001);
  this.John.a2=new Attack("Theorize Teams", 80, 8000);
  this.John.a3=new Attack("Kill Player", 1000, 100);
  this.John.a4=new Attack("Cut Player", 70, 8340);
  //set lukas attack
  this.Lukas.a1=new Attack("Sing to Player", 10, 3804);
  this.Lukas.a2=new Attack("Hug Player", 6, 9309);
  this.Lukas.a3=new Attack("Pitch Baseball", 1000, 100);
  this.Lukas.a4=new Attack("Kick Player", 70, 9504);
  //set ryan attack
  this.Ryan.a1=new Attack("Use Trees", 50, 8720);
  this.Ryan.a2=new Attack("Ignore Player", 30, 8038);
  this.Ryan.a3=new Attack("Summon Exodia", 1000, 100);
  this.Ryan.a4=new Attack("Listen to Music", 3, 9650);
  //set Chancellor attacks
  this.Chancellor.a1=new Attack("Send James", 20, 4203);
  this.Chancellor.a2=new Attack("Shoot Player", 200, 200);
  this.Chancellor.a3=new Attack("Send Meowth", 100, 1001);
  this.Chancellor.a4=new Attack("Send Wobbafett", 70, 7805);
  //set Alex attacks
  this.Alex.a1=new Attack("Call Media", 284, 9990);
  this.Alex.a2=new Attack("Shank Player", 100, 909);
  this.Alex.a3=new Attack("Call Green Beret", 10, 5700);
  this.Alex.a4=new Attack("Invite Ringo", 30, 9909);

  this.bossGenerator= function() {
    this.temp=new Character("", 1, 1, 1, 1, 1, 1);

    if (this.n<5) {
      this.n++;
      if (this.n==5) {
        this.n=0;
        this.temp=this.bList[this.n];
      } else this.temp=this.bList[this.n];
    }

    if (n==8) {
      this.n=random(4);
      this.temp=this.bList[this.n];
    }
    return this.temp;
  };
  this.attackGen=function(c) {
    this.x= random(4);
    this.p=new Attack("", 1, 1);
    if (this.x==1) {
      this.p=c.a1;
    }
    if (this.x==2) {
      this.p=c.a2;
    }
    if (this.x==3) {
      this.p=c.a3;
    }
    if (this.x==4) {
      this.p=c.a4;
    }
    return p;
  };
  this.getBoss= function(xx) {
    return this.bList[xx];
  };
}