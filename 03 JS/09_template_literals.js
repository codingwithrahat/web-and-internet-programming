const a = 'Hello';
const b = 'World';

// old way strung concatenation
console.log(a + ', ' + b + '!'); // Output: Hello, World!

// new way using template literals
console.log(`${a}, ${b}!`); // Output: Hello, World!



// it also support calculations and expressions inside the template literals
const x = 5;
const y = 10;

console.log(`The sum of ${x} and ${y} is ${x + y}.`); // Output: The sum of 5 and 10 is 15.