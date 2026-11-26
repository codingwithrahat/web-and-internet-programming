// how js find the value of a variable in the scope chain?

const a = 5;

function outerFunction() {
    const a = 10;

    function innerFunction() {
        const a = 15;
        console.log(a); // Output: 15 (innerFunction's own scope)
    }

    innerFunction();

    console.log(a); // Output: 10 (outerFunction's scope)
}

outerFunction();

console.log(a); // Output: 5 (global scope)