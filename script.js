const openMenu = document.getElementsByClassName('open-menu');
const closeMenu = document.getElementsByClassName('close-menu');

closeMenu.addEventListener('click', () => {
    if (closeMenu.style.display === 'block'){
        closeMenu.style.display = 'none'
    }
})
