document.addEventListener('DOMContentLoaded', () => {
    const plusBtn = document.querySelectorAll('.plus-btn');
    const dropdownMenu = document.querySelector('#dropdownBtn');

    dropdownMenu.style.display = 'none';

    plusBtn.forEach(eventListener);

    plusBtn.addEventListener('click', () => {
        if (dropdownMenu.style.display = 'none') {
            dropdownMenu.style.display = 'block';
            plusBtn.style.display = 'block';
        }
        else {
            dropdownMenu.style.display = 'none';
        }

    });


});

