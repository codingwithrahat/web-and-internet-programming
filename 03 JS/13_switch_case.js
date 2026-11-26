const a = "rahat";

switch (a) {
    case "rahat":
        console.log("Hello, Rahat!");
        break;
    case "john":
        console.log("Hello, John!");
        break;
    default:
        console.log("Hello, stranger!");
}

// Without break, execution falls through to the next case. This is a common source of bugs.