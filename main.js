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
  const Links = document.querySelectorAll(".nav_link");

  const linkAnimation = () => {
    const navMenu = document.querySelector("#nav-menu");

    navMenu.classList.remove("show-menu");
  };
  Links.forEach((link) => link.addEventListener("click", linkAnimation));
};
removeMenu();

const blurHeader = () => {
  const scrollHeader = () => {
    const header = document.querySelector("#header");

    this.scrollY >= 50
      ? header.classList.add("blur-header")
      : header.classList.remove("blur-header");
  };
  window.addEventListener("scroll", scrollHeader);
};
blurHeader();

let swiperFav = new Swiper(".favorite_swiper", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: "auto",
  grabCursor: true,

  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  },
});

