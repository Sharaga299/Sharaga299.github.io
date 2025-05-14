document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;
    function showSlide(index) {
        carouselContainer.style.transform = `translateX(-${index * 100}%)`;
    }
    setInterval(() => {
        currentIndex = (currentIndex + 1) % items.length;
        showSlide(currentIndex);
    }, 5000);
});