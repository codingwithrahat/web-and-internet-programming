function add(a, b) {
    return a + b;
}

const result = add(5, 10);
console.log(result); // Output: 15

// here a and b are parameters of the function.
// and 5 and 10 are arguments passed to teh function

function sub(a = 50, b) {
    return a - b;
}

console.log(sub(20)); // Output: 30 (a takes the default value of 50, b is 20)
