document.addEventListener("DOMContentLoaded", () => {
    // Animation on scroll for cards
    AOS.init();

    // Progress-bar on scroll
    const progressBar = document.querySelector('.progress-bar');

    window.addEventListener('scroll', () => {
        
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const percentage = winScroll / winHeight * 100;
        
        progressBar.style.width = percentage + '%';

    });

});