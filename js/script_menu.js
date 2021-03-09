'use strict'

let brand_overlay = document.querySelector('.brand_overlay');
let menu_icon = document.querySelector('.menu_icon');
let cancel_menu = document.querySelector('.cancel_menu');
let menu_wrap = document.querySelector('.menu_wrap');

let filterParameters__size = document.querySelector('.filterParameters__size');
let sizeCheckboxFilter = document.querySelector('.sizeCheckboxFilter');
sizeCheckboxFilter.addEventListener('click', function (event) {
    event.stopPropagation();
})

let filterLeft__menu = document.querySelector('.filterLeft__menu');
let filterLeft = document.querySelector('.filterLeft');

function toggleMenu() {
    brand_overlay.classList.toggle('hidden');
}
function toggleMenu() {
    menu_wrap.classList.toggle('hidden');
}

function toggleFilter() {
    filterLeft__menu.classList.toggle('hidden');
}

function toggleCheckbox() {
    sizeCheckboxFilter.classList.toggle('hidden');
}

cancel_menu.addEventListener('click', toggleMenu);
menu_icon.addEventListener('click', toggleMenu);

filterLeft.addEventListener('click', toggleFilter);

filterParameters__size.addEventListener('click', toggleCheckbox);

