const images = [
    "0.JPG",
    "1.JPG",
    "2.JPG"
]

const chosenImages = images[Math.floor(Math.random() * images.length)];

console.log(chosenImages);

const image = document.createElement("img");

image.src = `img/${chosenImages}`;

document.body.appendChild(image);


