const images = [
    'images/download (1).jpg',
    "images/download (2).jpg",
    "images/download (3).jpg",
    "images/download (4).jpg",
    "images/download (5).jpg",
    "images/download (6).jpg",
    "images/download (7).jpg",
    "images/download (8).jpg"

]
let imageNumber = 0;
const imageSlider = document.getElementById("image-slider");
setInterval(() => {
    if (imageNumber >= images.length) {
        imageNumber = 0;
    }
    const imageUrl = images[imageNumber];

    imageSlider.setAttribute("src", imageUrl);
    imageNumber++;

}, 1000)