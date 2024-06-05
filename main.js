<<<<<<< HEAD

const menuBtn = document.getElementById('menu-icon');
const menuList = document.querySelector('nav .menu');
// Funciones
function toggle(element, className = "active"){
    element.classList.toggle(className);
}
// Eventos
menuBtn.onclick = () => toggle(menuList);
document.addEventListener("DOMContentLoaded", function() {
=======
/*document.addEventListener("DOMContentLoaded", function() {
>>>>>>> agkm
    const menu_btn = document.getElementById("menu_hamburguesa");
    const menu_list = document.getElementById("lista_menu");

    menu_btn.addEventListener("click", function() {
        toggle(menu_list, "active");
    });

    function toggle(element, className = "active") {
        element.classList.toggle(className);
    }
<<<<<<< HEAD
});

=======
});*/

function abrir(){
    document.getElementById("lista_menu").style.display="block"
    document.getElementById("menu_hamburguesa").style.display="none"
}

function cerrar(){
    document.getElementById("lista_menu").style.display="none";
    document.getElementById("menu_hamburguesa").style.display="flex"
}

function login(){
    document.getElementById("formu").style.display="flex"
}

function cerrar_form(){
    document.getElementById("formu").style.display="none"
}

let volver = document.getElementById("volver")
volver.addEventListener("click", ()=>{
    window.location.href = "index.html"
})
>>>>>>> agkm
