for(var i = 0; i < 10; i++){
    console.log(i);
}

console.log("Value of i after the loop: " + i); // Output: 10


for(let j = 0; j < 10; j++){
    console.log(j);
}

// console.log("Value of j after the loop: " + j); // ReferenceError: j is not defined

//var is not a block-scoped variable, so it is accessible outside the loop.
// let and const are block-scoped variables, so they are not accessible outside the loop.
// all that use {} are block-scoped. liek if, for, while, etc. and { console.log("Hello"); } are block-scoped.
{
    const x = 10;
    console.log("Value of x inside the block: " + x); // Output: 10
    //this a bock

}
