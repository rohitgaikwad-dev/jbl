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

const scroll = () => {
  const scrollUp = () => {
    const scrollUp = document.querySelector("#scroll-up");
    this.scrollY >= 350
      ? scrollUp.classList.add("show-scroll")
      : scrollUp.classList.remove("show-scroll");
  };
  window.addEventListener("scroll", scrollUp);
};
scroll();

const activeLink = () => {
  const sections = document.querySelectorAll("section[id]");

  const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 58;
      const sectionId = section.getAttribute("id");
      const sectionsClass = document.querySelector(
        ".nav_menu a[href*=" + sectionId + "]"
      );

      if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
        sectionsClass.classList.add("active-link");
      } else {
        sectionsClass.classList.remove("active-link");
      }
    });
  };
  window.addEventListener("scroll", scrollActive);
};
activeLink();

const homeAnimation = () => {
  let tl = gsap.timeline();

  tl.to(
    ".home_social",
    {
      opacity: 1,
      top: "100px",
      delay: 0.4,
      ease: "Expo.easeInOut",
    },
    "a"
  );
  tl.from(
    ".home_title span:nth-child(1)",
    {
      left: "-15%",
      ease: "Expo.easeInOut",
      duration: 2.5,
    },
    "a"
  );
  tl.from(
    ".home_title span:nth-child(3)",
    {
      right: "-15%",
      ease: "Expo.easeInOut",
      duration: 2.5,
    },
    "a"
  );
  tl.from(
    ".home_tooltip",
    {
      transform: "translateY(100px)",
      opacity: "0",
      ease: "Expo.easeInOut",
      duration: 2.5,
    },
    "a"
  );
};
homeAnimation();

const aboutAnimation = () => {
  gsap.from(".about_data", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 60%",
    },
    transform: "translateX(-100px)",
    opacity: "0",
    ease: "Expo.easeInOut",
    duration: 1.5,
  });
  gsap.from(".about_img", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 60%",
    },
    transform: "translateX(100px)",
    opacity: "0",
    ease: "Expo.easeInOut",
    duration: 1.5,
  });
};
aboutAnimation();

const favAnimation = () => {
  gsap.from(".favorite_container", {
    scrollTrigger: {
      trigger: "#favorite",
      start: "top 35%",
    },
    opacity: 1,
    top: "-100px",
    opacity: 0,
    ease: "Expo.easeInOut",
    duration: 1.5,
  });
};
favAnimation();

const modelAnimation = () => {
  gsap.from(".model_tooltip-1", {
    scrollTrigger: {
      trigger: "#model",
      start: "top 50%",
    },
    opacity: 1,
    left: "-60px",
    opacity: 0,
    ease: "Expo.easeInOut",
    duration: 1.5,
  });
  gsap.from(".model_tooltip-3", {
    scrollTrigger: {
      trigger: "#model",
      start: "top 35%",
    },
    opacity: 1,
    left: "-60px",
    opacity: 0,
    ease: "Expo.easeInOut",
    duration: 1.5,
  });
  gsap.from(".model_tooltip-2", {
    scrollTrigger: {
      trigger: "#model",
      start: "top 35%",
    },
    opacity: 1,
    right: "-60px",
    opacity: 0,
    ease: "Expo.easeInOut",
    duration: 1.5,
  });
  gsap.from(".model_tooltip-4", {
    scrollTrigger: {
      trigger: "#model",
      start: "top 35%",
    },
    opacity: 1,
    right: "-60px",
    opacity: 0,
    ease: "Expo.easeInOut",
    duration: 1.5,
  });
  gsap.from(".model_button", {
    scrollTrigger: {
      trigger: "#model",
      start: "top 35%",
    },
    opacity: 1,
    bottom: "-60px",
    opacity: 0,
    ease: "Expo.easeInOut",
    duration: 1.5,
  });
};
modelAnimation();

const sponsorAnimation =()=>{
  gsap.from(".sponsor_container", {
    scrollTrigger: {
      trigger: "#sponsor",
      start: "top 90%",
    },
    opacity: 1,
    top: "-100px",
    opacity: 0,
    ease: "Expo.easeInOut",
    duration: 1.5,
  });
}
sponsorAnimation();

const footerAnimation = ()=>{
  gsap.from(".footer_container", {
    scrollTrigger: {
      trigger: "#sponsor",
      start: "top 90%",
    },
    opacity: 1,
    top: "-100px",
    opacity: 0,
    ease: "Expo.easeInOut",
    duration: 1.5,
  });
}
footerAnimation();