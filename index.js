
const btn_menu = document.querySelector('.menu-toggle')
const menu = document.querySelector('#menu')


btn_menu.addEventListener('click' , (e) => {

    menu.classList.toggle('inactive');
})