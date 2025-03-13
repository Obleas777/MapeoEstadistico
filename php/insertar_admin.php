<?php
// Incluir archivo de conexión
include('conexion.php');

// Datos del administrador
$username = 'admin'; // Nombre de usuario
$password = 'admin123'; // Contraseña en texto claro

// Hashear la contraseña antes de insertarla en la base de datos
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

// Consulta para insertar el nuevo usuario administrador
$sql = "INSERT INTO usuarios (username, password) VALUES (?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $username, $hashedPassword);

// Ejecutar la consulta
if ($stmt->execute()) {
    echo "Administrador registrado con éxito.";
} else {
    echo "Error al registrar el administrador: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
