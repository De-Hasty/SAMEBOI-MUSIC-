// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

menuBtn?.addEventListener('click', () => {
    const isOpen = nav.style.display === 'flex';
    nav.style.display = isOpen ? 'none' : 'flex';
    menuBtn.setAttribute('aria-expanded', String(!isOpen));
});




// Keyboard menu toggle
menuBtn?.addEventListener('keyup', e => { if (e.key === 'Enter') menuBtn.click(); });


function showSection(sectionId) {
    // hide all
    const sections =
        document.querySelectorAll('.page').forEach(section => {
            section.classList.remove('active');
        });

    // show selected
    const activesection =
        document.getElementById(sectionId).classList.add('active');
}
// show HOME by defualt

window.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});