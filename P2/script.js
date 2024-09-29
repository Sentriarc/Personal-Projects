document.addEventListener('DOMContentLoaded', () => {
    const hamBtn = document.querySelector('.ham-btn');
    const menu = document.querySelector('.menu');
    const xBtn = document.querySelector('.x-button');

    menu.style.display = 'none';
    xBtn.style.display = 'none';

    hamBtn.addEventListener('click', () => {
        if (menu.style.display === 'none') {
            hamBtn.style.display = 'none';
            menu.style.display = 'block';
            xBtn.style.display = 'block';
        }
    });

    xBtn.addEventListener('click', () => {
        if (xBtn.style.display === 'block') {
            menu.style.display === 'none';
        }
    });
});