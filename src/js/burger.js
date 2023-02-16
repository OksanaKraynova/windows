const menu = document.querySelector('.header__menu')
const burger  = document.querySelector('.header__burger')

burger.addEventListener('click', () => {
    menu.classList.toggle('active')
    burger.classList.toggle('active')
})