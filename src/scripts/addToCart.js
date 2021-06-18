export default function addToCart() {
    const sideCart = document.querySelector('.side-cart');

    if (sideCart) {
        let buyButton = document.querySelectorAll('.buyButton');
        let emptyCart = document.querySelector('.emptyCart');
        let path = window.location.pathname;
        let page = path.split("/").pop();
        if (page == 'products.html') {
            var products = obj;
        }

        // Add to Cart
        for (let cartBtn = 0; cartBtn < buyButton.length; cartBtn++) {
            buyButton[cartBtn].addEventListener('click', function () {
                emptyCart.style.display = 'none';
                cartNumbers(products[cartBtn]);
                console.log(totalCost(products[cartBtn]));
            });
        }

        function onLoadCartNumbers() {
            let productNumbers = localStorage.getItem('cartNumbers');

            if (productNumbers) {
                document.querySelector('.total_items_InCart').textContent = productNumbers;
            }
        }

        function cartNumbers(product) {

            let productNumbers = localStorage.getItem('cartNumbers');
            productNumbers = parseInt(productNumbers);

            if (productNumbers) {
                localStorage.setItem('cartNumbers', productNumbers + 1);
                document.querySelector('.total_items_InCart').textContent = productNumbers + 1;
            } else {
                localStorage.setItem('cartNumbers', 1);
                document.querySelector('.total_items_InCart').textContent = 1;
            }
            setItems(product);
            displayCart();
        }

        function setItems(product) {
            let cartItems = localStorage.getItem('productsInCart');
            cartItems = JSON.parse(cartItems);

            if (cartItems != null) {

                if (cartItems[product.id] == undefined) {
                    product.inCart = 0;
                    cartItems = {
                        ...cartItems,
                        [product.id]: product
                    }
                }

                cartItems[product.id].inCart += 1;
            } else {
                product.inCart = 1;
                cartItems = {
                    [product.id]: product
                }
            }

            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
        }

        function totalCost(product) {
            console.log(product.price);

            let cartCost = localStorage.getItem('totalCost');

            if (cartCost != null) {
                cartCost = parseInt(cartCost);
                localStorage.setItem('totalCost', cartCost + product.price)
            } else {
                localStorage.setItem('totalCost', product.price)
            }

        }

        function displayCart() {
            let cartItems = localStorage.getItem('productsInCart');
            cartItems = JSON.parse(cartItems);

            let productContainer = document.querySelector('.side-cart__products__container');
            let cartCost = localStorage.getItem('totalCost');
            if (cartItems && productContainer) {
                productContainer.innerHTML = '';
                Object.values(cartItems).map(item => {
                    productContainer.innerHTML += `
                        <div class="side-cart__products">
                        <div class="side-cart__products__product">
                            <img src="${item.imageURL}" alt="${item.name}">
                            <div class="side-cart__products__product__info">
                                <h5>${item.name}</h5>
                                <button class="minus-item decrease">-</button>
                                
                                <span class="itemInCart">${item.inCart}</span>
                                
                                <button class="minus-item increase">+</button>
                                <span class="multiplay">X</span>
                                <span class="side-cart__products__product__info__price">Rs.<span>${item.price}</span></span>
                            </div>
                            <div class="side-cart__products__product__totalPrice">Rs.<span class="totalPriceItem">${item.inCart * item.price}</span></div>
                        </div>
                    </div>
                        `;

                });
                productContainer.innerHTML += `
                    <div class="side-cart__checkout">
                        <p>Promo code can be applied on payment page</p>
                        <button class="side-cart__checkout__button">Proceed to Checkout <span class="side-cart__checkout__totalPrice">Rs. <span>${cartCost}</span><i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                    `
            }
        }
        displayCart();
        onLoadCartNumbers();
    }
}