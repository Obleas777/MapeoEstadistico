<?php
include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["id"]) && isset($_POST["tabla"])) {
    $id = intval($_POST["id"]);
    $tabla = $_POST["tabla"];

    // Verificar que la tabla sea válida para evitar inyección SQL
    if ($tabla === "reportes" || $tabla === "contactos") {
        $sql = "DELETE FROM $tabla WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);

        if ($stmt->execute()) {
            echo "<script>alert('Registro eliminado correctamente'); window.location.href='http://localhost/Estadia2025/adminVista.html';</script>";
        } else {
            echo "<script>alert('Error al eliminar el registro'); window.location.href='http://localhost/Estadia2025/adminVista.html';</script>";
        }

        $stmt->close();
    } else {
        echo "<script>alert('Tabla no válida'); window.location.href='http://localhost/Estadia2025/adminVista.html';</script>";
    }

    $conn->close();
} else {
    echo "<script>alert('Solicitud no válida'); window.location.href='http://localhost/Estadia2025/adminVista.html';</script>";
}
?>
