document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const notification = document.getElementById('notification');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        notification.textContent = 'Сообщение отправлено! Мы свяжемся с вами скоро.';
        notification.style.display = 'block';
        contactForm.reset();
        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
    });
});