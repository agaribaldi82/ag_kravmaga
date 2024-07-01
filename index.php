<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="form_contacto.css">
    <script src="form.js" defer></script>
</head>
<body>
    <aside>
        <div class="videos">
            <iframe class="video_youtube" src="https://www.youtube.com/embed/JoPQcH88_sI?si=VwKpkKv5lZYWORnc" title="Nota: Radio El Espectaodr" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe class="video_youtube" src="https://www.youtube.com/embed/US6iihDyHMc?si=0RNlXTXqTEBouW2m" title="Nota Tarde o Temprano - Canal 12" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe class="video_youtube" src="https://www.youtube.com/embed/OevSr0B39s0?si=kLucZnDkXMtmRUfc" title="Eyal Yanilov y Adrian Garibaldi" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            
        </div>
        <div class="redes">
            <a class="iconos" href="https://www.instagram.com/ag_kravmaga" target="_blank"><img width="48" height="48" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"/>
            <a class="iconos" href="https://www.tiktok.com/@agkravmaga"><img src="imagenes_logo/tiktok.png" alt=""></a>
            <a class="iconos" href="https://wa.me/+59899002018" target="_blank"><img width="48" height="48" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1"/></a>
            <a class="iconos" href="mailto: agaribaldi@kravmagauy.com"><img width="48" height="48" src="https://img.icons8.com/neon/96/new-post.png" alt="new-post"/></a>
        </div>
        
    </aside>
    <div class="imagen">
        <img class="foto" src="imagenes_logo/portada.png" alt="">
        <a href="index.html"><img class="house" src="imagenes_logo/house.png" alt=""></a>
    </div>
    <div class="formulario" id="formulario">
        <form method="post" class="form form-control-lg">
            <label for="name"></label>
            <input type="text" name="name" id="name" placeholder="Nombre" required>
            
            
            <label for="lastname"></label>
            <input type="text" name="lastname" id="lastname" placeholder="Apellido" required>

            
            <label for="tel"></label>
            <input type="text" name="tel" id="tel" placeholder="Telefono" required>
            
            
            <label for="fecha_nac"></label>
            <input type="date" name="fecha_nac" id="fecha_nac" placeholder="Fecha de Nac" required>
            
            
            <label for="ci"></label>
            <input type="text" name="ci" id="ci" placeholder="C.I" required>
            
            
            <label for="sociedad"></label>
            <input type="text" name="sociedad" id="sociedad" placeholder="Sociedad" required>
            

            <label for="emergencia"></label>
            <input type="text" name="emergencia" id="emergencia" placeholder="Emergencia" required>
            

            <label for="email"></label>
            <input type="text" name="email" id="email" placeholder="Email" required>
            

            <input id="btn" type="submit" name="contact" value="Enviar">
        </form>
    </div>
    <?php
        include ("contacto.php")
    ?>
</body>
</html>