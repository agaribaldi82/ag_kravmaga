let enviar = document.querySelector("#enviar")

if (enviar) {
    enviar.addEventListener("click", function() {
        alert("¡Gracias por contactarnos! En breve responderemos su consulta.");
        //window.location.href = "index.html";
    });
}

const enviar_datos = document.getElementById("btn")
    
enviar_datos.addEventListener("click", (event)=>{
    let nombre = document.getElementById("name").value.trim();
    let apellido = document.getElementById("lastname").value.trim();
    let tel = document.getElementById("tel").value.trim();
    let fecha_nac = document.getElementById("fecha_nac").value.trim();
    let ci = document.getElementById("ci").value.trim();
    let sociedad = document.getElementById("sociedad").value.trim();
    let emergencia = document.getElementById("emergencia").value.trim();
    let email = document.getElementById("email").value.trim();

    if (nombre === ""|| apellido === ""|| tel === ""|| fecha_nac === ""|| ci === ""|| sociedad === ""|| emergencia === ""|| email === ""){
        event.preventDefault()
        alert("Por favor, complete todos los campos antes de enviar el formulario.");
        window.location.href = "https://www.kravmagauy.com"

    } else {alert("Sus datos fueron ingresados con éxito")}
    
})
