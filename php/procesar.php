<?php
// Habilitar errores en PHP (para depuración)
header("Content-Type: application/json");
error_reporting(E_ALL);
ini_set('display_errors', 1);

include 'conexion.php'; // Conectar a la BD

// Verificar si la solicitud es POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    exit("Método no permitido");
}

$colonia = isset($_POST['colonia']) ? $conn->real_escape_string($_POST['colonia']) : '';
$calle = isset($_POST['calle']) ? $conn->real_escape_string($_POST['calle']) : '';
$tipo_falla = isset($_POST['tipo_falla']) ? $conn->real_escape_string($_POST['tipo_falla']) : '';
$descripcion = isset($_POST['descripcion']) ? $conn->real_escape_string($_POST['descripcion']) : '';

// Procesar imagen (si se adjunta)
$imagen_ruta = "";
if (!empty($_FILES['imagen']['name'])) {
    $imagen_nombre = basename($_FILES['imagen']['name']);
    $imagen_tmp = $_FILES['imagen']['tmp_name'];
    $directorio = "uploads/";

    // Crear directorio si no existe
    if (!file_exists($directorio)) {
        mkdir($directorio, 0777, true);
    }

    $imagen_ruta = $directorio . $imagen_nombre;
    move_uploaded_file($imagen_tmp, $imagen_ruta);
}

// Insertar en la base de datos
$sql = "INSERT INTO reportes (colonia, calle, tipo_falla, descripcion, imagen) 
        VALUES ('$colonia', '$calle', '$tipo_falla', '$descripcion', '$imagen_ruta')";
if ($conn->query($sql) === TRUE) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "error" => $conn->error]);
}



