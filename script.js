let menu = document.querySelector('.menu')
let hamburger = document.querySelector('.hamburger')
let toggleMenu = document.querySelector('.toggle-menu')
let checkMenu = false

const displayMenuHamburger = () => {
  if (checkMenu === false) {
    toggleMenu.style.display = "block"
    checkMenu = true
  } else {
    toggleMenu.style.display = "none"
    checkMenu = false
  }
}

hamburger.addEventListener('click', displayMenuHamburger)