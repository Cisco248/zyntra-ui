function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
