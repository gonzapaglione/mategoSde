const cartButton = document.getElementById('cart-button');
const cart = document.querySelector('.dinamic-cart');
const closeBtn = document.querySelector('.btn-close-cart');

cartButton.addEventListener('click', () => {
    cart.classList.toggle('active');

});

closeBtn.addEventListener('click', () => {
    cart.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if (!cart.contains(e.target) && !cartButton.contains(e.target)) {
        cart.classList.remove('active');
    }
});