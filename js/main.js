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

    // Images on hover change
    const pictureChange = (imgSelector) => {
        const images = document.querySelectorAll(imgSelector);

        function showImage(images) {
            images.src = images.src.slice(0, -4) + '-nt.png';
        }

        function hideImage(images) {
            images.src = images.src.slice(0, -7) + '.jpg';
        }

        images.forEach(img => {
            img.addEventListener('mouseover', () => {
                showImage(img);
            });

            img.addEventListener('mouseout', () => {
                hideImage(img);
            });
        })

    };

    pictureChange('.card__image');

});