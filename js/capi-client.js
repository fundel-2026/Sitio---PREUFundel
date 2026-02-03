/* 
   Meta Conversions API Client Script
   Captures form data + Pixel Event ID -> Sends to Backend
*/

document.addEventListener('DOMContentLoaded', () => {

    // Config: Change this URL to your production backend URL if hosted online
    const API_ENDPOINT = 'http://localhost:3000/api/lead';

    function generateEventId() {
        return 'evt-' + Date.now() + '-' + Math.floor(Math.random() * 1000000);
    }

    const leadForms = document.querySelectorAll('#lead-form, #contact-form, #footer-form'); // Extend selectors as needed

    leadForms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent default submission to handle via JS

            const eventId = generateEventId();

            // 1. Get Data from Form
            const representativeName = form.querySelector('input[name="parent_name"]')?.value || form.querySelector('input[name="name"]')?.value || 'N/A';
            const studentName = form.querySelector('input[name="student_name"]')?.value || 'N/A';
            const phone = form.querySelector('input[name="phone"]')?.value || form.querySelector('input[type="tel"]')?.value || '';
            const email = form.querySelector('input[name="email"]')?.value || '';
            const programInfo = form.querySelector('select')?.value || form.querySelector('textarea')?.value || '';

            // 2. Fire Browser Pixel (Best effort before redirect)
            if (typeof fbq === 'function') {
                fbq('track', 'Lead', {
                    content_name: 'Inscripción',
                    custom_data: { student_name: studentName, representative_name: representativeName }
                }, { eventID: eventId });
            }

            // 3. Send to Server (CAPI) - Async, might be cut off by redirect but we try
            fetch(API_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstName: representativeName,
                    studentName: studentName,
                    phone: phone,
                    email: email,
                    eventId: eventId,
                    eventSourceUrl: window.location.href
                })
            }).catch(e => console.log('Background sync error', e));

            // 4. Redirect to WhatsApp
            const targetPhone = '593994304689'; // Provided in user request context
            const message = `Hola, me interesa inscribirme en PREUFUNDEL.\n\n*Mis Datos:*\nNombre Rep: ${representativeName}\nEstudiante: ${studentName}\nTeléfono: ${phone}\nInfo: ${programInfo}`;
            const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(message)}`;

            // Small delay to allow pixel to try firing (optional, but good practice)
            setTimeout(() => {
                window.location.href = whatsappUrl;
            }, 200);
        });
    });
});
