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
