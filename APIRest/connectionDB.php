<?php
    //connection DB / MySQL credentials
    $servername = "localhost"; //127.0.0.1
    $username = "root";
    $password = "";
    $dbname = "market";
    $port = "3306";

    //Create connection
    $conn = new mysqli(
        $servername,
        $username,
        $password,
        $dbname
    );

    //Check connection 
    if($conn->connect_error){
        die("Connection Failed: " . $conn->connect_error); //el . (punto) para concatenar
    }else{
        echo "Connected successfully";
    }
?>