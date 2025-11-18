const carousel = document.getElementById('carousel');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

nextBtn.addEventListener('click', () => {
    carousel.scrollBy({
        left: 280, behavior: 'smooth'
    });
});

prevBtn.addEventListener('click', () => {
    carousel.scrollBy({
        left: -280, behavior: 'smooth'
    });
});