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
        echo "fail";
    }
}

if($_REQUEST['query']==2){
    $respuesta=$user->selectByUserName($_REQUEST['user']);
    if ($_REQUEST['password'] == $respuesta[0]["password"]) {
        echo (json_encode($respuesta));
    }else{
        echo "fail";
    }
}



?>