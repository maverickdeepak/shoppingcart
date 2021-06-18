export default function sideCart() {
    const body = document.querySelector('body');
    const cartIcon = document.querySelector('.cart');
    const cartCloseButton = document.querySelector('.side-cart__topbar__close');
    const sideCart = document.querySelector('.side-cart');

    if (sideCart) {
        cartIcon.addEventListener('click', function () {
            sideCart.classList.add('cart-active');
            body.classList.add('overflow-hidden')
        });
        cartCloseButton.addEventListener('click', function () {
            sideCart.classList.remove('cart-active');
            body.classList.remove('overflow-hidden')
        })
    } else {
        console.log('Cart Not Found')
    }
}