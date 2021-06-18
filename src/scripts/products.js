import addToCart from './addToCart.js'
export default function products() {
    let productContainer = document.querySelector('.all-products');
    let categoryContainer = document.querySelector('.all-products__categories');
    if (productContainer) {

        // Function for Call the All Products

        async function showProducts() {
            const allProductsContainer = document.querySelector('.all-products__container__product');

            try {
                await fetch('http://localhost:5000/products')
                    .then(response => response.json())
                    .then(data => obj = data)
                    .then(obj => obj.map((product) => {
                        // console.log(product);
                        const getAllProducts = `
                        <div class="single-product" data-id="${product.category}">
                            <h5>${product.name.substring(0, 20)}</h5>
                            <img src="../..${product.imageURL}" alt="${product.name}">
                            <p class="descriptions">${product.description.substring(0, 100)}</p>
                            <div class="productBottom">
                                <p>Rs <span class="price">${product.price}</span></p>
                                <a href="#" class="btn-primary buyButton" onclick="return false;">Buy Now</a>
                            </div>
                        </div>
                      `;
                        allProductsContainer.insertAdjacentHTML('beforeend', getAllProducts)
                    }))

            } catch (err) {
                console.log(err)
            }
            /* -- Imported function calling here --*/
            addToCart();

        } showProducts();

        // Function for Call the All Categories
        async function showCategories() {
            try {
                await fetch('http://localhost:5000/categories')
                    .then(response => response.json())
                    .then(data => data.map((category) => {
                        // console.log(category);
                        const getAllCategories = `
                        <li><a href="#" class="filter" data-id="${category.id}">${category.name}</a></li>
                        `;
                        categoryContainer.insertAdjacentHTML('beforeend', getAllCategories);
                    }));
            }
            catch (err) {
                console.log(err)
            }

            // Function for Filter the Products
            let categoryClasses = document.querySelectorAll('.filter');
            let singleProduct = document.querySelectorAll('.single-product');
            function filter() {
                for (let i = 0; i < categoryClasses.length; i++) {
                    categoryClasses[i].addEventListener('click', (e) => {
                        e.preventDefault()
                        const filter = e.target.dataset.id;
                        //console.log(filter);
                        singleProduct.forEach((product) => {
                            // console.log(typeof product)
                            // for (const singleItem in product) {
                            //     console.log(`${product[singleItem]}`);
                            // }
                            if (filter === 'all') {
                                product.style.display = 'block'
                            } else {
                                if (product.getAttribute('data-id') == filter) {
                                    product.style.display = 'block';
                                } else {
                                    product.style.display = 'none';
                                }
                            }
                        })
                    })
                }
            }
            filter();
        }
        showCategories();

    } else {
        addToCart();
    }
}
