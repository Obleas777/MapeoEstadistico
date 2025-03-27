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

// Obtener y validar los datos del formulario
$colonia = isset($_POST['colonia']) ? trim($_POST['colonia']) : '';
$calle = isset($_POST['calle']) ? trim($_POST['calle']) : '';
$tipo_falla = isset($_POST['tipo_falla']) ? trim($_POST['tipo_falla']) : '';
$descripcion = isset($_POST['descripcion']) ? trim($_POST['descripcion']) : '';

// Verificar que los campos necesarios no estén vacíos
if (empty($colonia) || empty($calle) || empty($tipo_falla) || empty($descripcion)) {
    echo json_encode(["success" => false, "error" => "Todos los campos son obligatorios."]);
    exit;
}

// Procesar imagen (si se adjunta)
$imagen_ruta = "";
if (!empty($_FILES['imagen']['name'])) {
    $imagen_nombre = basename($_FILES['imagen']['name']);
    $imagen_tmp = $_FILES['imagen']['tmp_name'];
    $directorio = "uploads/";

    // Verificar si el archivo es una imagen válida
    $image_file_type = strtolower(pathinfo($imagen_nombre, PATHINFO_EXTENSION));
    $allowed_types = ['jpg', 'jpeg', 'png', 'gif'];

    if (!in_array($image_file_type, $allowed_types)) {
        echo json_encode(["success" => false, "error" => "El archivo no es una imagen válida."]);
        exit;
    }

    // Verificar tamaño del archivo (por ejemplo, máximo 5MB)
    if ($_FILES['imagen']['size'] > 5000000) {
        echo json_encode(["success" => false, "error" => "El archivo es demasiado grande."]);
        exit;
    }

    // Crear directorio si no existe
    if (!file_exists($directorio)) {
        mkdir($directorio, 0777, true);
    }

    $imagen_ruta = $directorio . $imagen_nombre;
    move_uploaded_file($imagen_tmp, $imagen_ruta);
}

// Usar prepared statements para insertar de manera segura
$stmt = $conn->prepare("INSERT INTO reportes (colonia, calle, tipo_falla, descripcion, imagen) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $colonia, $calle, $tipo_falla, $descripcion, $imagen_ruta);

// Ejecutar la consulta
if ($stmt->execute()) {
    // Retornar datos del reporte enviado para actualizar el mapa
    echo json_encode(["success" => true, "colonia" => $colonia, "tipo_falla" => $tipo_falla]);
} else {
    echo json_encode(["success" => false, "error" => $stmt->error]);
}

// Cerrar la conexión
$stmt->close();
$conn->close();
?>
