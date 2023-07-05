const humburger = document.querySelector('.humburger');
const menu = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('cancel-btn');
const mobileNav = document.querySelector('.mobile-menu-item');

function displayMobileMenu() {
  if (menu.style.display === 'none') menu.style.display = 'block';
  else menu.style.display = 'none';
}

function hideMobileMenu() {
  if (menu.style.display === 'block') menu.style.display = 'none';
  else menu.style.display = 'block';
}

function hideMenu() {
  menu.style.display = 'none';
}

closeBtn.addEventListener('click', hideMobileMenu);
humburger.addEventListener('click', displayMobileMenu);
mobileNav.addEventListener('click', hideMenu);

const more = document.querySelector('#more');
const hidden = document.querySelector('.hidden');

function showMore() {
  if (hidden.style.display === 'none') hidden.style.display = 'block';
  else hidden.style.display = 'none';
}

function hideMore() {
  if (hidden.style.display === 'block') more.style.display = 'none';
  else (more.style.display = 'block');
}

more.addEventListener('click', showMore);
more.addEventListener('click', hideMore);