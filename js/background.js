const backgrounds = [
    "1.jpg", "2.jpg", "3.jpg","4.jpg","5.jpg","6.jpg"
];

const chosenImage = backgrounds[Math.floor(Math.random() * backgrounds.length)]

const bgImage = document.createElement("img")
bgImage.className = "bgImage"
bgImage.src = `./backgroundImages/${chosenImage}`;

document.body.appendChild(bgImage);