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

// const loader = document.querySelector('.loaders')
// setTimeout(() => {
//   loader.style.display = 'none'
// }, 2000)




