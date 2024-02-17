#!/usr/bin/env node
const Complex = require("complex.js");

Complex.prototype.factorial = function() {
  if (this.im !== 0) throw new Error(`Imaginary part must be zero. Instead is ${this.im}`); 
  let n = this.re;
  if (!Number.isInteger(n)) throw new Error(`Not an Integer number ${n}`); 
  if ( n < 0) throw new Error(`Factorial of negative number ${n}`);
  let result = Complex(1);
  if (n === 0) return result;
  for (let i = 1; i <= n; i++) {
    result = result.mul(i);
  }
  return Complex({re: result.re, im: this.im});
};

console.log(Complex(process.argv[2]).factorial());
