const footerDate = document.getElementById("currentYear");

let d = new Date();
const currentYear = d.getFullYear();
footerDate.textContent = currentYear;
