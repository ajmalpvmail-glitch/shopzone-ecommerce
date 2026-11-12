
let cartCount = 0;

const cartDisplay = document.getElementById("cart-count");

const buttons = document.querySelectorAll(".add-to-cart");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        cartCount++;

        cartDisplay.textContent = cartCount;

        alert("Product added to cart!");
    });
});
