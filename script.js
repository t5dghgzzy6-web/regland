// Modal logic for Sign Up and Book a Demo
const signupModal = document.getElementById('signup-modal');
const demoModal = document.getElementById('demo-modal');
const openSignupBtn = document.getElementById('open-signup');
const openDemoBtn = document.getElementById('open-demo');
const closeSignupBtn = document.getElementById('close-signup');
const closeDemoBtn = document.getElementById('close-demo');

if (openSignupBtn) {
    openSignupBtn.onclick = () => { signupModal.style.display = 'block'; };
}
if (openDemoBtn) {
    openDemoBtn.onclick = () => { demoModal.style.display = 'block'; };
}
if (closeSignupBtn) {
    closeSignupBtn.onclick = () => { signupModal.style.display = 'none'; };
}
if (closeDemoBtn) {
    closeDemoBtn.onclick = () => { demoModal.style.display = 'none'; };
}
window.onclick = function(event) {
    if (event.target === signupModal) signupModal.style.display = 'none';
    if (event.target === demoModal) demoModal.style.display = 'none';
};
// Sign In Form Submission
const signinForm = document.getElementById('signin-form');
if (signinForm) {
    signinForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        const email = document.getElementById('signin-email').value;
        const password = document.getElementById('signin-password').value;
        const messageDiv = document.getElementById('signin-message');
        messageDiv.textContent = '';
        try {
            const response = await fetch('http://localhost:5001/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            if (response.ok) {
                messageDiv.textContent = 'Sign in successful!';
                messageDiv.style.color = 'green';
            } else {
                messageDiv.textContent = data.message || 'Sign in failed.';
                messageDiv.style.color = 'red';
            }
        } catch (err) {
            messageDiv.textContent = 'Error connecting to server.';
            messageDiv.style.color = 'red';
        }
    });
}
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

// Sign Up Form Submission
const signupForm = document.getElementById('signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        const name = document.getElementById('signup-name').value;
        const organisation = document.getElementById('signup-organisation').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const messageDiv = document.getElementById('signup-message');
        messageDiv.textContent = '';
        try {
            const response = await fetch('http://localhost:5001/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, organisation, email, password })
            });
            const data = await response.json();
            if (response.ok) {
                messageDiv.textContent = 'Sign up successful!';
                messageDiv.style.color = 'green';
            } else {
                messageDiv.textContent = data.message || 'Sign up failed.';
                messageDiv.style.color = 'red';
            }
        } catch (err) {
            messageDiv.textContent = 'Error connecting to server.';
            messageDiv.style.color = 'red';
        }
    });
}

// Book a Demo Form Submission
const demoForm = document.getElementById('demo-form');
if (demoForm) {
    demoForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        const name = document.getElementById('demo-name').value;
        const organisation = document.getElementById('demo-organisation').value;
        const email = document.getElementById('demo-email').value;
        const date = document.getElementById('demo-date').value;
        const messageDiv = document.getElementById('demo-message');
        messageDiv.textContent = '';
        try {
            const response = await fetch('http://localhost:5001/api/book-demo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, organisation, email, date })
            });
            const data = await response.json();
            if (response.ok) {
                messageDiv.textContent = 'Demo booked! We’ll confirm by email.';
                messageDiv.style.color = 'green';
            } else {
                messageDiv.textContent = data.message || 'Booking failed.';
                messageDiv.style.color = 'red';
            }
        } catch (err) {
            messageDiv.textContent = 'Error connecting to server.';
            messageDiv.style.color = 'red';
        }
    });
}

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
