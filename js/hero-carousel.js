
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.hero-slide');
    const baseImage = document.getElementById('hero-base-image');

    if (slides.length === 0 || !baseImage) return;

    let currentSlide = -1; // -1 significa que se muestra la imagen base
    const intervalTime = 5000; // 5 seconds

    function nextSlide() {
        if (currentSlide >= 0) {
            // Ocultar el slide actual
            slides[currentSlide].style.opacity = '0';
            slides[currentSlide].style.zIndex = '0';
        }

        // Calcular siguiente índice
        currentSlide = (currentSlide + 1) % slides.length;

        if (currentSlide === 0) {
            // Volver a mostrar la imagen base
            baseImage.style.zIndex = '1';
        } else {
            // Ocultar imagen base y mostrar slide
            baseImage.style.zIndex = '0';
            slides[currentSlide].style.opacity = '1';
            slides[currentSlide].style.zIndex = '2';
        }
    }

    setInterval(nextSlide, intervalTime);
    console.log('Hero Carousel initialized with base image + ' + slides.length + ' slides.');
});
