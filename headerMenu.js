document.addEventListener("DOMContentLoaded", function() {
    const openMenuBurgerButton = document.getElementById("menu-burger-button");
    const closeMenuBurgerButton = document.getElementById("menu-burger-button-close");
    
    openMenuBurgerButton.addEventListener('click', function() {

        document.documentElement.classList.add('menu-open');
    })

    closeMenuBurgerButton.addEventListener('click', function() {

        document.documentElement.classList.remove('menu-open');
    })
 });

 window.addEventListener('resize', function() {
    document.documentElement.classList.remove('menu-open');
 });
