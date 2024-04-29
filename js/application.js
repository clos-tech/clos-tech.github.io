// This is where it all goes :)

const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const anchorLinks = document.querySelectorAll(".anchor-link");
const iconClose = document.querySelector(".icon-close");
const iconBurger = document.querySelector(".icon-burger");


function toggleNav() {
  primaryNav.toggleAttribute("data-visible");
  iconBurger.classList.toggle("display-none");
  iconClose.classList.toggle("display-none");
  primaryNav.hasAttribute("data-visible")
    ? mobileNavToggle.setAttribute("aria-expanded", true)
    : mobileNavToggle.setAttribute("aria-expanded", false);
}

mobileNavToggle.addEventListener("click", toggleNav);
anchorLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    toggleNav();
    window.location = e.target.href;
  });
});
