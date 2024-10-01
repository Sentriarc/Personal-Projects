document.addEventListener('DOMContentLoaded', () => {
    const plusBtn = document.querySelector('.plus-btn');
    const dropdownMenu = document.querySelector('#dropdownBtn');

    dropdownMenu.style.display = 'none';

    plusBtn.addEventListener('click', () => {
        if (dropdownMenu.style.display = 'none') {
            dropdownMenu.style.display = 'block';
            plusBtn.style.display = 'block';
        }
    });


});

