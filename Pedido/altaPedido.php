<?php

// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "pasteleria";
$usuario   = "root";
$password  = "";

// Recojo los datos de entrada
$id = $_POST["id"];
$cliente = $_POST["cliente"];
$fecha = $_POST["fecha"];
$total_pedido = $_POST["total_pedido"];




// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
mysqli_set_charset($conexion,"utf8");
mysqli_query($conexion,"utf8");


$sql = "INSERT INTO pastel (id, cliente, fecha, total_pedido) VALUES (null,'$id','$cliente','$fecha','$total_pedido);"
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