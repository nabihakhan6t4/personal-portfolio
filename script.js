const navLinks = document.querySelectorAll("header nav a");
const logoLink = document.querySelector(".logo");
const sections = document.querySelectorAll("section"); // ✅ Yahan ghalati theek ki hai
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector("header nav");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
});

const activePage = () => {
  const barsBox = document.querySelector(".bars-box");
  const header = document.querySelector("header");

  // Header ki animation
  header.classList.remove("active");
  setTimeout(() => {
    header.classList.add("active");
  }, 1100);

  // Bars ki animation
  barsBox.classList.remove("active");
  setTimeout(() => {
    barsBox.classList.add("active");
  }, 1100);

  // Sections ko yahan se remove karo, neeche navLinks loop mein manage karenge
  // sections.forEach((section) => { // ❌ Yeh line remove kar do
  //   section.classList.remove("active"); // ❌ Yeh line remove kar do
  // }); // ❌ Yeh line remove kar do
};

navLinks.forEach((link, index) => {
  link.addEventListener("click", (e) => {
    // ✅ e event object access kiya
    e.preventDefault(); // ✅ Page reload rokne ke liye

    if (!link.classList.contains("active")) {
      // Pehle saare links aur sections se active class hatao
      navLinks.forEach((navLink) => {
        navLink.classList.remove("active");
      });
      sections.forEach((section) => {
        section.classList.remove("active");
      });

      // activePage animations trigger karo
      activePage();

      // Current link ko active karo
      link.classList.add("active");

      // Section ko active karo animation delay ke baad
      setTimeout(() => {
        sections[index].classList.add("active");
      }, 1600); // ✅ Section CSS mein 1.6s delay hai, isko match karein
    }
  });
});

logoLink.addEventListener("click", (e) => {
  // ✅ e event object access kiya
  e.preventDefault(); // ✅ Page reload rokne ke liye

  if (!navLinks[0].classList.contains("active")) {
    // Pehle saare links aur sections se active class hatao
    navLinks.forEach((navLink) => {
      navLink.classList.remove("active");
    });
    sections.forEach((section) => {
      section.classList.remove("active");
    });

    activePage(); // Animations trigger karo

    // Home link ko active karo
    navLinks[0].classList.add("active");

    // Home section ko active karo animation delay ke baad
    setTimeout(() => {
      sections[0].classList.add("active");
    }, 1600); // ✅ Section CSS mein 1.6s delay hai, isko match karein
  }
});

const resumeBtns = document.querySelectorAll(".resume-btn");
resumeBtns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    const resumeDetails = document.querySelectorAll(".resume-detail");
    resumeBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");
    resumeDetails.forEach((detail) => {
      detail.classList.remove("active");
    });
    resumeDetails[idx].classList.add("active");
  });
});

const arrowRight = document.querySelector(
  ".portfolio-box .navigation .arrow-right"
);
const arrowLeft = document.querySelector(
  ".portfolio-box .navigation .arrow-left"
);
let index = 0;
const imgSlide = document.querySelector(".portfolio-crousel .img-slide");
const totalImages = imgSlide.querySelectorAll(".img-item").length;

const activePortfolio = () => {
  imgSlide.style.transform = `translateX(calc(${index * -100}% - ${
    index * 2
  }rem))`;
  const portfolioDetails = document.querySelectorAll(".portfolio-detail");

  portfolioDetails.forEach((detail) => {
    detail.classList.remove("active");
  });

  portfolioDetails[index].classList.add("active");
};

arrowRight.addEventListener("click", () => {
  if (index < totalImages - 1) {
    index++;
    arrowLeft.classList.remove("disabled");
  }
  if (index === totalImages - 1) {
    arrowRight.classList.add("disabled");
  }
  activePortfolio();
});

arrowLeft.addEventListener("click", () => {
  if (index > 0) {
    index--;
    arrowRight.classList.remove("disabled");
  }
  if (index === 0) {
    arrowLeft.classList.add("disabled");
  }
  activePortfolio();
});
