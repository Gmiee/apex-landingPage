document.addEventListener('DOMContentLoaded', function () {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const navMenu = document.querySelector('.nv');

    hamburgerIcon.addEventListener('click', function () {
        navMenu.classList.toggle('show-menu');
    });
});
