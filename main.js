const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav__list')

hamburger.addEventListener('click', mobileMenu)

function mobileMenu() {
  hamburger.classList.toggle('active')
  navMenu.classList.toggle('active')
}

const navLink = documen.querySelectorAll('.nav__link')
navLink.forEach((n) => n.addEventListener('click', closeMenu))
function closeMenu() {
  hamburger.classList.remove('active')
  navMenu.classList.remove('active')
}
