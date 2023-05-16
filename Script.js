// Define the menu, open button, and close button using their respective ids
let menu = document.getElementById("nav");
let open = document.getElementById("menu-btn");
let close = document.getElementById("close");

let slideIndex = 0;
// Function to open the menu. It helps the menu to move to the left side of the screen.
function openmenu() {
  menu.style.left = "0";
  open.style.display = "none";
  close.style.display = "block";
  document.querySelector(".slideshow-container").style.display = "none"; // Add this line to hide the slideshow
}

// Function to close the menu. It helps the menu to move menu outside of the screen.
function closemenu() {
  menu.style.left = "-100%";
  open.style.display = "block";
  close.style.display = "none";
}

// nav bg color change
function change() {
  var nav = document.getElementById("navbar");
  var value = window.scrollY; // Get the amount the user has scrolled
  if (value > 80) { // If the user has scrolled more than 80 pixels, apply background color changes or else remove them
    nav.classList.add("nav-change");
  } else {
    nav.classList.remove("nav-change");
  }
}
// Add an event listener to the window to call the change function when the user scrolls
window.addEventListener("scroll", change);

/* Slideshow */
function showSlides() {
  const slides = document.getElementsByClassName("slideshow-slide");

  if (slides.length > 0 && window.location.pathname.includes("shop.html")) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
  }

  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

showSlides();
