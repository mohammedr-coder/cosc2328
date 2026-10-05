// HW6 – COSC 2328 – Professor McCurry
// Implemented by: [Your Full Name]



// 6.2
const productPrices = {
    laptop: 999.99,
    tablet: 499.99,
    phone: 799.99,
    monitor: 199.99

};


const discountRates = {
    SAVE10 : 0.1, // 10% discount
    SAVE20 : 0.2, // 20% discount
    SAVE30 : 0.3  // 30% discount
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

document.getElementById


// 6.6


addEventListener("submit")


// 6.7



// 6.8
// const subtotal = (price * quantity); => const discountAmount = 
// const applyDiscount(subtotal, discountCode) => discountedSubtotal (subtotal - discountAmount)
// => total (discountedSubtotal + tax);



// 6.9
