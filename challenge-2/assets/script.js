const menuBurguer = document.querySelector('.menu-burguer');
const lines = document.querySelector('.lines');

menuBurguer.addEventListener('click', () => {
   if (menuBurguer.className === "menu-burguer open") {
        menuBurguer.classList.remove('open');
        menuBurguer.classList.add('close');
    }else {
        menuBurguer.classList.add('open');
        menuBurguer.classList.remove('close');
    }
});