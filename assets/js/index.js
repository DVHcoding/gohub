'use strict'

const navbar = document.querySelector("[data-navbar]");
const menuOpen = document.querySelector("[data-menu-open]");
const menuClose = document.querySelector("[data-menu-close]");
const overlay = document.querySelector("[data-overlay]");

const cart = document.querySelector("[data-cart]");
const cartList = document.querySelector("[data-cart-list]");
const cartClose = document.querySelector("[data-cart-close]");

const navElems = [menuOpen, menuClose, overlay];
const cartElems = [cart, cartClose];

for (let i = 0; i < navElems.length; i++) {
    navElems[i].addEventListener("click", function () {
        navbar.classList.toggle("active");
    });
}

for (let i = 0; i < cartElems.length; i++) {
    cartElems[i].addEventListener("click", function () {
        cartList.classList.toggle("active");
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



/**
 * Advertise 
 */

var items = document.querySelectorAll('.advertise-content-item');

// Variable to keep track of the last clicked item's index
var lastClickedIndex = null;

// Function to set an item as active by adding the 'active' class and removing it from other items
function setActive(index) {
    items.forEach(function (item) {
        item.classList.remove('active');
    });
    items[index].classList.add('active');
}

// Add click event listeners to each item
items.forEach(function (item, index) {
    item.addEventListener('click', function () {
        // If an item was clicked before, remove 'active' class from it
        if (lastClickedIndex !== null) {
            items[lastClickedIndex].classList.remove('active');
        }
        // Set the clicked item as active
        setActive(index);
        // Update the last clicked index
        lastClickedIndex = index;
    });
});

// Auto switch to the next item every 3 seconds
var currentIndex = 0;

// Set up an interval to run a function every 3 seconds
setInterval(function () {
    // Set the current item as active
    setActive(currentIndex);
    // Move to the next item, and wrap around to the beginning if necessary
    currentIndex = (currentIndex + 1) % items.length;
}, 3000);



/**
 * Question
 */

const questionItems = document.querySelectorAll("[data-question-item]");

let currentlyOpenItem = null;

questionItems.forEach(function (item) {
    item.addEventListener("click", function () {
        const itemTitle = this.querySelector("[data-question-item-title]");
        const detail = this.querySelector("[data-question-item-detail]");
        const arrow = this.querySelector("[data-arrow]");

        // Close the currently open item
        if (currentlyOpenItem && currentlyOpenItem !== item) {
            const currentTitle = currentlyOpenItem.querySelector("[data-question-item-title]");
            const currentDetail = currentlyOpenItem.querySelector("[data-question-item-detail]");
            const currentArrow = currentlyOpenItem.querySelector("[data-arrow]");

            currentTitle.classList.remove("active");
            currentDetail.classList.remove("active");
            currentArrow.style.transform = "rotate(0deg)";
        }

        // Toggle the active state for the clicked item
        itemTitle.classList.toggle("active");
        detail.classList.toggle("active");
        arrow.style.transform = (arrow.style.transform === "rotate(-180deg)") ? "rotate(0deg)" : "rotate(-180deg)";

        // Update the currently open item
        currentlyOpenItem = (currentlyOpenItem === item) ? null : item;
    });
});


