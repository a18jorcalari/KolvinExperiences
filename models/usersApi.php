<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: text/html; charset-utf-8");
error_reporting(-1);
ini_set('display_errors', 'On');

require_once('User.php');

session_start();

$user = new User();

//SELECT
//Necesito saber si respuesta tiene la estructura correcta.
//Puede devolver un error.
if ($_REQUEST['query'] == 1) {
    $respuesta = $user->selectByUserName($_REQUEST['user']);
    // echo json_encode($respuesta);
    if ($_REQUEST['user'] == $respuesta[0]["id_user"] && $_REQUEST['password'] == $respuesta[0]["password"]) {
        $_SESSION["id_user"] = $respuesta[0]["id_user"];
        echo (json_encode($respuesta));
    } else {
        echo json_encode(false);
    }
}

//UPDATE
if ($_REQUEST['query'] == 2) {

    $updateUser = array(
        "id_user" => $_REQUEST['newIdUser'],
        "name" => $_REQUEST['newName'],
        "password" => $_REQUEST['newPassword'],
        "type" => $_REQUEST['newType'],
        "email" => $_REQUEST['newEmail'],
        "oldIdUser" => $_SESSION["id_user"],
        "query" => $_REQUEST['query']
    );
    $user->update($updateUser);

    foreach ($user->selectExistsUsers($updateUser) as $value) {
        if ($value == 1) {
            $_SESSION["id_user"] = $_REQUEST['newIdUser'];
            echo json_encode("ok");
        } else {
            echo json_encode("fail");
        }
    }
}

if ($_REQUEST['query'] == 3) {

    $insertUser = array(
        "id_user" => $_REQUEST['idUser'],
        "name" => $_REQUEST['name'],
        "password" => $_REQUEST['password'],
        "type" => $_REQUEST['type'],
        "email" => $_REQUEST['email'],
        "query" => $_REQUEST['query']
    );
    foreach ($user->selectExistsUsers($insertUser) as $value) {
        if ($value == 1) echo json_encode("El usuario con esa id ya existe");
        else {
            $user->insert($insertUser);
            echo json_encode("Usuario registrado correctamente");
        }
    }
}

if ($_REQUEST['query'] == 4) {
    $deleteUser = array(
        "id_user" => $_REQUEST['idUser'],
        "query" =>  $_REQUEST['query'],

    );
    $user->delete($_REQUEST['idUser']);

    foreach ($user->selectExistsUsers($deleteUser) as $value) {
        if ($value == 1) echo "Algo ha salido mal";
        else {
            echo "Usuario eliminado correctamente";
        }
    }
}
