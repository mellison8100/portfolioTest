function Damage (){
  this.d;
  this.pp;
  this.damageCalculations= function(a, p, e) {
    pp=random(1000);
    if (a.acuracy>=pp) {
      d=(a.power*p.ATK)/e.DEF;
      return d;
    } else return -100;
  };
}