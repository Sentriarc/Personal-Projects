let hamBtn;
hamBtn = document.querySelector('.ham-btn');
let menu = document.querySelector('.open-menu');
const openHamBtn = hamBtn.addEventListener('click', openMenu);
const closeHamBtn = hamBtn.addEventListener('click', closeMenu);

function openMenu() {
    if (openHamBtn = true) {
        menu.style.display = "block";
    }
}

function closeMenu() {
    if (closeHamBtn = true) {
        menu.style.display = "none";
    }
}
