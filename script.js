// Simple smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Optional: Add a hover effect for sections
document.querySelectorAll('.section').forEach(section => {
    section.addEventListener('mouseover', () => {
        section.style.transform = 'scale(1.02)';
        section.style.transition = 'transform 0.3s ease';
    });
    section.addEventListener('mouseout', () => {
        section.style.transform = 'scale(1)';
    });
});
