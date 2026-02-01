const burger = document.querySelector('.header-burger');
const menu = document.querySelector('.mobilewindow');
const closeBtn = document.querySelector('.mobilewindow-close');
const overlay = document.querySelector('.menu-overlay');

function openMenu() {
  menu.classList.add('active');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  menu.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

burger.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
