document.addEventListener("DOMContentLoaded", function () {
    const footerHTML = `
    <footer style="background: linear-gradient(180deg, #0f172a 0%, #000 100%); color: #cbd5e1; padding: 60px 0 30px; border-top: 1px solid rgba(255,255,255,0.1);">
        <div class="container">
            <div class="footer-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 40px; margin-bottom: 50px;">
                
                <!-- Col 1: Brand & Social -->
                <div>
                     <a href="index.html" style="font-size: 1.8rem; font-weight: 800; color: white; text-decoration: none; display: block; margin-bottom: 20px;">
                        PREU<span class="text-yellow">FUNDEL</span>
                    </a>
                    <p style="margin-bottom: 25px; line-height: 1.6;">
                        Formamos estudiantes con metodología científica para garantizar su ingreso a las mejores universidades del Ecuador.
                    </p>
                    <div style="display: flex; gap: 15px;">
                        <a href="https://www.facebook.com/preuniversitariofundel" target="_blank" class="social-icon" style="color: white; font-size: 1.5rem; transition: 0.3s;"><ion-icon name="logo-facebook"></ion-icon></a>
                        <a href="https://www.instagram.com/preuniversitariofundel?igsh=MTNlYjBxaTVsbGR5Zg%3D%3D" target="_blank" class="social-icon" style="color: white; font-size: 1.5rem; transition: 0.3s;"><ion-icon name="logo-instagram"></ion-icon></a>
                        <a href="https://www.tiktok.com/@preuniversitariofundel?is_from_webapp=1&sender_device=pc" target="_blank" class="social-icon" style="color: white; font-size: 1.5rem; transition: 0.3s;"><ion-icon name="logo-tiktok"></ion-icon></a>
                    </div>
                </div>

                <!-- Col 2: Enlaces -->
                <div>
                    <h4 style="color: white; border-left: 3px solid var(--color-cyan); padding-left: 10px; margin-bottom: 20px;">ENLACES RÁPIDOS</h4>
                    <ul style="list-style: none; padding: 0;">
                        <li style="margin-bottom: 12px;"><a href="index.html" style="color: #cbd5e1; text-decoration: none; transition: 0.3s;" onmouseover="this.style.color='var(--color-cyan)'" onmouseout="this.style.color='#cbd5e1'"><ion-icon name="chevron-forward-outline" style="vertical-align: middle; color: var(--color-cyan);"></ion-icon> Inicio</a></li>
                        <li style="margin-bottom: 12px;"><a href="institucion.html" style="color: #cbd5e1; text-decoration: none; transition: 0.3s;" onmouseover="this.style.color='var(--color-cyan)'" onmouseout="this.style.color='#cbd5e1'"><ion-icon name="chevron-forward-outline" style="vertical-align: middle; color: var(--color-cyan);"></ion-icon> Institución</a></li>
                        <li style="margin-bottom: 12px;"><a href="programas.html" style="color: #cbd5e1; text-decoration: none; transition: 0.3s;" onmouseover="this.style.color='var(--color-cyan)'" onmouseout="this.style.color='#cbd5e1'"><ion-icon name="chevron-forward-outline" style="vertical-align: middle; color: var(--color-cyan);"></ion-icon> Programas</a></li>
                        <li style="margin-bottom: 12px;"><a href="contacto.html" style="color: #cbd5e1; text-decoration: none; transition: 0.3s;" onmouseover="this.style.color='var(--color-cyan)'" onmouseout="this.style.color='#cbd5e1'"><ion-icon name="chevron-forward-outline" style="vertical-align: middle; color: var(--color-cyan);"></ion-icon> Contacto</a></li>
                    </ul>
                </div>

                <!-- Col 3: Contacto -->
                <div>
                    <h4 style="color: white; border-left: 3px solid var(--color-yellow); padding-left: 10px; margin-bottom: 20px;">CONTÁCTANOS</h4>
                    <ul style="list-style: none; padding: 0;">
                        <li style="margin-bottom: 15px; display: flex; gap: 10px;">
                            <ion-icon name="location" style="color: var(--color-yellow); font-size: 1.2rem; flex-shrink: 0; margin-top: 3px;"></ion-icon>
                            <span><strong>Matriz Ambato:</strong><br>Quiz Quiz y Atahualpa</span>
                        </li>
                        <li style="margin-bottom: 15px; display: flex; gap: 10px;">
                           <ion-icon name="call" style="color: var(--color-yellow); font-size: 1.2rem; flex-shrink: 0; margin-top: 3px;"></ion-icon>
                           <span>+593 99 430 4689</span>
                        </li>
                        <li style="margin-bottom: 15px; display: flex; gap: 10px;">
                            <ion-icon name="mail" style="color: var(--color-yellow); font-size: 1.2rem; flex-shrink: 0; margin-top: 3px;"></ion-icon>
                            <span>digitalhub@fundel.com.ec</span>
                         </li>
                    </ul>
                </div>

                <!-- Col 4: Sedes -->
                <div>
                    <h4 style="color: white; border-left: 3px solid #10b981; padding-left: 10px; margin-bottom: 20px;">NUESTRAS SEDES</h4>
                    <ul style="list-style: none; padding: 0; font-size: 0.9rem;">
                        <li style="margin-bottom: 10px;">
                            <strong style="color: white;">Ambato 2:</strong> Atahualpa y Rumiñahui
                        </li>
                        <li style="margin-bottom: 10px;">
                            <strong style="color: white;">Latacunga 1:</strong> Belisario Quevedo y Rumiñahui
                        </li>
                        <li style="margin-bottom: 10px;">
                            <strong style="color: white;">Latacunga 2:</strong> Marco Aurelio Subía y Benjamín Carrión Borja
                        </li>
                         <li style="margin-bottom: 10px;">
                            <strong style="color: white;">Riobamba:</strong> José Veloz y Carlos Zambrano
                        </li>
                        <li style="margin-bottom: 10px;">
                            <strong style="color: white;">Puyo:</strong> Ceslao Marín, Sector La Y
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Copyright -->
            <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 30px; text-align: center; font-size: 0.9rem; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 20px;">
                <p style="margin: 0;">&copy; 2026 PREUFUNDEL | Potenciado por FUNDEL</p>
                <div style="display: flex; gap: 20px;">
                    <a href="#" style="color: #64748b; text-decoration: none;">Política de Privacidad</a>
                    <a href="#" style="color: #64748b; text-decoration: none;">Términos y Condiciones</a>
                </div>
            </div>
        </div>
    </footer>
    `;

    // Replace existing footer or append if none exists
    const existingFooter = document.querySelector('footer');
    if (existingFooter) {
        existingFooter.outerHTML = footerHTML;
    } else {
        document.body.insertAdjacentHTML('beforeend', footerHTML);
    }
});
