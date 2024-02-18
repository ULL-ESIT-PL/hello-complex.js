/*
 * A gamma function implementation based on Lanczos Approximation
 * https://en.wikipedia.org/wiki/Lanczos_approximation
 */

var Complex = require('complex.js');

var P = [Complex(0.99999999999980993),
Complex(676.5203681218851), Complex(-1259.1392167224028), Complex(771.32342877765313),
Complex(-176.61502916214059), Complex(12.507343278686905), Complex(-0.13857109526572012),
Complex(9.9843695780195716e-6), Complex(1.5056327351493116e-7)];

var SQRT2PI = Complex(Math.sqrt(2 * Math.PI)); // sqrt(2 * PI)

/*
The Gamma function is a generalization of the factorial function to non-integer numbers. 
It is often used in probability and statistics, as it shows up in the normalizing constants 
of important probability distributions such as the Chi-square and the Gamma.
*/
function gamma(zz) {

    if (zz.equals(Complex(0))) { return Complex(1); }
    z = zz.sub(1);

    var x = P[0];
    var t = z.add(7.5); // z + 7.5
    for (var i = 1; i < P.length; i++) {
        x = x.add(P[i].div(z.add(i))); // x += P[i] / (z + i);
    }
    let result = SQRT2PI.mul(t.pow(z.add(0.5))).mul(t.neg().exp()).mul(x); // sqrt(2 * PI) * t^(z + 0.5) * e^(-t) * x;
    return zz.mul(result);
}

const factorial = function(num) {
    if (num.im !== 0) throw new Error(`Imaginary part must be zero. Instead is ${num.im}`);
    let n = num.re;
    if (!Number.isInteger(n)) throw new Error(`Not an Integer number ${n}`);
    if ( n < 0) throw new Error(`Factorial of negative number ${n}`);
    let result = Complex(1);
    if (n === 0) return result;
    for (let i = 1; i <= n; i++) {
      result = result.mul(i);
    }
    return Complex({re: result.re, im: num.im});
  };
  
  
let arg = Complex(process.argv[2] || 10);

try {
    console.log(gamma(Complex(arg)).toString());
    console.log(factorial(Complex(arg)).toString());
    return;
} catch (e) {
    console.error(`Error: ${e.message}`);
    return;
}
