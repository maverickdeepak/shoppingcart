import addToCart from './addToCart.js'
export default function products() {
    let productContainer = document.querySelector('.all-products');
    let categoryContainer = document.querySelector('.all-products__categories');
    let categoryContainerMobile = document.querySelector('.mobile-select');
    let innerWidth = window.innerWidth <= 540;
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
                        ${innerWidth ?
                                `
                            <h5>${product.name}</h5>
                            ` : `
                            <h5>${product.name.substring(0, 20)}</h5>
                            `
                            }
                            

                            <div class="single-product__mobile">
                            <div class="single-product__image">
                                <img src="${product.imageURL}" alt="${product.name}">
                            </div>
                            <div class="single-product__mobile__description">
                                <p class="descriptions">${product.description.substring(0, 80)}</p>
                                ${innerWidth ?
                                `
                                <div class="productBottom">
                                    <a href="#" class="btn-primary buyButton" onclick="return false;">Buy Now @MRP Rs.<span class="price">${product.price}</span></a>
                                </div>
                                ` : `
                                <div class="productBottom">
                                    <p>MRP Rs.<span class="price">${product.price}</span></p>
                                    <a href="#" class="btn-primary buyButton" onclick="return false;">Buy Now</a>
                                </div>
                                `
                            }
                                
                            </div>
                            </div>
                        </div>
                      `;
                        allProductsContainer.insertAdjacentHTML('beforeend', getAllProducts)
                    }))

            } catch (err) {
                console.log(err)
            }
            /* -- Imported function call here --*/
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

        // Show categories for mobile device
        if (window.innerWidth <= 540) {
            async function showCategoriesMobile() {
                try {
                    await fetch('http://localhost:5000/categories')
                        .then(response => response.json())
                        .then(data => data.map((category) => {
                            // console.log(category);
                            const getAllCategories = `
                            <option value="${category.id}" data-id="${category.id}" class="filter">${category.name}</option>
                            `;
                            categoryContainerMobile.insertAdjacentHTML('beforeend', getAllCategories);
                        }));
                }
                catch (err) {
                    console.log(err)
                }

                // Function for Filter the Products
                let categoryClasses = document.getElementById('mobile-select');
                let singleProduct = document.querySelectorAll('.single-product');
                function filter() {
                    categoryClasses.addEventListener('change', (e) => {
                        let strUser = categoryClasses.value;
                        singleProduct.forEach((product) => {
                            // console.log(typeof product)
                            // for (const singleItem in product) {
                            //     console.log(`${product[singleItem]}`);
                            // }
                            if (strUser === 'all') {
                                product.style.display = 'block'
                            } else {
                                if (product.getAttribute('data-id') == strUser) {
                                    product.style.display = 'block';
                                } else {
                                    product.style.display = 'none';
                                }
                            }
                        })
                    })

                }
                filter();
            }
            showCategoriesMobile();
        }

    } else {
        addToCart();
    }
}
