<?php
session_start();

if (!isset($_SESSION["id_user"])) {
    echo false;
} else {
    $id_userLogged = $_SESSION["id_user"];
    //Hacer select en BBDD.
    $respuesta = array(
        array(
            "id_user" => $id_userLogged,
        )
    );
    echo (json_encode($respuesta));
}
