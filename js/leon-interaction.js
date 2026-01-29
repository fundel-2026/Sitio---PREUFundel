// León Interactivo
document.addEventListener('DOMContentLoaded', () => {
    const leon = document.getElementById('leon-fundel');

    if (!leon) return;

    // Intersection Observer para detectar cuando el león es visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Re-activar la animación de saludo
                leon.style.animation = 'none';
                setTimeout(() => {
                    leon.style.animation = 'leonWave 2s ease-in-out';
                }, 10);
            }
        });
    }, {
        threshold: 0.3 // Se activa cuando el 30% del león es visible
    });

    observer.observe(leon);

    // Click en el león para rugir (opcional)
    leon.addEventListener('click', () => {
        leon.style.animation = 'leonHover 0.3s ease-in-out 3';
        console.log('🦁 ¡ROAR! Bienvenido a PREUFUNDEL');
    });
});
