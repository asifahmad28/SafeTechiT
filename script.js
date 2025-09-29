document.getElementById("year").textContent = new Date().getFullYear();

const navToggle = document.getElementById("navToggle");
const navMenu = document.querySelector(".main-nav");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
