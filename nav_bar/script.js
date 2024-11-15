// Get the current URL path
const currentPath = window.location.pathname;

// Get all navigation links
const navLinks = document.querySelectorAll(".nav-link");

// Loop through links to find and set the active link
navLinks.forEach((link) => {
  if (link.getAttribute("href") === currentPath) {
    link.classList.add("active");
  }
});
