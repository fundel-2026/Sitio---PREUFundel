// PREUFUNDEL - Premium Animations & Effects
// Complete version with scroll animations AND advanced interactive effects

document.addEventListener('DOMContentLoaded', function () {

    // ==========================================
    // 1. SCROLL ANIMATIONS - Intersection Observer
    // ==========================================

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const animateOnScroll = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // Observe all elements with reveal class
    document.querySelectorAll('.reveal').forEach(el => {
        animateOnScroll.observe(el);
    });

    // ==========================================
    // 2. COUNTER ANIMATIONS for Statistics
    // ==========================================

    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16); // 60fps
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }

            // Format the number
            if (element.dataset.format === 'percent') {
                element.textContent = Math.floor(current) + '%';
            } else if (element.dataset.format === 'plus') {
                element.textContent = Math.floor(current) + '+';
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }

    // Initialize counters when they come into view
    const counterObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                const target = parseInt(entry.target.dataset.target);
                animateCounter(entry.target, target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.stat-number').forEach(el => {
        counterObserver.observe(el);
    });

    // ==========================================
    // 3. PARALLAX EFFECT (subtle)
    // ==========================================

    let ticking = false;

    function updateParallax() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax-container img');

        parallaxElements.forEach(el => {
            const speed = el.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            el.style.transform = `translateY(${yPos}px)`;
        });

        ticking = false;
    }

    window.addEventListener('scroll', function () {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });

    // ==========================================
    // 4. STAGGER ANIMATIONS for grid items
    // ==========================================

    const methodologyObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('staggered')) {
                entry.target.classList.add('staggered');
                const cards = entry.target.querySelectorAll('.grid-3 > div');
                cards.forEach((card, index) => {
                    card.style.animationDelay = `${index * 0.2}s`;
                    card.classList.add('fade-in');
                });
            }
        });
    }, observerOptions);

    document.querySelectorAll('.grid-3').forEach(el => {
        methodologyObserver.observe(el);
    });

    // ==========================================
    // 5. ENHANCED FORM INTERACTIONS
    // ==========================================

    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function () {
            this.parentElement.classList.add('input-focused');
        });

        input.addEventListener('blur', function () {
            this.parentElement.classList.remove('input-focused');
        });
    });

    // Enhanced submit button
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            const submitBtn = this.querySelector('button[type="submit"], .btn');
            if (submitBtn) {
                submitBtn.classList.add('btn-loading');

                setTimeout(() => {
                    submitBtn.classList.remove('btn-loading');
                }, 2000);
            }
        });
    });

    // ==========================================
    // 6. SMOOTH SCROLL for anchor links
    // ==========================================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ==========================================
    // 7. ADD HOVER EFFECTS TO ICONS
    // ==========================================

    document.querySelectorAll('ion-icon').forEach(icon => {
        if (icon.closest('.grid-3')) {
            icon.classList.add('icon-bounce');
        }
    });

    // ==========================================
    // 8. ENHANCED 3D TILT EFFECT for cards
    // ==========================================

    document.querySelectorAll('.card-glass, .card-white').forEach(card => {
        card.addEventListener('mousemove', function (e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = '';
        });
    });

    // ==========================================
    // 9. CHATBOT ANIMATION
    // ==========================================

    const chatbot = document.querySelector('.chatbot-float');
    if (chatbot) {
        setTimeout(() => {
            chatbot.classList.add('cta-pulse');
        }, 3000);

        chatbot.addEventListener('click', function () {
            this.classList.remove('cta-pulse');
        }, { once: true });
    }

    // ==========================================
    // 10. MAGNETIC BUTTON EFFECT
    // ==========================================

    const magneticButtons = document.querySelectorAll('.btn-primary, .btn-outline');

    magneticButtons.forEach(btn => {
        btn.addEventListener('mousemove', function (e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            const moveX = x * 0.3;
            const moveY = y * 0.3;

            this.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
        });

        btn.addEventListener('mouseleave', function () {
            this.style.transform = '';
        });
    });

    // ==========================================
    // 11. RIPPLE EFFECT ON BUTTON CLICK
    // ==========================================

    document.querySelectorAll('.btn, button').forEach(button => {
        button.addEventListener('click', function (e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');

            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';

            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });

    // ==========================================
    // 12. ENHANCED STAT CARDS INTERACTION
    // ==========================================

    document.querySelectorAll('.card-white, .card-glass').forEach(card => {
        card.classList.add('stat-card-enhanced');

        card.addEventListener('mouseenter', function () {
            this.classList.add('glow-pulse-active');
        });

        card.addEventListener('mouseleave', function () {
            this.classList.remove('glow-pulse-active');
        });
    });

    // ==========================================
    // 13. INTERACTIVE STAT NUMBERS - HOVER TO INCREASE
    // ==========================================

    document.querySelectorAll('.stat-number').forEach(stat => {
        const originalValue = parseInt(stat.dataset.target);
        let isHovered = false;

        stat.addEventListener('mouseenter', function () {
            if (!isHovered && this.classList.contains('counted')) {
                isHovered = true;
                const currentValue = originalValue;
                const bonusValue = Math.floor(originalValue * 0.05);

                let current = currentValue;
                const increment = bonusValue / 10;

                const interval = setInterval(() => {
                    current += increment;
                    if (current >= currentValue + bonusValue) {
                        current = currentValue + bonusValue;
                        clearInterval(interval);
                    }

                    if (this.dataset.format === 'percent') {
                        this.textContent = Math.floor(current) + '%';
                    } else if (this.dataset.format === 'plus') {
                        this.textContent = Math.floor(current) + '+';
                    } else {
                        this.textContent = Math.floor(current);
                    }
                }, 30);
            }
        });

        stat.addEventListener('mouseleave', function () {
            if (isHovered) {
                isHovered = false;
                if (this.dataset.format === 'percent') {
                    this.textContent = originalValue + '%';
                } else if (this.dataset.format === 'plus') {
                    this.textContent = originalValue + '+';
                } else {
                    this.textContent = originalValue;
                }
            }
        });
    });

    // ==========================================
    // 14. CHECKMARK PULSE ON HOVER
    // ==========================================

    document.querySelectorAll('.checkmark-animate').forEach(check => {
        check.addEventListener('mouseenter', function () {
            this.style.animation = 'pulse 0.5s ease-in-out 2';
        });

        check.addEventListener('animationend', function () {
            this.style.animation = '';
        });
    });

    // ==========================================
    // 15. GALLERY ITEMS - INTERACTIVE ZOOM
    // ==========================================

    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.style.zIndex = '10';
        });

        item.addEventListener('mouseleave', function () {
            this.style.zIndex = '1';
        });

        item.addEventListener('dblclick', function () {
            if (this.classList.contains('expanded')) {
                this.classList.remove('expanded');
                this.style.transform = '';
                this.style.position = '';
                this.style.zIndex = '';
            } else {
                this.classList.add('expanded');
                this.style.transform = 'scale(1.5)';
                this.style.position = 'relative';
                this.style.zIndex = '1000';
            }
        });
    });

    // ==========================================
    // 16. CTA BUTTON BREATHE ANIMATION
    // ==========================================

    const ctaButtons = document.querySelectorAll('[href="#contacto"]');
    ctaButtons.forEach(btn => {
        setTimeout(() => {
            btn.classList.add('breathe-animation');
        }, 2000);

        btn.addEventListener('mouseenter', function () {
            this.classList.remove('breathe-animation');
        });
    });

    // ==========================================
    // 17. SECTION BADGES WITH NEON TRAIL
    // ==========================================

    document.querySelectorAll('.badge-sierra, .badge-costa').forEach(badge => {
        badge.classList.add('neon-trail');
    });

    console.log('✨ PREUFUNDEL Premium Effects Loaded');
});
