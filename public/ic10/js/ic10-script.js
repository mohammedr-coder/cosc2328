// IC10 – COSC 2328 – Professor McCurry
// Implemented by: [Mohammed Rehaan]


// Step 5 - variables & concatenation
const city = "Austin";
const country = "USA";
let population = 980000;

console.log("Location: " + city + ", " + country);
console.log("Population: " + population);

// Step 6 - a decision
if (population > 1000000) {
    console.log(city + " is a metropolis.");
} else {
    console.log(city + " is a growing city.");
}


// Step 7 - Boolean
let isLoggedIn = false;
if (isLoggedIn) {
    console.log("Welcome back!");
} else {
    console.log("Please log in.");
}



// Step 8 - truthy / falsy
let username = 123;
if (username) {
    console.log("Username accepted: " + username);
} else {
    console.log("Username is required.");
}




// Step 9 - combined logic
const hasAccount = true;
const isEmailVerified = false;
const agreedToTerms = true;

if ((hasAccount && isEmailVerified) || agreedToTerms) {
    console.log("Registration allowed");
} else {
    console.log("Registration blocked");
}


itemCount = 0;
if (itemCount) {
    console.log("Cart has items " + itemCount);
} else {
    console.log("Cart has no items");
}
// if itemCount has 0, and null it will be false and 5 is true.

// The first condition is true and the second is false.
console.log(null == undefined);
console.log(null === undefined);