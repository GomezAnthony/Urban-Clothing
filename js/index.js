// Animationf for the mobile navbar
const menu = document.querySelector('.menu');
const openNav = document.querySelector('.hamburger');
const closeNav = document.querySelector('.close');
const navBar = document.querySelector('.nav');

const leftNav = menu.getBoundingClientRect().left;

openNav.addEventListener('click', () => {
    if (leftNav < 0) {
        menu.classList.add('show');
        document.body.classList.add('show');
        navBar.classList.add('show')
    }

});

closeNav.addEventListener('click', () => {
    if (leftNav < 0) {
        menu.classList.remove('show');
        document.body.classList.remove('show');
        navBar.classList.remove('show')
    }

});

// Animation for the fixed navbar
const navBarHeight = navBar.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > navBarHeight) {
        navBar.classList.add('fix-nav');
    } else {
        navBar.classList.remove('fix-nav');
    }
})