<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: text/html; charset-utf-8");
error_reporting(-1);
ini_set('display_errors', 'On');
session_start();
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

    //He modficado esto para que funcione sin unos datos. 

    $insertExperience = array(
        "query" => $_REQUEST['query'],
        "title" => $_REQUEST['title'],
        "description" => $_REQUEST['description'],
        "id_user" => $_SESSION["id_user"],

        "state" => $_REQUEST["state"],
        "id_category" => $_REQUEST['id_category'],
        "latitud" => $_REQUEST['latitud'],
        "longitud" => $_REQUEST['longitud'],
        "image" => "https://picsum.photos/300/200"


    );
    $experience->insert($insertExperience);
    echo json_encode("Experiencia subida correctamente");
}
//modificar la experiencia
else if ($_REQUEST['query'] == 3) {

    $updateExperience = array(
        "query" => $_REQUEST['query'],
        "id_experience" => $_REQUEST['id_experience'],
        "title" => $_REQUEST['title'],
        "description" => $_REQUEST['description'],
        // "state" => $_REQUEST['state'],
        "id_category" => $_REQUEST['id_category'],
        "latitud" => $_REQUEST['latitud'],
        "longitud" => $_REQUEST['longitud'],
        // "image" => $_REQUEST['image']
    );
    $experience->update($updateExperience);
    echo json_encode("Experiencia modificada correctamente");
    // foreach ($experience->update($updateExperience) as $key => $value) {
    //     if ($value == 1)  echo "Algo ha salido mal";
    //     else echo "Estado modificado correctamente";
    // }
}
//cambiar el estado
else if ($_REQUEST['query'] == 4) {

    $updateExperience = array(
        "id_experience" => $_REQUEST['id_experience'],
        "state" => $_REQUEST['state']
    );
    $experience->updateState($updateExperience);
    echo true;
    
}
//valorar
else if ($_REQUEST['query'] == 5) {

    $updateExperience = array(
        "id_experience" => $_REQUEST['id_experience'],
        "rate_p" => $_REQUEST['rate_p'],
        "rate_n" => $_REQUEST['rate_n']
    );

    foreach ($experience->updateRate($updateExperience) as $key => $value) {
        if ($value == 1)  echo json_encode("Se ha valorado correctamente");
        else echo json_encode("Algo ha salido mal");
    }
}
//reportar
else if ($_REQUEST['query'] == 6) {

    $updateExperience = array(
        "id_experience" => $_REQUEST['id_experience'],
        "reported" => $_REQUEST['reported'],
    );

    foreach ($experience->updateReport($updateExperience) as $key => $value) {
        if ($value == 1)  echo json_encode("Se ha reportado correctamente");
        else echo json_encode("Algo ha salido mal");
    }
}
//eliminar
else if ($_REQUEST['query'] == 7) {
    $experience->delete($_REQUEST['id_experience']);

    foreach ($experience->selectById2($_REQUEST['id_experience']) as $key => $value) {
        if ($value == 1)  echo json_encode("Algo ha salido mal");
        else echo json_encode("Se ha eliminado correctamente");
    }
}
//Select experience by id
else if ($_REQUEST['query'] == 8) {
    $respuesta = $experience->selectById($_REQUEST['id_experience']);
    echo json_encode($respuesta);
}

//FILTER
else if ($_REQUEST['query'] == 9) {
    $respuesta = $experience->selectByUserByCategory($_REQUEST['user'], $_REQUEST['category']);
    echo json_encode($respuesta);
} elseif ($_REQUEST['query'] == 10) {
    $respuesta = $experience->selectOrderedByDateAsc();
    echo json_encode($respuesta);
} elseif ($_REQUEST['query'] == 11) {
    $respuesta = $experience->selectOrderedByVoteAsc();
    echo json_encode($respuesta);
} elseif ($_REQUEST['query'] == 12) {
    $respuesta = $experience->selectByUserByDateAsc($_REQUEST['user']);
    echo json_encode($respuesta);
} elseif ($_REQUEST['query'] == 13) {
    $respuesta = $experience->selectByUserByVoteAsc($_REQUEST['user']);
    echo json_encode($respuesta);
} elseif ($_REQUEST['query'] == 14) {
    $respuesta = $experience->selectByCategory($_REQUEST['category']);
    echo json_encode($respuesta);
} elseif ($_REQUEST['query'] == 15) {
    $respuesta = $experience->selectOrderedByDateDesc();
    echo json_encode($respuesta);
} elseif ($_REQUEST['query'] == 16) {
    $respuesta = $experience->selectOrderedByVoteDesc();
    echo json_encode($respuesta);
} elseif ($_REQUEST['query'] == 17) {
    $respuesta = $experience->selectByUserByDateDesc($_REQUEST['user']);
    echo json_encode($respuesta);
} elseif ($_REQUEST['query'] == 18) {
    $respuesta = $experience->selectByUserByVoteDesc($_REQUEST['user']);
    echo json_encode($respuesta);
}

//Select ultima experiencia añadida
elseif ($_REQUEST['query'] == 19) {
    $respuesta = $experience->selectLastAdded();
    echo json_encode($respuesta);
}

//update imagen
elseif ($_REQUEST['query'] == 20) {
    foreach ($experience->updateImage($_REQUEST['id_experience'], $_REQUEST['image']) as $key => $value) {
        if ($value == 1)  echo json_encode("Se ha update correctamente");
        else echo json_encode("Algo ha salido mal");
    }
}
