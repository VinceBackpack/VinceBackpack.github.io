const images = [
    "Proj1Main.png",
    "Proj1Image2.png",
    "Proj1Image3.png",
    "Proj1Image4.png"
];

let currentImage = 0;

const projectImage = document.querySelector("#project-image");
const carouselContainer = document.querySelector("#carousel-container");


function updateGallery() {

    // Change main image
    projectImage.src = images[currentImage];

    // Clear thumbnails
    carouselContainer.innerHTML = "";

    // Work out which 3 thumbnails to show
    let start = currentImage - 1;

    // At the beginning
    if (currentImage === 0) {
        start = 0;
    }

    // At the end
    if (currentImage === images.length - 1) {
        start = images.length - 3;
    }

    // Create the 3 thumbnails
    for (let i = start; i < start + 3; i++) {

        const carousel = document.createElement("img");

        carousel.src = images[i];
        carousel.alt = "UAE Homes screenshot " + (i + 1);

        carousel.classList.add("carousel");

        // Highlight current image
        if (i === currentImage) {
            carousel.classList.add("active");
        }

        // Clicking a thumbnail changes the main image
        carousel.addEventListener("click", () => {

            currentImage = i;

            updateGallery();

        });

        carouselContainer.appendChild(carousel);
    }
}


// MAIN IMAGE NEXT BUTTON
document.querySelector(".next").addEventListener("click", () => {

    currentImage++;

    // Loop back to first image
    if (currentImage >= images.length) {
        currentImage = 0;
    }

    updateGallery();

});


// MAIN IMAGE PREVIOUS BUTTON
document.querySelector(".prev").addEventListener("click", () => {

    currentImage--;

    // Loop to last image
    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    updateGallery();

});


// Create thumbnails immediately when page loads
updateGallery();