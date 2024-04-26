const show = document.querySelector(".show");
const hide = document.querySelector(".sing-up");
const icon = document.querySelector("#close");
const showSingUp = document.querySelector(".showSingUp");

let isVisible = false;
show.addEventListener("click", () => {
  isVisible = true;
  hide.style.display = "block";
});

icon.addEventListener("click", () => {
  isVisible = false;
  hide.style.display = "none";
});
showSingUp.addEventListener("click", () => {
  isVisible = true;
  hide.style.display = "block";
  Login.style.display = "none";
});

// Login

const Login = document.querySelector(".login");
const showLogin = document.querySelector(".show-login");
const iconClose = document.querySelector("#close1");
let visible = false;

showLogin.addEventListener("click", () => {
  visible = true;
  Login.style.display = "block";
});

iconClose.addEventListener("click", () => {
  visible = false;
  Login.style.display = "none";
});

// Slider Swiper

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#thumbnail-carousel", {
    fixedWidth: 100,
    gap: 360,
    rewind: true,
    pagination: false,
  }).mount();
});

// responsive

const bar = document.querySelector(".bar");
const close = document.querySelector(".close");
const nav = document.querySelector("nav");

let showMenu = false;

bar.addEventListener("click", () => {
  showMenu = true;
  nav.style.right = "0";
  close.style.display = "block";
});

close.addEventListener("click", () => {
  showMenu = false;
  nav.style.right = "-100%";
  close.style.display = "none";
});
