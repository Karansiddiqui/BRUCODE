const currentPage = window.location.pathname.split("/").pop();

// Select all nav links
const navLinks = document.querySelectorAll(".nav-link");

// Loop through each link and add the active class if it matches the current page
console.log(currentPage);
navLinks.forEach((link) => {
  const linkPage = link.getAttribute("href");
  console.log(linkPage);

  link.classList.remove("active");
  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});
