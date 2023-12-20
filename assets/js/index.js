'use strict'

const navbar = document.querySelector("[data-navbar]");
const menuOpen = document.querySelector("[data-menu-open]");
const menuClose = document.querySelector("[data-menu-close]");
const overlay = document.querySelector("[data-overlay]");

const cart = document.querySelector("[data-cart]");
const cartList = document.querySelector("[data-cart-list]");
const cartClose = document.querySelector("[data-cart-close]");

const navElems = [menuOpen, menuClose, overlay];
const cartElems = [cart, cartClose, overlay];

for (let i = 0; i < navElems.length; i++) {
    navElems[i].addEventListener("click", function () {
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
    });
}

for (let i = 0; i < cartElems.length; i++) {
    cartElems[i].addEventListener("click", function () {
        cartList.classList.toggle("active");
        overlay.classList.toggle("active");
    });
}




