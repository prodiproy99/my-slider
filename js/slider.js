const images = [
    'images/image-1.jpeg',
    'images/image-2.jpg',
    'images/image-3.jpeg',
    'images/image-4.jpeg',
    'images/image-5.jpeg',
    'images/image-6.jpeg',
    'images/image-7.jpeg',
    'images/image-8.jpeg',
    'images/image-9.jpeg'
]
const imgElement = document.getElementById("slider-img");
let imgIndex = 0;
setInterval( () =>{ 
    if(imgIndex >= images.length){
        imgIndex = 0;
    }
  const imagUrl = images[imgIndex]
  imgElement.setAttribute("src", imagUrl)
    imgIndex++;
}, 1000)