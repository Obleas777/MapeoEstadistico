<?php
// Incluir archivo de conexión
include('conexion.php');

// Obtener los datos del formulario
$username = $_POST['username'];
$password = $_POST['password'];

// Verificar que los datos recibidos no estén vacíos
if (empty($username) || empty($password)) {
    echo json_encode(['success' => false, 'message' => 'Por favor, complete todos los campos.']);
    exit;
}

// Consulta para obtener el usuario y la contraseña hash de la base de datos
$sql = "SELECT * FROM usuarios WHERE username = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

// Verificar si el usuario existe
if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    
    // Depuración: mostrar el hash de la contraseña y la contraseña ingresada
    // Esto es para verificar que el hash sea correcto (elimina esto cuando esté listo)
    // echo "Hash en base de datos: " . $row['password'];
    // echo "Contraseña ingresada: " . $password;

    // Verificar la contraseña con password_verify
    if (password_verify($password, $row['password'])) {
        // Contraseña correcta, inicio de sesión exitoso
        echo json_encode(['success' => true]);
    } else {
        // Contraseña incorrecta
        echo json_encode(['success' => false, 'message' => 'Contraseña incorrecta.']);
    }
} else {
    // Usuario no encontrado
    echo json_encode(['success' => false, 'message' => 'Usuario no encontrado.']);
}

// Cerrar la conexión
$stmt->close();
$conn->close();

?>
