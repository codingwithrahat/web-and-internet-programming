let a = 5;
let b = 10;

console.log(a === b); // Output: false
console.log(a !== b); // Output: true
console.log(a > b);  // Output: false
console.log(a < b);  // Output: true
console.log(a >= b); // Output: false
console.log(a <= b); // Output: true

let c = "5";

console.log(a == c);  // Output: true (loose equality, type coercion occurs)
console.log(a === c); // Output: false (strict equality, no type coercion)