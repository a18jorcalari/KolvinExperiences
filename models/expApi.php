<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: text/html; charset-utf-8");

//SELECT
if ($_REQUEST['query'] == 0) {
    //AQUI VA EL QUERY SELECT Y RESULTADOS GUARDARLOS EN $respuesta con este formato:
    $respuesta = array(
        array(
            "id_exp" => 1,
            "title" => "Viaje a las Islas Malvinas",
            "description" => "Gran viaje",
            "reported" => false,
            "created" => "2010-06-09 13:12:01",
            "id_user" => "admin",
            "rate_p" => "10",
            "rate_n" => "10",
            "latitud" => "",
            "longitud" => "",
            "state" => ""
        ),
        array(
            "id_exp" => 2,
            "title" => "Viaje a Cancún",
            "description" => "Viaje a Cancún",
            "reported" => false,
            "created" => "2010-06-09 13:12:01",
            "id_user" => "admin",
            "rate_p" => "50",
            "rate_n" => "5",
            "latitud" => "",
            "longitud" => "",
            "state" => ""
        ),
        array(
            "id_exp" => 3,
            "title" => "Las montañas del Himalaya",
            "description" => "Las montañas del Himalaya",
            "reported" => false,
            "created" => "2010-06-09 13:12:01",
            "id_user" => "a18jorcalari",
            "rate_p" => "9",
            "rate_n" => "9",
            "latitud" => "",
            "longitud" => "",
            "state" => ""
        ),
        array(
            "id_exp" => 4,
            "title" => "Machu Pichu, ¿la tierra del dorado?",
            "description" => "Machu Pichu, ¿la tierra del dorado?",
            "reported" => true,
            "created" => "2010-06-09 13:12:01",
            "id_user" => "a18jorcalari",
            "rate_p" => "78",
            "rate_n" => "8",
            "latitud" => "",
            "longitud" => "",
            "state" => ""
        ),
        array(
            "id_exp" => 5,
            "title" => "Nadando entre tiburones",
            "description" => "Nadando entre tiburones",
            "reported" => false,
            "created" => "2010-06-09 13:12:01",
            "id_user" => "a16joeigljim",
            "rate_p" => "2",
            "rate_n" => "1",
            "latitud" => "",
            "longitud" => "",
            "state" => ""
        ),
        array(
            "id_exp" => 6,
            "title" => "Las tres piramides antiguas",
            "description" => "Las tres piramides antiguas",
            "reported" => false,
            "created" => "2010-06-09 13:12:01",
            "id_user" => "a18jorcalari",
            "rate_p" => "1",
            "rate_n" => "5",
            "latitud" => "",
            "longitud" => "",
            "state" => ""
        ),
        array(
            "id_exp" => 7,
            "title" => "Las islas Kolvin",
            "description" => "Las islas Kolvin",
            "reported" => false,
            "created" => "2010-06-09 13:12:01",
            "id_user" => "a18anggarvic",
            "rate_p" => "12",
            "rate_n" => "2",
            "latitud" => "",
            "longitud" => "",
            "state" => ""
        ),
    );
    echo (json_encode($respuesta));
}

if ($_REQUEST['query'] == 1) {
    //AQUI VA EL QUERY SELECT Y RESULTADOS GUARDARLOS EN $respuesta con este formato:
    $respuesta = array(
        array(
            "id_exp" => 1,
            "title" => "Viaje a las Islas Malvinas",
            "description" => "Gran viaje",
            "reported" => false,
            "created" => "2010-06-09 13:12:01",
            "id_user" => "admin",
            "rate_p" => "10",
            "rate_n" => "10",
            "latitud" => "",
            "longitud" => "",
            "state" => ""
        ),
        array(
            "id_exp" => 2,
            "title" => "Viaje a Cancún",
            "description" => "Viaje a Cancún",
            "reported" => false,
            "created" => "2010-06-09 13:12:01",
            "id_user" => "admin",
            "rate_p" => "50",
            "rate_n" => "5",
            "latitud" => "",
            "longitud" => "",
            "state" => ""
        )
    );
    echo (json_encode($respuesta));
}
