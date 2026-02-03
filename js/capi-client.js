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

    const leadForms = document.querySelectorAll('#lead-form, #contact-form'); // Extend selectors as needed

    leadForms.forEach(form => {
        form.addEventListener('submit', function (e) {
            // Prevent default only if you want to handle everything via JS. 
            // If you have existing logic, consider just firing this alongside.
            // For now, we assume we piggyback on the click or submit event.

            const eventId = generateEventId();

            // 1. Get Data from Form
            // Adjust selectors based on your actual HTML input names/IDs
            const firstName = form.querySelector('input[name="name"]')?.value || form.querySelector('input[type="text"]')?.value || '';
            const phone = form.querySelector('input[name="phone"]')?.value || form.querySelector('input[type="tel"]')?.value || '';
            const email = form.querySelector('input[name="email"]')?.value || ''; // If exists

            // 2. Fire Browser Pixel (Redundancy)
            if (typeof fbq === 'function') {
                fbq('track', 'Lead', {}, { eventID: eventId });
            }

            // 3. Send to Server (CAPI)
            fetch(API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName: firstName,
                    phone: phone,
                    email: email,
                    eventId: eventId,
                    eventSourceUrl: window.location.href
                })
            })
                .then(response => response.json())
                .then(data => {
                    console.log('CAPI Event Sent:', data);
                })
                .catch(error => {
                    console.error('CAPI Error:', error);
                });
        });
    });
});
