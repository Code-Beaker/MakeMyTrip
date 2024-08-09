import menuOpen from "./img/compressed/menu_26dp_FFF_FILL0_wght400_GRAD0_opsz24.svg";
import menuClose from "./img/compressed/close_26dp_FFF_FILL0_wght400_GRAD0_opsz24.svg";

// Footer year
const footerDate = document.getElementById("currentYear");

let d = new Date();
const currentYear = d.getFullYear();
footerDate.textContent = currentYear;

const NavToggleBtn = document.getElementById("navToggleButton");
const NavBarLinks = document.getElementById("navLinksWrapper");
const navigationToggleIcon = document.querySelector(".nav__toggle-btn--icon");
const form = document.querySelector(".form");
let hidden = true;

NavToggleBtn.addEventListener("click", () => {
  if (hidden) {
    NavBarLinks.classList.add("nav-links-show");
    NavToggleBtn.classList.add("rotate");
    navigationToggleIcon.setAttribute("src", menuClose);
    hidden = false;
  } else {
    NavBarLinks.classList.remove("nav-links-show");
    NavToggleBtn.classList.remove("rotate");
    navigationToggleIcon.setAttribute("src", menuOpen);
    hidden = true;
  }
});

const thanksEl = document.querySelector(".thanks");

// FORM
form.addEventListener("submit", (e) => {
  e.preventDefault();
  thanksEl.classList.add("thanks-show");
});
