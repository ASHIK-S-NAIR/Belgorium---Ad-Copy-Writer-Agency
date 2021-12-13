var nav_toggle_section = document.querySelector(".nav-toggle-section");
var nav_toggle1 = document.querySelector(".nav-toggle1");
var nav_toggle2 = document.querySelector(".nav-toggle2");
var nav_toggle3 = document.querySelector(".nav-toggle3");
var nav = document.querySelector("nav");
var nav_a = document.querySelectorAll(".nav-a");

nav_toggle_section.addEventListener("click", () => {
  nav_toggle1.classList.toggle("active");
  nav_toggle2.classList.toggle("active");
  nav_toggle3.classList.toggle("active");
  nav.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (e.target.closest(".nav-li")) {
    nav_toggle1.classList.toggle("active");
    nav_toggle2.classList.toggle("active");
    nav_toggle3.classList.toggle("active");
    nav.classList.toggle("active");
  }
});
