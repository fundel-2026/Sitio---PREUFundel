// Carrusel automático de galería Hero - 5 imágenes mostrando 3
document.addEventListener('DOMContentLoaded', () => {
    const showcase = document.querySelector('.image-showcase');
    if (!showcase) return;

    const cards = Array.from(showcase.querySelectorAll('.showcase-card'));
    if (cards.length === 0) return;

    let currentStartIndex = 0;
    const visibleCount = 3; // Siempre mostrar 3 tarjetas
    const totalCards = cards.length; // 5 tarjetas en total
    const interval = 3000; // 3 segundos

    // Función para actualizar cuáles tarjetas son visibles
    function updateVisibleCards() {
        // Ocultar todas primero
        cards.forEach(card => {
            card.style.display = 'none';
            card.classList.remove('active');
        });

        // Mostrar las 3 tarjetas actuales
        for (let i = 0; i < visibleCount; i++) {
            const index = (currentStartIndex + i) % totalCards;
            cards[index].style.display = 'block';

            // La del medio se marca como activa
            if (i === 1) {
                cards[index].classList.add('active');
            }
        }
    }

    // Función para avanzar el carrusel
    function nextSlide() {
        currentStartIndex = (currentStartIndex + 1) % totalCards;
        updateVisibleCards();
    }

    // Inicializar
    updateVisibleCards();

    // Auto-rotar
    let autoRotate = setInterval(nextSlide, interval);

    // Pausar al hacer hover
    showcase.addEventListener('mouseenter', () => {
        clearInterval(autoRotate);
    });

    // Reanudar al salir del hover
    showcase.addEventListener('mouseleave', () => {
        autoRotate = setInterval(nextSlide, interval);
    });

    // Click en las tarjetas para avanzar manualmente
    cards.forEach(card => {
        card.addEventListener('click', () => {
            clearInterval(autoRotate);
            nextSlide();
            autoRotate = setInterval(nextSlide, interval);
        });
    });
});
