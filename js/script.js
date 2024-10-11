let menu = document.querySelector('#menu-icons');
let navlinks = document.querySelector('.nav-links');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlinks.classList.toggle('active');
}