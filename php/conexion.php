<?php
$servername = "localhost";  // Servidor local
$username = "root";         // Usuario (por defecto en XAMPP es "root")
$password = "";             // Contraseña (vacía en XAMPP por defecto)
$database = "participacion"; // Nombre de tu base de datos

// Crear conexión
$conn = new mysqli($servername, $username, $password, $database);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
} 
?>
