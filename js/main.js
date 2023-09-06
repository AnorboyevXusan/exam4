const loader = document.querySelector('.loaders')
setTimeout(() => {
  loader.style.display = 'none'
}, 2000)

window.addEventListener("scroll", function () {
  toggleBacktop();
})

const backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (window.scrollY > 200) {
    backtop.classList.add('backtop-show')
  } else {
    backtop.classList.remove('backtop-show')
  }
}

backtop.addEventListener('click', function () {
  scrollToTop();
})

const scrollToTop = () => {
  window.scrollTo(0, 0)
}

function openNavbar() {
  document.getElementById("navbar-responsive").style.top = "0";
  // document.getElementById("navbar-responsive").style.top = "0";
}
function closeNavbar() {
  document.getElementById("navbar-responsive").style.top = "-100%";
  // document.getElementById("navbar-responsive").style.top = "-100%";
}

document.getElementById("navbar-open").addEventListener("click", openNavbar);
document.getElementById("navbar-close").addEventListener("click", closeNavbar);

window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}


let toggle = document.querySelector("nav .toggle");
let close = document.querySelector(".close");
let menu = document.querySelector(".menu");
let header = document.querySelector("header");
let loginBtn = document.querySelector(".login");
let closeBtn = document.querySelector(".modal-close");
let modal = document.querySelector(".modal");
let modalContent = document.querySelector(".modal-content");

toggle.addEventListener("click", () => {
  menu.classList.toggle("menu-show");
});

close.addEventListener("click", () => {
  menu.classList.remove("menu-show");
});

window.addEventListener("scroll", () => {
  if (scrollY >= 300) {
    header.classList.add("navbar-shrink");
  } else {
    header.classList.remove("navbar-shrink");
  }
});

loginBtn.addEventListener("click", () => {
  modal.classList.add("modal-show");
  modalContent.classList.add("modal-content-show");
});

closeBtn.addEventListener("click", () => closeModal());

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

function closeModal() {
  modal.classList.remove("modal-show");
  modalContent.classList.remove("modal-content-show");
}




