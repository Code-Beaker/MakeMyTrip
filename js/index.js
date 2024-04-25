// Footer year
const footerDate = document.getElementById("currentYear");

let d = new Date();
const currentYear = d.getFullYear();
footerDate.textContent = currentYear;

// For active links
let activeLink = document.querySelector(".active");

activeLink.addEventListener("click", () => {
  alert("You're already there!");
});

const NavToggleBtn = document.getElementById("navToggleButton");
const NavBarLinks = document.getElementById("navLinksWrapper");

NavToggleBtn.addEventListener("click", () => {
  const navbarStyles = NavBarLinks.classList;
  const navToggleStyles = NavToggleBtn.classList;
  navbarStyles.toggle("nav-links-show");
  navToggleStyles.toggle("nav__toggle-btn-focus");
});
