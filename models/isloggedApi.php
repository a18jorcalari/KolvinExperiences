<?php
session_start();

if (!isset($_SESSION["id_user"])) {
    echo json_encode(false);
} else {
    echo json_encode(true);
}
