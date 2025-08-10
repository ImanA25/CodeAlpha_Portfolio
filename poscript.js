// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in animation to elements when they come into view
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    // Initialize fade-in elements
    fadeElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        observer.observe(element);
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission handling
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (name && email && subject && message) {
                // In a real application, you would send this data to a server
                alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);
                contactForm.reset();
            } else {
                alert('Please fill in all fields before submitting.');
            }
        });
    }
});