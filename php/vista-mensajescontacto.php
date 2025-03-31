<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="description" content="Plataforma para la gestión de mensajes de contacto." />
    <meta name="author" content="Presidencia Municipal De Rincón de Romos" />
    <title>Mensajes de Contacto - Plataforma de Transparencia</title>
    <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />
    <link href="http://localhost/Estadia2025/styles.css" rel="stylesheet" />
    <link href="http://localhost/Estadia2025/stylepopup.css" rel="stylesheet" />
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <div class="container px-5">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item"><a class="nav-link" href="http://localhost/Estadia2025/index.html"><i class="bi bi-house-door"></i> Inicio</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <header class="hero-header">
        <div class="content">
            <h1 class="display-5 fw-bolder text-white mb-2">Panel de Mensajes</h1>
            <p class="lead text-white-50 mb-4">Revise y administre los mensajes de contacto enviados por los ciudadanos.</p>
        </div>
    </header>

    <section class="py-5" id="mensajes">
        <div class="container px-5 my-5">
            <h2 class="fw-bolder">Mensajes Recibidos</h2> <br> <br/>
            <div class="table-responsive">
                <table class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Mensaje</th>
                            <th>Fecha</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        include 'conexion.php';
                        $sql = "SELECT * FROM contactos ORDER BY fecha DESC";
                        $result = $conn->query($sql);

                        if ($result->num_rows > 0) {
                            while ($row = $result->fetch_assoc()) {
                                echo '<tr>';
                                echo '<td>' . htmlspecialchars($row['nombre']) . '</td>';
                                echo '<td>' . htmlspecialchars($row['correo']) . '</td>';
                                echo '<td>' . htmlspecialchars($row['mensaje']) . '</td>';
                                echo '<td>' . htmlspecialchars($row['fecha']) . '</td>';
                                echo '<td>
                                        <form method="POST" action="eliminar_reporte.php">
                                            <input type="hidden" name="id" value="' . $row['id'] . '">
                                            <input type="hidden" name="tabla" value="contactos">
                                            <button type="submit" class="btn btn-danger btn-sm">Eliminar</button>
                                        </form>
                                      </td>';
                                echo '</tr>';
                            }
                        } else {
                            echo '<tr><td colspan="5" class="text-center">No hay mensajes registrados.</td></tr>';
                        }

                        $conn->close();
                        ?>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
