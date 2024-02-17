// A classical use case for complex numbers is solving quadratic equations 
// ax² + bx + c = 0 for all a, b, c ∈ ℝ:

let Complex = require('complex.js');

function quadraticRoot(a, b, c) {
    let sqrt = Complex(b * b - 4 * a * c).sqrt()
    let x1 = Complex(-b).add(sqrt).div(2 * a)
    let x2 = Complex(-b).sub(sqrt).div(2 * a)
    return {x1, x2}
  }

let a = 1, b = 4, c = 5
console.log(`Consider the equation: ${a}x² + ${b}x + ${c} = 0`)
let r = quadraticRoot(a, b, c) // -> -2 ± i
console.log(`The solutions are:\nx1 = ${r.x1.toString()}\nx2 = ${r.x2.toString()}`)