<?php
$servername = "localhost";
$username = "root";  // Usuario por defecto de MySQL en XAMPP
$password = "";      // Contraseña en blanco por defecto en XAMPP
$database = "participacion";  // Nombre de tu base de datos

// Crear conexión
$conn = new mysqli($servername, $username, $password, $database);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>
