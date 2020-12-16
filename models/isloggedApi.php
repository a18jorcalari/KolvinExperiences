<?php
session_start();

if (!isset($_SESSION["id_user"])) {
    echo false;
} else {
    echo true;
}
