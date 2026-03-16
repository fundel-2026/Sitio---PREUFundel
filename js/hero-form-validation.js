/* 
   Hero Form Validation & Submission Script
   Handles real-time validation, visual feedback, and WhatsApp redirection.
*/

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('lead-form');
    if (!form) return;

    const inputs = {
        parent_name: form.querySelector('[name="parent_name"]'),
        student_name: form.querySelector('[name="student_name"]'),
        phone: form.querySelector('[name="phone"]')
    };

    const submitBtn = form.querySelector('.btn-hero-submit');
    const originalBtnContent = submitBtn.innerHTML;

    // Validation Rules
    const validators = {
        name: (value) => value.trim().length >= 3,
        phone: (value) => /^09\d{8}$/.test(value.replace(/\s/g, ''))
    };

    // Real-time Validation (Visual Feedback)
    Object.keys(inputs).forEach(key => {
        const input = inputs[key];
        if (!input) return;

        input.addEventListener('input', () => {
            validateInput(input, key === 'phone' ? 'phone' : 'name');
        });

        input.addEventListener('blur', () => {
            validateInput(input, key === 'phone' ? 'phone' : 'name');
        });
    });

    function validateInput(input, type) {
        const isValid = validators[type](input.value);
        if (isValid) {
            input.style.borderColor = '#10B981'; // Green
            input.style.backgroundColor = '#f0fdf4';
            input.style.boxShadow = 'none';
        } else {
            input.style.borderColor = '#EF4444'; // Red
            input.style.backgroundColor = '#fef2f2';
        }
        return isValid;
    }

    // Form Submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Validate all fields
        let isFormValid = true;
        let firstInvalid = null;

        if (!validateInput(inputs.parent_name, 'name')) {
            isFormValid = false;
            if (!firstInvalid) firstInvalid = inputs.parent_name;
        }
        if (!validateInput(inputs.student_name, 'name')) {
            isFormValid = false;
            if (!firstInvalid) firstInvalid = inputs.student_name;
        }
        if (!validateInput(inputs.phone, 'phone')) {
            isFormValid = false;
            if (!firstInvalid) firstInvalid = inputs.phone;
        }

        if (!isFormValid) {
            // Shake effect or focus
            if (firstInvalid) {
                firstInvalid.focus();
                firstInvalid.parentElement.classList.add('shake');
                setTimeout(() => firstInvalid.parentElement.classList.remove('shake'), 500);
            }
            return;
        }

        // Success State
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<ion-icon name="logo-whatsapp"></ion-icon> Redirigiendo...';
        submitBtn.style.background = '#25D366';
        submitBtn.style.color = 'white';

        // Prepare WhatsApp Message
        const message = `Hola, me interesa inscribirme en PREUFUNDEL.\n\n*Mis Datos:*\nNombre Rep: ${inputs.parent_name.value}\nEstudiante: ${inputs.student_name.value}\nWhatsApp: ${inputs.phone.value}`;
        const whatsappUrl = `https://wa.me/593994304689?text=${encodeURIComponent(message)}`;

        // Track Conversion & Redirect
        if (typeof window.gtag_report_conversion === 'function') {
            window.gtag_report_conversion(whatsappUrl);
        } else {
            setTimeout(() => {
                window.location.href = whatsappUrl;

                // Reset form after redirect (optional, if user comes back)
                setTimeout(() => {
                    form.reset();
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnContent;
                    submitBtn.style.background = '';
                    submitBtn.style.color = '';
                    Object.values(inputs).forEach(input => {
                        input.style.borderColor = '';
                        input.style.backgroundColor = '';
                    });
                }, 2000);
            }, 800);
        }
    });

    // Add Keyframe forShake
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
        .shake { animation: shake 0.3s ease-in-out; }
    `;
    document.head.appendChild(style);
});
