<?php
include 'conexion.php'; // Incluir la conexión a la base de datos

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST["name"]);
    $correo = htmlspecialchars($_POST["email"]);
    $mensaje = htmlspecialchars($_POST["message"]);

    // Guardar el mensaje en la base de datos
    $sql = "INSERT INTO contactos (nombre, correo, mensaje) VALUES ('$nombre', '$correo', '$mensaje')";
    
    if ($conn->query($sql) === TRUE) {
        // Si la inserción fue exitosa, responder con un mensaje de éxito
        echo json_encode(["success" => true]);
    } else {
        // Si ocurrió un error al guardar en la base de datos
        echo json_encode(["success" => false, "error" => "Error al guardar el mensaje."]);
    }
}    

$conn->close(); // Cerrar la conexión a la base de datos
?>
