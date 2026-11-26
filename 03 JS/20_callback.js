function reg(name, callback) {
    console.log(`User registered: ${name}`);
    callback();
    console.log("Registration process completed.");
}

function sendEmail() {
    console.log("Email sent successfully.");
}

function sendSMS() {
    console.log("SMS sent successfully.");
}


reg("Rahat", sendEmail);
reg("Rahat", sendSMS);

// output for first reg called will be 
// User registered: Rahat
// Email sent successfully.
// Registration process completed.

// here we can passed a function as an argument to another function.
// and use it as a callback function.