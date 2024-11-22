// Select the navbar
const navbar = document.querySelector('.navbar');

// Change navbar background color when scrolling
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
