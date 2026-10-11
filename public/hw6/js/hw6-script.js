// HW6 – COSC 2328 – Professor McCurry
// Implemented by: Mohammed Rehaan



// 6.2
const productPrices = {
    laptop: 999.99,
    tablet: 499.99,
    phone: 799.99,
    monitor: 199.99

};


const discountRates = {
    SAVE10 : 0.1, 
    SAVE20 : 0.2,
    STUDENT : 0.15  
};

// 6.3
const calculateTax = (subtotal) => {
    const taxRate = 0.0825;
    return subtotal * taxRate;
}


// 6.4
const calculateDiscount = (subtotal, discountCode) => {
    if (discountCode in discountRates) {
        return subtotal * discountRates[discountCode];
    }
    return 0;
}

// 6.5

const Form = document.getElementById("#form");
const product = document.getElementById("#product");
const quantity = document.getElementById("#quantity");
const discountCode = document.getElementById("#discountCode");
const subtotalForm = document.getElementById("#subtotal");
const tax = document.getElementById("#tax");
const total = document.getElementById("#total");





// 6.6


const orderForm = document.querySelector("#order-form");
orderForm.addEventListener("submit", function (event) {
    event.preventDefault();
});


// 6.7

const selectedProduct = productPrices.value;
const Qualityproduct = Number(quantity.value);
const discountCodeproduct = discountCode.value.trim();


if (productPrices[selectedProduct] == " ") {
    alert("Select a product");
    return;
}

if (productPrices[Qualityproduct] < 1 || productPrices[Qualityproduct] > 10) {
    alert("Select a quality greater than 1, or less than 10");
    return;
}




// 6.8

const subtotal = (price * quantity);
const discountAmount = applyDiscount(subtotal, discountCode);  
discountedSubtotal (subtotal - discountAmount) 
total (discountedSubtotal + tax);



// 6.9


textContent = "Total: $" + product.toFixed(2);
textContent = "Total: $" + quantity.toFixed(2);
textContent = "Total: $" + subtotal.toFixed(2);
textContent = "Total: $" + discount.toFixed(2);
textContent = "Total: $" + tax.toFixed(2);
textContent = "Total: $" + total.toFixed(2);

classList.remove("results-hidden")


