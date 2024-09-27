let hamBtn = document.getElementsByClassName('ham-btn');
let menu = document.getElementsByClassName('open-menu');
let openHamBtn = hamBtn.addEventListener('click', openMenu());
let closeHamBtn = hamBtn.addEventListener('click', closeMenu());

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
