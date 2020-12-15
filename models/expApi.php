<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: text/html; charset-utf-8");

//SELECT
if ($_REQUEST['query'] == 1) {
    $respuesta = array(
        array(
            "id_exp" => "1",
            "title" => "Viaje a las Islas Malvinas",
            "description" => "Gran viaje."
        ),
        array(
            "id_exp" => "2",
            "title" => "Viaje a Cancún",
            "description" => ""
        ),
        array(
            "id_exp" => "3",
            "title" => "Las montañas del Himalaya",
            "description" => ""
        ),
        array(
            "id_exp" => "4",
            "title" => "Machu Pichu, ¿la tierra del dorado?",
            "description" => ""
        ),
        array(
            "id_exp" => "5",
            "title" => "Nadando entre tiburones",
            "description" => ""
        ),
        array(
            "id_exp" => "6",
            "title" => "Las tres piramides antiguas",
            "description" => ""
        ),
        array(
            "id_exp" => "7",
            "title" => "Las islas Kolvin",
            "description" => ""
        ),
    );
    echo (json_encode($respuesta));
}
