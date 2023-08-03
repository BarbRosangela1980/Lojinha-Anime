// Carousel

let currentIndex = 0;
const carouselContainer = document.querySelector('.carousel-container');
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;

function showImage(index) {
    const offset = index * -100;
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    
   
showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 
    currentIndex = (currentIndex - 

   
1 + totalImages) % totalImages;
    showImage(currentIndex);
}

// Event listeners para botões de avançar e voltar
document.querySelector('.next-button').addEventListener('click', nextImage);
document.querySelector('.prev-button').addEventListener('click', prevImag);