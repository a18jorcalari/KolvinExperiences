<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: text/html; charset-utf-8");
error_reporting(-1);
ini_set('display_errors', 'On');

require_once('Experience.php');

$experience = new Experience();

//select de todos
if ($_REQUEST['query'] == 0) {
    $respuesta = $experience->select();
    echo json_encode($respuesta);
}
//select por usuario
else if ($_REQUEST['query'] == 1) {
    $respuesta = $experience->selectByUser($_REQUEST['user']);
    echo json_encode($respuesta);
}
//crear la experiencia
else if ($_REQUEST['query'] == 2) {

    $insertExperience = array(
        "query" => $_REQUEST['query'],
        "title" => $_REQUEST['title'],
        "description" => $_REQUEST['description'],
        // "created" => $_REQUEST['created'],
        // "id_user" => $_REQUEST['id_user'],
        // "state" => $_REQUEST['state'],
        // "id_category" => $_REQUEST['id_category'],
        // "location" => $_REQUEST['location'],
        // "image" => $_REQUEST['image']

        "created" => "asd",
        "id_user" => "asd",
        "state" => "asd",
        "id_category" => "asd",
        "location" => "asd",
        "image" => "asd"


    );
    foreach ($experience->selectExistsExperience($insertExperience) as $value) {
        if ($value == 1) echo json_encode("No se pueden repetir las experiencias");
        else {
            $experience->insert($insertExperience);
            echo json_encode("Experiencia subida correctamente");
        }
    }
}
//modificar la experiencia
else if ($_REQUEST['query'] == 3) {

    $updateExperience = array(
        "id_experience" => $_REQUEST['id_experience'],
        "title" => $_REQUEST['title'],
        "description" => $_REQUEST['description'],
        "created" => $_REQUEST['created'],
        "state" => $_REQUEST['state'],
        "id_category" => $_REQUEST['id_category'],
        "query" => $_REQUEST['query'],
        "location" => $_REQUEST['location'],
        "image" => $_REQUEST['image']
    );
    foreach ($experience->update($updateExperience) as $key => $value) {
        if ($value == 1)  echo "Algo ha slido mal";
        else echo "Estado modificado correctamente";
    }
}
//cambiar el estado
else if ($_REQUEST['query'] == 4) {

    $updateExperience = array(
        "id_experience" => $_REQUEST['id_experience'],
        "state" => $_REQUEST['state']
    );
    foreach ($experience->updateState($updateExperience) as $key => $value) {
        if ($value == 1)  echo "Algo ha slido mal";
        else echo "Estado modificado correctamente";
    }
}
//valorar
else if ($_REQUEST['query'] == 5) {

    $updateExperience = array(
        "id_experience" => $_REQUEST['id_experience'],
        "rate_p" => $_REQUEST['rate_p'],
        "rate_n" => $_REQUEST['rate_n']
    );

    foreach ($experience->$experience->updateRate($updateExperience) as $key => $value) {
        if ($value == 1)  echo "Algo ha slido mal";
        else echo "Se ha valorado correctamente";
    }
}
//reportar
else if ($_REQUEST['query'] == 6) {

    $updateExperience = array(
        "id_experience" => $_REQUEST['id_experience'],
        "reported" => $_REQUEST['reported'],
    );

    foreach ($experience->$experience->updateReport($updateExperience) as $key => $value) {
        if ($value == 1)  echo "Algo ha slido mal";
        else echo "Se ha reportado correctamente";
    }
}
//eliminar
else if ($_REQUEST['query'] == 7) {
    $experience->delete($_REQUEST['id_experience']);

    foreach ($experience->selectById($_REQUEST['id_experience']) as $key => $value) {
        if ($value == 1)  echo "Algo ha slido mal";
        else echo "Se ha eliminado correctamente";
    }
}
//Select experience by id
else if ($_REQUEST['query'] == 8) {
    $respuesta = $experience->selectById($_REQUEST['id_experience']);
    echo json_encode($respuesta);
}
