let Complex = require('complex.js');

let c = new Complex("99.3+8i");
let r = c.mul({re: 3, im: 9}).div(4.9).sub(3, 2);
console.log(r.round(2).toString()); // 43.1 + 185.29i