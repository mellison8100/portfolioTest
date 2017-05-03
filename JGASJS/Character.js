function Character(n, a, h, d, s, l, q) {
  this.name=n;
  this.HP=h;
  this.ATK=a;
  this.DEF=d;
  this.SPD=s;
  this.LV=l;
  this.qq=q;
  var cEXP;
  var mEXP;
  var a1;
  var a2;
  var a3;
  var a4;


  function setAttack1 (n, p, a) {
    a1=new Attack(n, p, a);
  };

  function setAttack2 (n, p, a) {
    a2=new Attack(n, p, a);
  };

  function setAttack3 (n, p, a) {
    a3=new Attack(n, p, a);
  };

  function setAttack4 (n, p, a) {
    a4=new Attack(n, p, a);
  };

  function getCharName() {
    return name;
  };

  function getHP() {
    return HP;
  };

  function getATK() {
    return ATK;
  };

  function getDEF() {
    return DEF;
  };

  function getSPD() {
    return SPD;
  };

  function getLV() {
    return LV;
  };

  function getATK1() {
    return a1;
  };

  function getATK2() {
    return a2;
  };

  function getATK3() {
    return a3;
  };

  function getATK4() {
    return a4;
  };
  function getA1() {
    return a1;
  };
  function getA2() {
    return a2;
  };
  function getA3() {
    return a3;
  };
  function getA4() {
    return a4;
  };

  function geta1P() {
    return a1.getPower();
  };
  function geta2P() {
    return a2.getPower();
  };
  function geta3P() {
    return a3.getPower();
  };
  function geta4P() {
    return a4.getPower();
  };
  function geta1A() {
    return a1.getAcuracy();
  };
  function geta2A() {
    return a2.getAcuracy();
  };
  function geta3A() {
    return a3.getAcuracy();
  };
  function geta4A() {
    return a4.getAcuracy();
  };
  function geta1N() {
    return a1.getName();
  };
  function geta2N() {
    return a2.getName();
  };
  function geta3N() {
    return a3.getName();
  };
  function geta4N() {
    return a4.getName();
  };
  function getPic() {
    return qq;
  };
}