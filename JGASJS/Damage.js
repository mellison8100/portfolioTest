function Damage (){
  this.d;
  this.pp;
  function damageCalculations(a, p, e) {
    pp=random(1000);
    if (a.getAcuracy()>=pp) {
      d=(a.getPower()*p.getATK())/e.getDEF();
      return d;
    } else return 0;
  };
}