/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator(a, b) {
  this.a = a;
  this.b = b;
}

Calculator.prototype.sum = function () {
  console.log(this.a + this.b);
};
Calculator.prototype.subtraction = function () {
  console.log(this.a - this.b);
};
Calculator.prototype.multiplication = function () {
  console.log(this.a * this.b);
};
Calculator.prototype.division = function () {
  console.log(this.a / this.b);
};

let skaiciavimas = new Calculator(6, 4);

skaiciavimas.sum();
skaiciavimas.subtraction();
skaiciavimas.multiplication();
skaiciavimas.division();
