// HW5 – COSC 2328 – Professor McCurry
// Implemented by: [Mohammed Rehaan]

console.log("=== BOOKSTORE INVENTORY CALCULATOR ===");

const book1 = { title: "book1", author: "Author1", price: 10.99};
const book2 = { title: "book2", author: "Author2", price: 15.99};
const book3 = { title: "book3", author: "Author3", price: 8.99};

const taxRate = 0.0825;

let isMemeber = true;
if (isMemeber) {
    console.log("--- Book Inventory ---");
    console.log(book1.title + " by " + book1.author + " - $" + book1.price);
    console.log(book2.title + " by " + book2.author + " - $" + book2.price);
    console.log(book3.title + " by " + book3.author + " - $" + book3.price);
}

function calculateTotal(price, quantity) {
    return price * quantity;
}


function formatCurrency(amount) {
    console.log("--- Function Declarations Test ---")
    return "$" + amount.toFixed(2);
 }




function makeCounter() {
  let count = 0;                // a variable private to makeCounter
  function increment() {        // the nested function
    count = count + 1;          // it can still see and change "count"
    return count;
  }
  return increment;             // we return the nested function itself
}

const counter = makeCounter();  // makeCounter has already finished running...
console.log(counter());         // 1
console.log(counter());         // 2 — count was remembered between calls!