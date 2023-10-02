const showMenu = () => {
  const navMenu = document.querySelector("#nav-menu");
  const navToggle = document.querySelector("#nav-toggle");
  const navClose = document.querySelector("#nav-close");

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });
  }

  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }
};
showMenu();

const removeMenu = () => {
  const navLink = document.querySelectorAll(".nav_link");

  const linkAnimation = () => {
    const navMenu = document.querySelector("#nav-menu");

    navMenu.classList.remove("show-menu");
  };
  navLink.forEach((link) => link.addEventListener("click", linkAnimation));
};
removeMenu();
