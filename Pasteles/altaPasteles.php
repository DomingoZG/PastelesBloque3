<?php

// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "pasteleria";
$usuario   = "root";
$password  = "";

// Recojo los datos de entrada
$id = $_POST["id"];
$nombre = $_POST["nombre"];
$precio = $_POST["precio"];
$descripcion = $_POST["descripcion"];
$imagen = $_POST["imagen"];



// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
mysqli_set_charset($conexion,"utf8");
mysqli_query($conexion,"utf8");


$sql = "INSERT INTO pastel (email, pass, nombre, telefono, direccion, dni) VALUES (null,'$id','$nombre','$precio','$descripcion','$imagen);";
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