const C = require("complex.js");

let r1 = new C({arg: C.PI/4, abs: 1})
let r2 = new C({phi: C.PI/4, r: 1})

console.log(r1.toString()) // 0.7071067811865476 + 0.7071067811865475i
console.log(r2.toString()) // 0.7071067811865476 + 0.7071067811865475i
console.log(r1.equals(r2)) // true