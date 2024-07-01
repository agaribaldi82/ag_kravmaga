<?php

include ("conexion.php");

if (isset($_POST['contact'])) {
    if (
        strlen($_POST['name']) >= 1 &&
        strlen($_POST['lastname']) >= 1 &&
        strlen($_POST['tel']) >= 1 &&
        strlen($_POST['email']) >= 1 &&
        strlen($_POST['fecha_nac']) >= 1 &&
        strlen($_POST['ci']) >= 1 &&
        strlen($_POST['sociedad']) >= 1 &&
        strlen($_POST['emergencia']) >= 1 
        
    ) {
        $name = trim($_POST['name']);
        $lastname = trim($_POST['lastname']);
        $tel = trim($_POST['tel']);
        $tel_modificado = str_replace("-","", $tel);
        $email = trim($_POST['email']);
        $fecha_nac = trim($_POST['fecha_nac']);
        $fecha_formateada = date('Y-m-d', strtotime($fecha_nac));
        $ci = trim($_POST['ci']);
        $ci_mod = str_replace(array('.', '-'), '', $ci);
        $sociedad = trim($_POST['sociedad']);
        $emergencia = trim($_POST['emergencia']);

        $consulta = "insert into datos_alumnos(nombre, apellido, telefono, email, fecha_nac, ci, sociedad, emergencia)
        values ('$name', '$lastname', '$tel_modificado', '$email', '$fecha_formateada', '$ci_mod', '$sociedad', '$emergencia')";
        $resultado = mysqli_query($conex, $consulta);
        if ($resultado) {
            ?>
                <h3>Tu registro se ha completado</h3>
            <?php
        } else {
            ?>
                <h3>Ocurrio un error</h3>
            <?php
        }
    } else { ?> <h3>Llena los campos</h3> <?php }
}

?>