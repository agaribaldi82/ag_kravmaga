"use strict";

var enviar = document.querySelector("#enviar");

if (enviar) {
  enviar.addEventListener("click", function () {
    alert("¡Gracias por contactarnos! En breve responderemos su consulta."); //window.location.href = "index.html";
  });
}

var enviar_datos = document.getElementById("btn");
enviar_datos.addEventListener("click", function (event) {
  var nombre = document.getElementById("name").value.trim();
  var apellido = document.getElementById("lastname").value.trim();
  var tel = document.getElementById("tel").value.trim();
  var fecha_nac = document.getElementById("fecha_nac").value.trim();
  var ci = document.getElementById("ci").value.trim();
  var sociedad = document.getElementById("sociedad").value.trim();
  var emergencia = document.getElementById("emergencia").value.trim();
  var email = document.getElementById("email").value.trim();

  if (nombre === "" || apellido === "" || tel === "" || fecha_nac === "" || ci === "" || sociedad === "" || emergencia === "" || email === "") {
    event.preventDefault();
    alert("Por favor, complete todos los campos antes de enviar el formulario.");
    window.location.href = "https://www.kravmagauy.com";
  } else {
    alert("Sus datos fueron ingresados con éxito");
  }
});