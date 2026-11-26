const a = 2; // global scope - can be accessed anywhere in the code

function printSquare() {
    console.log(a * a);
}

function printCube() {
    const a = 3; //function scope - can only be accessed within this function
    console.log(a * a * a);
}

if(true) {
    const a = 4; // block scope - can only be accessed within this block
    console.log(a); // Output: 4
}

printSquare(); // Output: 4
printCube(); // Output: 27

