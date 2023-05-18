let btn = document.querySelector('.burger__wrapper')

let nav = document.querySelector('.navigation')

btn.addEventListener('click', () => {
  nav.classList.toggle('navigation_active')
  btn.classList.toggle('burger_open')
})

