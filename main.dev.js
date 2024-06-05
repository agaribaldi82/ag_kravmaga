"use strict";

/*document.addEventListener("DOMContentLoaded", function() {
    const menu_btn = document.getElementById("menu_hamburguesa");
    const menu_list = document.getElementById("lista_menu");

    menu_btn.addEventListener("click", function() {
        toggle(menu_list, "active");
    });

    function toggle(element, className = "active") {
        element.classList.toggle(className);
    }
});*/
function abrir() {
  document.getElementById("lista_menu").style.display = "block";
  document.getElementById("menu_hamburguesa").style.display = "none";
}

function cerrar() {
  document.getElementById("lista_menu").style.display = "none";
  document.getElementById("menu_hamburguesa").style.display = "flex";
}

function login() {
  document.getElementById("formu").style.display = "flex";
}

function cerrar_form() {
  document.getElementById("formu").style.display = "none";
}

var volver = document.getElementById("volver");
volver.addEventListener("click", function () {
  window.location.href = "index.html";
});