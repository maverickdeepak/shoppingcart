export default function homePage() {
    const homepage = document.querySelector('.homepage');

    if (homepage) {
        async function homePageSections() {
            const categorySection = document.querySelector('.section__slider')
            try {
                await fetch('http://localhost:5000/categories')
                    .then(response => response.json())
                    .then(data => obj = data)
                    .then(obj => obj.map((productsCategories) => {
                        const getProductsCategories = `
                        <div class="section__main">
                        <div class="col-left">
                            <img src="${productsCategories.imageUrl}" alt="Fruits">
                        </div>
                        <div class="col-right">
                            <h4>${productsCategories.name}</h4>
                            <p>${productsCategories.description}</p>
                            <a href="./pages/products.html" class="btn-primary">Explore ${productsCategories.name}</a>
                        </div>
                        </div>
                        `;
                        categorySection.insertAdjacentHTML('afterend', getProductsCategories);
                    }));
                let getdiv = document.querySelector('.homepage');
                getdiv.children[4].classList.add('special');
                getdiv.children[6].classList.add('special');

            } catch (error) {
                console.log(error)
            }
        }
        homePageSections();
    }

}