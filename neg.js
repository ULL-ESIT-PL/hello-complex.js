var Complex = require('complex.js');
const num = Complex(process.argv[2] || "1+2i");
console.log(num.neg().toString());