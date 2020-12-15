<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: text/html; charset-utf-8");
error_reporting(-1);
ini_set('display_errors','On');

require_once('User.php');

$user = new User();

if($_REQUEST['query']==1){
    $respuesta=$user->selectByUserName($_REQUEST['user']);
    if ($_REQUEST['password'] == $respuesta[0]["password"]) {
        echo (json_encode($respuesta));
    }else{
        echo false;
    }
}

if($_REQUEST['query']==2){

    $updateUser= array(
        "id_user" => $_REQUEST['newIdUser'],
        "name" => $_REQUEST['newName'],
        "password" => $_REQUEST['newPassword'],
        "type" => $_REQUEST['newType'],
        "email" => $_REQUEST['newEmail'],
        "oldIdUser" => $_REQUEST['oldIdUser']
    );
    $respuesta=$user->update($updateUser);
}

if($_REQUEST['query']==3){

    $updateUser= array(
        "id_user" => $_REQUEST['idUser'],
        "name" => $_REQUEST['name'],
        "password" => $_REQUEST['password'],
        "type" => 1,
        "email" => $_REQUEST['email'],
    );
    $respuesta=$user->insert($updateUser);
}


?>