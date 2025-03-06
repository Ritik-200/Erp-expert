// Retrieve cart from local storage (or initialize an empty array)
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to add items to the cart
function addToCart(product, price) {
    cart.push({ product, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product} added to cart!`);
    updateCartCount();
}

// Function to update the cart count
function updateCartCount() {
    let cartCountElement = document.getElementById("cart-count");
    if (cartCountElement) {
        cartCountElement.innerText = cart.length;
    }
}

// Function to display cart items
function displayCart() {
    let cartItems = document.getElementById("cart-items");
    let cartTotal = document.getElementById("cart-total");

    if (!cartItems || !cartTotal) return;

    cartItems.innerHTML = ""; // Clear previous list
    let total = 0;

    cart.forEach((item, index) => {
        cartItems.innerHTML += `
            <p>${item.product} - $${item.price} 
            <button onclick="removeFromCart(${index})">Remove</button></p>`;
        total += item.price;
    });

    cartTotal.innerText = total;
}

// Function to remove an item from the cart
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
    updateCartCount();
}

// Load cart count when page loads
document.addEventListener("DOMContentLoaded", function() {
    updateCartCount();
    if (document.getElementById("cart-items")) {
        displayCart();
    }
});