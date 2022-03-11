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

let imagesIndex = 0;
setInterval( () =>{
    imagesIndex++;
    console.log(imagesIndex);
}, 1000)