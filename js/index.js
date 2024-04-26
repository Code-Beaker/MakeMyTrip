// Footer year
const footerDate = document.getElementById("currentYear");

let d = new Date();
const currentYear = d.getFullYear();
footerDate.textContent = currentYear;

const NavToggleBtn = document.getElementById("navToggleButton");
const NavBarLinks = document.getElementById("navLinksWrapper");

NavToggleBtn.addEventListener("click", () => {
  const navbarStyles = NavBarLinks.classList;
  const navToggleStyles = NavToggleBtn.classList;
  navbarStyles.toggle("nav-links-show");
  navToggleStyles.toggle("nav__toggle-btn-focus");
});
