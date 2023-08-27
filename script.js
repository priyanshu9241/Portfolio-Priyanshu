const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const overlay = document.querySelector(".overlay");
const contactForm = document.querySelector(".contact-form");

hamburger.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
  hamburger.classList.toggle("active");
  overlay.classList.toggle("active");
});

function closeMobileNav() {
  mobileNav.classList.remove("active");
  hamburger.classList.remove("active");
  overlay.classList.remove("active");
}

overlay.addEventListener("click", closeMobileNav);

contactForm.addEventListener("submit", (event) => {
  // event.preventDefault();
  alert("your response has been successfully submitted");
});

var typeData = new Typed(".role", {
  strings: [
    "Web Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "Coder",
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1000,
});

//DARK-MODE

var darkModeToggle = document.getElementById("dark-mode-toggle");
var darkModeToggleMob = document.getElementById("dark-mode-toggle-mob");
var logo = document.getElementById("logo");
var logoText = document.getElementById("logo-text");
var hero = document.getElementById("hero");

// Dark-Mode-Toggle-Large-Screens

darkModeToggle.onclick = function () {
  document.body.classList.toggle("theme");
  document.body.classList.toggle("name");
  document.body.classList.toggle("logo-text");
  if (document.body.classList.contains("theme")) {
    darkModeToggle.src = "images/userAsset/sun.png";
    logo.src = "images/userAsset/NavLogoB.png";
    hero.src = "images/userAsset/hero-trans.png";
  } else {
    darkModeToggle.src = "images/userAsset/moon.png";
    logo.src = "images/userAsset/NavLogoW.jpg";
    hero.src = "images/userAsset/hero.jpg";
  }
};

// Dark-Mode-Toggle-Mobile
darkModeToggleMob.onclick = function () {
  document.body.classList.toggle("theme");
  document.body.classList.toggle("name");
  document.body.classList.toggle("logo-text");
  if (document.body.classList.contains("theme")) {
    darkModeToggleMob.src = "images/userAsset/sun.png";
    logo.src = "images/userAsset/NavLogoB.png";
    hero.src = "images/userAsset/hero-trans.png";
  } else {
    darkModeToggleMob.src = "images/userAsset/moon.png";
    logo.src = "images/userAsset/NavLogoW.jpg";
    hero.src = "images/userAsset/hero.jpg";
  }
};
