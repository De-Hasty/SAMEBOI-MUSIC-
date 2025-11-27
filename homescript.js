// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

menuBtn?.addEventListener('click', () => {
    const isOpen = nav.style.display === 'flex';
    nav.style.display = isOpen ? 'none' : 'flex';
    menuBtn.setAttribute('aria-expanded', String(!isOpen));
});

// Only one audio plays at a time
document.addEventListener('play', e => {
    document.querySelectorAll('audio').forEach(a => {
        if (a !== e.target) a.pause();
    });
}, true);

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const href = a.getAttribute('href');
        if (href.length > 1) {
            e.preventDefault();
            document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Keyboard menu toggle
menuBtn?.addEventListener('keyup', e => { if (e.key === 'Enter') menuBtn.click(); });
