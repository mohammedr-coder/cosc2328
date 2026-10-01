// HW5 – COSC 2328 – Professor McCurry
// Implemented by: [Mohammed Rehaan]


// 5.2
console.log("=== BOOKSTORE INVENTORY CALCULATOR ===");


const book1 = { title: "book1", author: "Author1", price: 10.99};
const book2 = { title: "book2", author: "Author2", price: 15.99};
const book3 = { title: "book3", author: "Author3", price: 8.99};

const taxRate = 0.0825;

let isMember  = true;
if (isMember) {
    console.log("--- Book Inventory ---");
    console.log(book1.title + " by " + book1.author + " - $" + book1.price);
    console.log(book2.title + " by " + book2.author + " - $" + book2.price);
    console.log(book3.title + " by " + book3.author + " - $" + book3.price);
}


// 5.3 
function calculateSubtotal(price, quantity) {
    return price * quantity;
}


console.log("--- Function Declarations Test ---");
function formatCurrency(amount) {
    return "$" + amount.toFixed(2);
 }


// 5.4
console.log("--- Function Expression with Defaults ---");
const calculateTax = (subtotal) => {
    return subtotal * taxRate;
};
const applyMemberDiscount = (subtotal, isMember) => {
    if (isMember ? true : false) {
        return subtotal * 0.9; 
    }
    return subtotal;
    
};



// 5.5
const calculateTotal = function(price = 1, quantity = 1) {
    const subtotal = calculateSubtotal(price, quantity);
    const tax = calculateTax(subtotal);
    const Discount = applyMemberDiscount(subtotal, isMember);
    return (subtotal + tax) - Discount;
}

// 5.6
console.log("--- Rest Operator Test ---");
function calculateBulkOrder(...prices) {
}

// 5.7
console.log("--- Callback Functions ---");
function processOrder(book, quantity, callback) {
    callback(book.price, quantity); { 
    const standardPricing = calculateTotal(book.price, quantity);
    const memberPricing = calculateTotal(book.price * 0.9, quantity);
    return "Standard Pricing: $" + standardPricing + " and Member Pricing: $" + memberPricing;
    }
    
}


// 5.8
const orderSummary = {
    items: [],
    customerName: " ",

    addItem(book, quantity) {
        return book.price * quantity;
    }

}
        console.log("--- Object Methods ---");
        this.items
        this.customerName
    displaySummary(); {
        console.log("Order Summary for " + this.customerName);
        console.log("Items: " + this.items.join(", "));

    }
        this.getTotal(); {
        console.log("Total: $" + this.getTotal().toFixed(2));
    }




// 5.9
function validateDiscount(code) {
    console.log("--- Truthy/Falsy Validation ---");
    code = code.toUpperCase();
    if (code === "SAVE10") {
        return 0.10;
    } else if (code === "SAVE20") {
        return 0.20;
    } else {
        return "INVALID";
    }


}


// 5.10
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



 function createOrderProcessor(storeName) {
    return function processStoreOrder(book, quantity) {
        console.log("--- Nested Functions & Closures ---");
        return storeName + " Book title: " + book.title + " Calculated Total: " + quantity + " = $" + calculateTotal(book.price, quantity).toFixed(2);

    };
 }

