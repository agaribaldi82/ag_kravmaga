let enviar =document.querySelector("#enviar")

if (enviar) {
    enviar.addEventListener("click", function() {
        alert("¡Gracias por contactarnos! En breve responderemos su consulta.");
        window.location.href="index.html"  
    });
}



if(window.confirm("Estás interesado/a en formarte como Instructor/a?"))
    {window.location.href="curso_instructor.html"}

else{}
