const images = [
"https://raw.githubusercontent.com/JohnDoewp/3ede5b7/refs/heads/main/16%20TERMINADA.png",
"https://github.com/JohnDoewp/3ede5b7/blob/main/02%20TERMINADA.png?raw=true",
"https://github.com/JohnDoewp/3ede5b7/blob/main/03%20TERMINADA.png?raw=true",
"https://github.com/JohnDoewp/3ede5b7/blob/main/04%20TERMINADA.png?raw=true",
"https://github.com/JohnDoewp/3ede5b7/blob/main/05%20TERMINADA.png?raw=true",
"https://github.com/JohnDoewp/3ede5b7/blob/main/06%20TERMINADA.png?raw=true",
"https://github.com/JohnDoewp/3ede5b7/blob/main/08%20TERMINADA.png?raw=true",
"https://github.com/JohnDoewp/3ede5b7/blob/main/09%20TERMINADA.png?raw=true",
"https://github.com/JohnDoewp/3ede5b7/blob/main/07%20TERMINADA.png?raw=true",
"https://github.com/JohnDoewp/3ede5b7/blob/main/11%20TERMINADA.png?raw=true",
"https://github.com/JohnDoewp/3ede5b7/blob/main/10%20TERMINADA.png?raw=true",
"https://github.com/JohnDoewp/3ede5b7/blob/main/13%20TERMINADO.png?raw=true",
"https://github.com/JohnDoewp/3ede5b7/blob/main/14%20TERMINADA.png?raw=true",
"https://github.com/JohnDoewp/3ede5b7/blob/main/15%20TERMINADA.png?raw=true",
"https://github.com/JohnDoewp/3ede5b7/blob/main/01%20TERMINADA.png?raw=true"
];

const mainImage = document.getElementById("mainImage");
const thumbnails = document.getElementById("thumbnails");

images.forEach(img => {
    const image = document.createElement("img");
    image.src = img;
    image.onclick = () => mainImage.src = img;
    thumbnails.appendChild(image);
});

function scrollToContact(){
    document.getElementById("contact").scrollIntoView({behavior:"smooth"});
}