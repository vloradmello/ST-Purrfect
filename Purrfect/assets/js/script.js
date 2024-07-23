'use strict';
/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navToggler = document.querySelector("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);


const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElemOnScroll);

// script.js
document.addEventListener('DOMContentLoaded', function() {
  var logoutButton = document.getElementById('logoutButton');
  logoutButton.addEventListener('click', function() {
      // Redirect to the login page
      window.location.href = 'index.html';
  });
});

/* Navigate to Cat Food*/
const catFoodImg = document.querySelector("#cat-food-img");
const navigateToCatFoodPage = function () {
  window.location.href = 'catfood.html';
};
addEventOnElem(catFoodImg, "click", navigateToCatFoodPage);

/*Navigate to Cat Toys*/
const catToysImg = document.querySelector("#cat-toys-img");
const navigateToCatToysPage = function () {
  window.location.href = 'cattoys.html'; 
};
addEventOnElem(catToysImg, "click", navigateToCatToysPage);

/*Navigate to Dog Food */
const dogFoodImg = document.querySelector("#dog-food-img");
const navigateToDogFoodPage = function () {
  window.location.href = 'dogfood.html'; 
};
addEventOnElem(dogFoodImg, "click", navigateToDogFoodPage);

/*Navigate to Dog Toys */
const dogToysImg = document.querySelector("#dog-toys-img");
const navigateToDogToysPage = function () {
  window.location.href = 'dogtoys.html'; 
};
addEventOnElem(dogToysImg, "click", navigateToDogToysPage);

/*Navigate to Dog Supplements page */
const dogSupplementsImg = document.querySelector("#dog-supplements-img");
const navigateToDogSupplementsPage = function () {
  window.location.href = 'dsupplement.html'; 
};
addEventOnElem(dogSupplementsImg, "click", navigateToDogSupplementsPage);

