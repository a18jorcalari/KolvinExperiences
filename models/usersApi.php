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
        "oldIdUser" => $_REQUEST['oldIdUser'],
        "query" => $_REQUEST['query']
    );
    $user->update($updateUser);

    foreach($user->selectExistsUsers($updateUser) as $value){
        if($value==1) echo "ok";
        else echo "fail";
    }
}

if($_REQUEST['query']==3){

    $insertUser= array(
        "id_user" => $_REQUEST['idUser'],
        "name" => $_REQUEST['name'],
        "password" => $_REQUEST['password'],
        "type" => $_REQUEST['type'],
        "email" => $_REQUEST['email'],
        "query" => $_REQUEST['query']
    );
    foreach($user->selectExistsUsers($insertUser) as $value){
        if($value==1) echo "El usuario con esa id ya existe";
        else{ $user->insert($insertUser); echo "Usuario registrado correctamente";}
        
    }
}

<<<<<<< Updated upstream
=======
if($_REQUEST['query']==4){
    $deleteUser= array(
        "id_user" => $_REQUEST['idUser'],
        "query" =>  $_REQUEST['query'],
        
    );
    $user -> delete($_REQUEST['idUser']);

    foreach($user->selectExistsUsers($deleteUser) as $value){
        if($value==1) echo "Algo ha salido mal";
        else{ echo "Usuario eliminado correctamente";}
        
    }


}

>>>>>>> Stashed changes

?>