<?php
session_start();
if ($_REQUEST['query'] == 1) {
    $id_user = $_SESSION["id_user"]; //Para saber id del usuario logged
    //SELECT


    // $respuesta = 
    echo json_encode("ok");
}
