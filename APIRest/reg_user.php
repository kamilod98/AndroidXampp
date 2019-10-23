<?php
    //Call conecctionDB File
    include("connectionDB.php");

    //Get Android (xml) input values
    $email = $_POST['email'];

    //Save data input DB
    $sql= "INSERT INTO users (email) VALUES ('$email')";

    //
?>