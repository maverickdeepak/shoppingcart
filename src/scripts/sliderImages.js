
export default function sliderImages() {
    const slider = document.querySelector('.section__slider');

    if (slider) {
        const imagesArea = document.querySelector('.images-area');
        const firstChild = imagesArea.firstElementChild;
        console.log(firstChild)
        try {

            fetch('http://localhost:5000/banners')
                .then(response => response.json())
                .then(data => obj = data)
                .then(obj => obj.map((bannerImage) => {
                    const allImages = `
                    <img src="${bannerImage.bannerImageUrl}" alt="${bannerImage.bannerImageAlt}">
                    `;
                    imagesArea.insertAdjacentHTML('afterbegin', allImages);
                }));
            const pagination = `
            <div class="buttons-area">
                    <div class="previous-btn">
                      PREV
                    </div>
                    <div class="next-btn">
                      NEXT
                    </div>
            </div>
            `;
            imagesArea.insertAdjacentHTML('beforeEnd', pagination);

        } catch (error) {
            console.log(error);
        }
    }
}