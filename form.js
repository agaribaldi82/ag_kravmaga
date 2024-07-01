let enviar2 = document.querySelector("#enviar2")

if (enviar2) {
    enviar2.addEventListener("click", (event2)=> {
        let user_name = document.getElementById("user_name").value
        let user_lastname = document.getElementById("user_phone").value
        let user_email = document.getElementById("user_email").value
        let user_message = document.getElementById("user_message").value

        if (user_name === "" || user_phone === "" || user_email === "" || user_message === ""){
            event2.preventDefault()
            alert("Por favor complete todos los campos")
        }

        else {alert("¡Gracias por contactarnos! En breve responderemos su consulta.");
        window.location.href = "index.html";
    }
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
        

    } else {alert("Sus datos fueron ingresados con éxito")
            window.location.href = "index.html"
    }
    
})
