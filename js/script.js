// toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika humberger menu diklik
document.querySelector("#cafe-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Klik diluar sidebar untuk meenghilangkan nav

const hamburger = document.querySelector("#cafe-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
