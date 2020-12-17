<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: text/html; charset-utf-8");

session_start();


if ($_REQUEST['query'] == 0) {
    //Parte database.
    $respuesta = array(
        array(
            "id_user" => "admin",
            "password" => "admin"
        )
    );

    if ($_REQUEST['password'] == $respuesta[0]["password"]) {
        $_SESSION["id_user"] = $respuesta[0]["id_user"];
        echo (json_encode($respuesta));
    } else {
        echo false;
    }
}
