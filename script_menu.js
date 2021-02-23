'use strict'

let brand_overlay = document.querySelector('.brand_overlay');
let menu_icon = document.querySelector('.menu_icon');
let cancel_menu = document.querySelector('.cancel_menu');

function toggleMenu() {
    brand_overlay.classList.toggle('hidden');
}
menu_icon.addEventListener('click', toggleMenu);
cancel_menu.addEventListener('click', toggleMenu);