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