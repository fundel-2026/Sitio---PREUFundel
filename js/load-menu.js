// Plantilla del menú para todas las páginas
function cargarMenu() {
    // Obtener el nombre de la página actual
    const paginaActual = window.location.pathname.split('/').pop() || 'index.html';

    // Insertar el menú en el contenedor
    const contenedor = document.getElementById('menu-container');
    if (contenedor) {
        // Updated HTML with hamburger button
        const menuHTML = `
        <nav>
            <div class="container"
                style="display: flex; justify-content: space-between; align-items: center; height: 80px;">
                <a href="index.html"><img src="logo-brand.png" style="height: 40px; margin-right: 20px;"></a>
                
                <button class="hamburger" id="hamburger-btn">
                    <ion-icon name="menu-outline"></ion-icon>
                </button>

                <div class="nav-links" id="nav-links">
                    <a href="index.html" ${paginaActual === 'index.html' ? 'class="active" style="color: var(--color-cyan);"' : ''}>Inicio</a>
                    <a href="institucion.html" ${paginaActual === 'institucion.html' ? 'class="active" style="color: var(--color-cyan);"' : ''}>Institución</a>
                    <a href="metodologia.html" ${paginaActual === 'metodologia.html' ? 'class="active" style="color: var(--color-cyan);"' : ''}>Metodología</a>
                    <a href="programas.html" ${paginaActual === 'programas.html' ? 'class="active" style="color: var(--color-cyan);"' : ''}>Programas</a>
                    <a href="orientacion.html" ${paginaActual === 'orientacion.html' ? 'class="active" style="color: var(--color-cyan);"' : ''}>Orientación Vocacional</a>
                    <a href="https://preuniversitario.fundel.com.ec/" target="_blank" style="color: var(--color-yellow); font-weight: 600;">Aulas Digitales</a>
                    <a href="contacto.html"
                        style="background: var(--color-yellow); color: black; padding: 8px 16px; border-radius: 20px;">Inscripción al PREUFUNDEL</a>
                </div>
            </div>
        </nav>
        `;

        contenedor.innerHTML = menuHTML;

        // Mobile Menu Logic
        const hamburgerBtn = document.getElementById('hamburger-btn');
        const navLinks = document.getElementById('nav-links');

        if (hamburgerBtn && navLinks) {
            hamburgerBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent immediate closing if attached to document
                navLinks.classList.toggle('active');

                const icon = hamburgerBtn.querySelector('ion-icon');
                if (navLinks.classList.contains('active')) {
                    icon.setAttribute('name', 'close-outline');
                } else {
                    icon.setAttribute('name', 'menu-outline');
                }
            });

            // Close menu when clicking a link
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                    hamburgerBtn.querySelector('ion-icon').setAttribute('name', 'menu-outline');
                });
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (navLinks.classList.contains('active') &&
                    !navLinks.contains(e.target) &&
                    !hamburgerBtn.contains(e.target)) {
                    navLinks.classList.remove('active');
                    hamburgerBtn.querySelector('ion-icon').setAttribute('name', 'menu-outline');
                }
            });
        }
    }
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', cargarMenu);
} else {
    cargarMenu();
}
