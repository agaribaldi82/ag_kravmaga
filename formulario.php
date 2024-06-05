<?php

$nombre = $_POST['name'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$consulta = $_POST['consulta'];

$mensaje = "Este mensaje fue enviado por: $nombre \n";
$mensaje .= "Enviado desde: $email \n";
$mensaje .= "Telefono: $tel \n";
$mensaje .= "Mensaje: $consulta \n";

$para = "agaribaldi@kravmagauy.com";
$asunto = "Email enviado desde la web";

mail($para, $asunto, $mensaje);

?>