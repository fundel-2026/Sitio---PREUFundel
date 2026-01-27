document.addEventListener('DOMContentLoaded', () => {
    const navbarRoot = document.getElementById('navbar-root');
    if (!navbarRoot) return;

    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    const navHTML = `
    <nav>
        <div class="container"
            style="display: flex; justify-content: space-between; align-items: center; height: 80px;">
            <a href="index.html"><img src="logo-brand.png" style="height: 40px; margin-right: 20px;"></a>
            <div class="nav-links">
                <a href="index.html" class="${currentPath === 'index.html' ? 'active' : ''}" ${currentPath === 'index.html' ? 'style="color: var(--color-cyan);"' : ''}>Inicio</a>
                <a href="institucion.html" class="${currentPath === 'institucion.html' ? 'active' : ''}" ${currentPath === 'institucion.html' ? 'style="color: var(--color-cyan);"' : ''}>Institución</a>
                <a href="metodologia.html" class="${currentPath === 'metodologia.html' ? 'active' : ''}" ${currentPath === 'metodologia.html' ? 'style="color: var(--color-cyan);"' : ''}>Metodología</a>
                <a href="programas.html" class="${currentPath === 'programas.html' ? 'active' : ''}" ${currentPath === 'programas.html' ? 'style="color: var(--color-cyan);"' : ''}>Programas</a>
                <a href="orientacion.html" class="${currentPath === 'orientacion.html' ? 'active' : ''}" ${currentPath === 'orientacion.html' ? 'style="color: var(--color-cyan);"' : ''}>Orientación</a>
                <a href="https://preuniversitario.fundel.com.ec/" target="_blank" style="color: var(--color-yellow); font-weight: 600;">Aulas Digitales</a>
                <a href="contacto.html"
                    style="background: var(--color-yellow); color: black; padding: 8px 16px; border-radius: 20px;">Inscripción</a>
            </div>
        </div>
    </nav>
    `;

    navbarRoot.innerHTML = navHTML;
});
