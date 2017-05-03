function Attack(n, p, a) {
  this.name=n;
  this.power=p;
  this.acuracy=a;

  
  function getName(){
    return this.name;
  };

  function getPower() {
    return this.power;
  };

  function getAcuracy() {
    return this.acuracy;
  };
}