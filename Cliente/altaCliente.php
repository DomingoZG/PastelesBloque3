<?php

// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "pasteleria";
$usuario   = "root";
$password  = "";

// Recojo los datos de entrada
$email = $_POST["email"];
$pass = $_POST["password"];
$nombre = $_POST["nombre"];
$telefono = $_POST["telefono"];
$direccion = $_POST["direccion"];
$dni = $_POST["dni"];


// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
mysqli_set_charset($conexion,"utf8");
mysqli_query($conexion,"utf8");


$sql = "INSERT INTO cliente (email, pass, nombre, telefono, direccion, dni) VALUES (null,'$email','$pass','$nombre','$telefono','$direccion', $dni);";
$resultado = mysqli_query($conexion,$sql);

if ($resultado){
    $respuesta["error"] = 0;
    $respuesta["mensaje"] = "Alta realizada";
} else {
    $respuesta["error"] = 1;
    $respuesta["mensaje"] = "Error en el proceso de alta: ".mysqli_error($conexion);
}

echo json_encode($respuesta);

mysqli_close($conexion);
?>