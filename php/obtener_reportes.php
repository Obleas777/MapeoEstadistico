<?php
header("Content-Type: application/json");
include 'conexion.php'; // Conectar a la BD

// Consultar reportes más recientes
$query = "SELECT id, colonia, calle, tipo_falla, descripcion FROM reportes ORDER BY id DESC LIMIT 20";
$result = $conn->query($query);

$reportes = [];

while ($row = $result->fetch_assoc()) {
    $reportes[] = $row;
}

echo json_encode($reportes);

$conn->close();
?>
