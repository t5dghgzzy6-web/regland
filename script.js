// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
    } else {
        header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards
document.querySelectorAll('.feature-card, .step, .stat-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Mobile menu toggle (for future implementation)
const mobileMenuToggle = () => {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
};

// Form validation placeholder (for future contact form)
const validateForm = (formData) => {
    const errors = {};
    
    if (!formData.email || !formData.email.includes('@')) {
        errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.name || formData.name.length < 2) {
        errors.name = 'Please enter your name';
    }
    
    return errors;
};

// Analytics event tracking placeholder
const trackEvent = (eventName, eventData) => {
    console.log('Event:', eventName, eventData);
    // Integration with Google Analytics, Mixpanel, etc. goes here
};

// Track CTA clicks
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const buttonText = e.target.textContent;
        trackEvent('cta_click', { button: buttonText });
    });
});

console.log('RegLand™ - Registration Intelligence Platform');
console.log('Version 1.0.0');
