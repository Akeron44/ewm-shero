// MENU
const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".close-menu");
const nav = document.querySelector(".header nav ul");

function toggleMenu() {
  if (nav.classList.contains("show-nav")) {
    nav.classList.remove("show-nav");
    closeMenu.style.display = "none";
  } else {
    nav.classList.add("show-nav");
    closeMenu.style.display = "block";
  }
}
menu.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu);

// SEARCH BAR

const searchBox = document.querySelector(".search-box");
const searchIcon = document.getElementById("search-image");

searchIcon.addEventListener("click", () => {
  if (!searchBox.classList.contains("grow")) {
    searchBox.classList.add("grow");
  } else {
    // Build search function ...
  }
});

document.addEventListener("click", (event) => {
  if (event.target.id !== "search" && event.target.id !== "search-image") {
    searchBox.classList.remove("grow");
  }
});
// CAROUSEL
let carousel = document.querySelector(".carousel-items");
let arrowButtons = document.querySelectorAll(".wrapper .icon");

const ulWidth = document.querySelector(".wrapper .carousel-items").offsetWidth;
const carouselItems = document.querySelectorAll(".wrapper .carousel-items li");

// // Add event listeners for buttons to scroll left and right;
arrowButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id === "left" ? -ulWidth : ulWidth;
  });
});

// FOOTER

const cardHeaders = document.querySelectorAll(".card-header");
const footerEl = document.querySelectorAll(".info-container");

cardHeaders.forEach((chEl) => {
  chEl.addEventListener("click", () => {
    for (let i = 0; i < footerEl.length; i++) {
      if (
        footerEl[i].classList.contains(chEl.id) &&
        !footerEl[i].classList.contains("showInfo")
      ) {
        footerEl[i].classList.add("showInfo");
      } else {
        footerEl[i].classList.remove("showInfo");
      }
    }
  });
});