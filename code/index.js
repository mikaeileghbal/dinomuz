window.addEventListener("DOMContentLoaded", function (e) {
  const menuIcon = document.querySelector(".menu-icon");
  menuIcon.addEventListener("click", function (e) {
    menuIcon.classList.toggle("open");
    document.querySelector("nav").classList.toggle("active");
  });
});
