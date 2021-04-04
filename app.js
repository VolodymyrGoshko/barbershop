const navToggle = document.querySelector('.nav-toggle');
const headerInner = document.querySelector('.header-inner');
const nav = document.querySelector('.nav');

navToggle.addEventListener("click", () => {
    nav.classList.toggle('open')
    headerInner.classList.toggle('opened')
})
