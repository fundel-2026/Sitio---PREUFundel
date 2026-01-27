// Plantilla del menú para todas las páginas
function cargarMenu() {
    // Obtener el nombre de la página actual
    const paginaActual = window.location.pathname.split('/').pop() || 'index.html';

    // Crear el HTML del menú
    const menuHTML = `
    <nav>
        <div class="container"
            style="display: flex; justify-content: space-between; align-items: center; height: 80px;">
            <a href="index.html"><img src="logo-brand.png" style="height: 40px; margin-right: 20px;"></a>
            <div class="nav-links">
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

    // Insertar el menú en el contenedor
    const contenedor = document.getElementById('menu-container');
    if (contenedor) {
        contenedor.innerHTML = menuHTML;
    }
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', cargarMenu);
} else {
    cargarMenu();
}
