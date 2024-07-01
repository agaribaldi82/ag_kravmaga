"use strict";

var enviar2 = document.querySelector("#enviar2");

if (enviar2) {
  enviar2.addEventListener("click", function (event2) {
    var user_name = document.getElementById("user_name").value;
    var user_lastname = document.getElementById("user_phone").value;
    var user_email = document.getElementById("user_email").value;
    var user_message = document.getElementById("user_message").value;

    if (user_name === "" || user_phone === "" || user_email === "" || user_message === "") {
      event2.preventDefault();
      alert("Por favor complete todos los campos");
    } else {
      alert("¡Gracias por contactarnos! En breve responderemos su consulta.");
      window.location.href = "index.html";
    }
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
  } else {
    alert("Sus datos fueron ingresados con éxito");
    window.location.href = "index.html";
  }
});