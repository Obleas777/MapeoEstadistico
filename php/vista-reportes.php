<!DOCTYPE html>
<html lang="es">

<head>
<meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="description" content="Plataforma para el mapeo estadístico y la recolección de información social." />
    <meta name="author" content="Presidencia Municipal De Rincon de Romos" />
    <title>Plataforma de Transparencia y Participación Ciudadana</title>
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
            <h1 class="display-5 fw-bolder text-white mb-2">Panel de Administración</h1>
            <p class="lead text-white-50 mb-4">Gestione los reportes y datos de participación ciudadana.</p>
        </div>
    </header>

    <section class="py-5" id="reportes">
        <div class="container px-5 my-5">
            <h2 class="fw-bolder">Reportes Registrados</h2> <br> <br/>
            <div class="table-responsive">
                <table class="table table-bordered table-striped">
                    <thead >
                        <tr>
                            <th>Colonia</th>
                            <th>Calle</th>
                            <th>Tipo de Falla</th>
                            <th>Descripción</th>
                            <th>Imagen</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        include 'conexion.php';
                        $sql = "SELECT * FROM reportes";
                        $result = $conn->query($sql);

                        if ($result->num_rows > 0) {
                            while ($row = $result->fetch_assoc()) {
                                echo '<tr>';
                                echo '<td>' . htmlspecialchars($row['colonia']) . '</td>';
                                echo '<td>' . htmlspecialchars($row['calle']) . '</td>';
                                echo '<td>' . htmlspecialchars($row['tipo_falla']) . '</td>';
                                echo '<td>' . htmlspecialchars($row['descripcion']) . '</td>';
                                echo '<td>';
                                if (!empty($row['imagen'])) {
                                    echo '<a href="' . htmlspecialchars($row['imagen']) . '" target="_blank">Ver Imagen</a>';
                                } else {
                                    echo 'No disponible';
                                }
                                echo '</td>';
                                echo '</tr>';
                            }
                        } else {
                            echo '<tr><td colspan="5" class="text-center">No hay reportes registrados.</td></tr>';
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
