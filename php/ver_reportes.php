<?php
include 'conexion.php';

$sql = "SELECT * FROM reportes ORDER BY fecha DESC";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reportes Enviados</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">
    <div class="container py-5">
        <h2 class="text-center mb-4">Reportes Recibidos</h2>
        <table class="table table-bordered bg-white">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Colonia</th>
                    <th>Calle</th>
                    <th>Tipo de Problema</th>
                    <th>Descripción</th>
                    <th>Imagen</th>
                    <th>Fecha</th>
                </tr>
            </thead>
            <tbody>
                <?php while ($fila = $result->fetch_assoc()) { ?>
                    <tr>
                        <td><?php echo $fila["id"]; ?></td>
                        <td><?php echo $fila["colonia"]; ?></td>
                        <td><?php echo $fila["calle"]; ?></td>
                        <td><?php echo $fila["tipo_falla"]; ?></td>
                        <td><?php echo $fila["descripcion"]; ?></td>
                        <td>
                            <?php if (!empty($fila["imagen"])) { ?>
                                <img src="<?php echo $fila["imagen"]; ?>" width="100">
                            <?php } else { echo "Sin imagen"; } ?>
                        </td>
                        <td><?php echo $fila["fecha"]; ?></td>
                    </tr>
                <?php } ?>
            </tbody>
        </table>
    </div>
</body>
</html>

<?php $conn->close(); ?>
