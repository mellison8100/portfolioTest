function BossList (){

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
    this.John.setAttack1 ("Bore Player", 20, 1000);
    this.John.setAttack2 ("Theorize Teams", 80, 8000);
    this.John.setAttack3 ("Kill Player", 1000, 100);
    this.John.setAttack4 ("Cut Player", 70, 8340);
    //set lukas attack
    this.Lukas.setAttack1 ("Sing to Player", 10, 3804);
    this.Lukas.setAttack2 ("Hug Player", 6, 9309);
    this.Lukas.setAttack3 ("Pitch Baseball", 1000, 100);
    this.Lukas.setAttack4 ("Kick Player", 70, 9504);
    //set ryan attack
    this.Ryan.setAttack1 ("Use Trees", 50, 8720);
    this.Ryan.setAttack2 ("Ignore Player", 30, 8038);
    this.Ryan.setAttack3 ("Summon Exodia", 1000, 100);
    this.Ryan.setAttack4 ("Listen to Music", 3, 9650);
    //set Chancellor attacks
    this.Chancellor.setAttack1 ("Send James", 20, 4203);
    this.Chancellor.setAttack2 ("Shoot Player", 200, 200);
    this.Chancellor.setAttack3 ("Send Meowth", 100, 1000);
    this.Chancellor.setAttack4 ("Send Wobbafett", 70, 7805);
    //set Alex attacks
    this.Alex.setAttack1 ("Call Media", 284, 9990);
    this.Alex.setAttack2 ("Shank Player", 100, 909);
    this.Alex.setAttack3 ("Call Green Beret", 10, 5700);
    this.Alex.setAttack4 ("Invite Ringo", 30, 9909);

  

  function getS() {
    return this.bList.size();
  };
  function bossGenerator() {
    this.temp=new Character("", 1, 1, 1, 1, 1, 1);

    if (this.n<5) {
      this.n++;
      if (this.n==5) {
        this.n=0;
        this.temp=this.bList[n];
      } else this.temp=bList[n];
    }

    if (n==8) {
      this.n=random(4);
      this.temp=this.bList[n];
    }
    return this.temp;
  };
  function attackGen(c) {
    this.x= random(4);
    this.p=new Attack("", 1, 1);
    if (this.x==1) {
      this.p=this.c.getA1();
    }
    if (this.x==2) {
      p=c.getA2();
    }
    if (x==3) {
      p=c.getA3();
    }
    if (x==4) {
      p=c.getA4();
    }
    return p;
  };
  function getBoss(x) {
    return bList.get(x);
  };
}