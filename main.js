
const menuBtn = document.getElementById('menu-icon');
const menuList = document.querySelector('nav .menu');
// Funciones
function toggle(element, className = "active"){
    element.classList.toggle(className);
}
// Eventos
menuBtn.onclick = () => toggle(menuList);
document.addEventListener("DOMContentLoaded", function() {
    const menu_btn = document.getElementById("menu_hamburguesa");
    const menu_list = document.getElementById("lista_menu");

    menu_btn.addEventListener("click", function() {
        toggle(menu_list, "active");
    });

    function toggle(element, className = "active") {
        element.classList.toggle(className);
    }
});

