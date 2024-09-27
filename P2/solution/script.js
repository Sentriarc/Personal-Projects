// script.js
document.addEventListener("DOMContentLoaded", () => {
    const hamBtn = document.querySelector(".ham-btn");
    const menu = document.querySelector(".menu");

    // Hide the menu initially
    menu.style.display = "none";

    hamBtn.addEventListener("click", () => {
        // Toggle the display of the menu
        if (menu.style.display === "none") {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }
    });
});
