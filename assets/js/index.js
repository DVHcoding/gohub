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



/**
 * Search detail left
 */

const inputLeft = document.querySelector("[data-input-left]");
const inputRight = document.querySelector("[data-input-right]");
const searchDetailLeft = document.querySelector("[data-search-detail-left]");
const searchDetailRight = document.querySelector("[data-search-detail-right]");

const searchDetailCountry = document.querySelectorAll("[data-country]");
const searchDetailDay = document.querySelectorAll("[data-day]");

const overlayInput = document.querySelector("[data-overlay-input]");

// When focus input 
inputLeft.addEventListener("focus", function () {
    searchDetailLeft.style.display = "block";
    overlayInput.classList.add("active");
})

inputRight.addEventListener("focus", function () {
    searchDetailRight.style.display = "block";
    overlayInput.classList.add("active");
})

// When click country
searchDetailCountry.forEach(function (country) {
    country.addEventListener("click", function () {
        inputLeft.value = this.textContent;
        searchDetailLeft.style.display = "none";
        overlayInput.classList.remove("active");
    });
});

// When click day
searchDetailDay.forEach(function (day) {
    day.addEventListener("click", function () {
        inputRight.value = this.textContent;
        searchDetailRight.style.display = "none";
        overlayInput.classList.remove("active");
    });
});

// When blur input
overlayInput.addEventListener("click", function () {
    searchDetailLeft.style.display = "none";
    searchDetailRight.style.display = "none";
    overlayInput.classList.remove("active");
})








