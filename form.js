let enviar =document.querySelector("#enviar")

if (enviar) {
    enviar.addEventListener("click", function() {
        alert("¡Gracias por contactarnos! En breve responderemos su consulta.");
        window.location.href="../index.html"  
    });
}
