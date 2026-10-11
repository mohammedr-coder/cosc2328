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
const applyDiscount  = function(subtotal, discountCode) {
    if (discountCode in discountRates) {
        return subtotal * discountRates[discountCode];
    }
    return 0;
}

// 6.5


const productInput = document.getElementById("product");
const quantityInput = document.getElementById("quantity");
const discountCodeInput = document.getElementById("discountCode");
const product = document.getElementById("product-form");
const quantity = document.getElementById("quantity-form");
const discountCode = document.getElementById("discountCode-form");
const subtotalForm = document.getElementById("subtotal-form");
const tax = document.getElementById("tax-form");
const total = document.getElementById("total-form");





// 6.6


const orderForm = document.querySelector("#orderForm");
orderForm.addEventListener("submit", function (event) {
    event.preventDefault();
});


// 6.7

const selectedProduct = productInput.value;
const Qualityproduct = Number(quantity.value);
const discountCodeproduct = discountCode.value.trim();


if (productPrices[selectedProduct] === " ") {
    alert("Select a product");
    return;
}

if (productPrices[Qualityproduct] < 1 || productPrices[Qualityproduct] > 10) {
    alert("Select a quality greater than 1, or less than 10");
    return;
}




// 6.8

const subtotal = (productPrices * quantity);
const discountAmount = applyDiscount (subtotal, discountCode);  
const discountedSubtotal = (subtotal - discountAmount)
total  = (discountedSubtotal + tax);



// 6.9


product.textContent = "Total: $" + product.toFixed(2);
quantity.textContent = "Total: $" + quantity.toFixed(2);
subtotalForm.textContent = "Total: $" + subtotal.toFixed(2);
discountCode.textContent = "Total: $" + discountCode.toFixed(2);
tax.textContent = "Total: $" + tax.toFixed(2);
total.textContent = "Total: $" + total.toFixed(2);

classList.remove("results-hidden")


