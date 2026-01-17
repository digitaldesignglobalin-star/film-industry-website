const menuToggle = document.getElementById("menuToggle");
const sideNav = document.getElementById("sideNav");
const overlay = document.getElementById("offcanvasOverlay");
const closeNav = document.getElementById("closeNav");

menuToggle.addEventListener("click", () => {
  sideNav.classList.add("active");
  overlay.classList.add("active");
  menuToggle.classList.add("active");
  document.body.style.overflow = "hidden";
});

closeNav.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

function closeMenu() {
  sideNav.classList.remove("active");
  overlay.classList.remove("active");
  menuToggle.classList.remove("active");
  document.body.style.overflow = "";
}
