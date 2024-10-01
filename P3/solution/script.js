document.addEventListener('DOMContentLoaded', () => {
    const plusBtns = document.querySelectorAll('.plus-btn'); // Select all plus buttons
    const dropdownMenu = document.querySelector('#dropdownBtn'); // Assuming you want one specific dropdown menu

    dropdownMenu.style.display = 'none';  // Initially hide the dropdown

    // Add event listener to each plus button
    plusBtns.forEach(plusBtn => {
        plusBtn.addEventListener('click', () => {
            if (dropdownMenu.style.display === 'none') {
                dropdownMenu.style.display = 'block';  // Show the dropdown
            } else {
                dropdownMenu.style.display = 'none';  // Hide the dropdown
            }
        });
    });
});
