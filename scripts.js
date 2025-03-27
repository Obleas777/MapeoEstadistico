// Mapa centrado en Rincón de Romos
var map = L.map('map').setView([22.229454, -102.320402], 14);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 18
}).addTo(map);

// Definir colonias en el mapa
var zonas = [
    {
        nombre: "Santa Cruz",
        coords: [
            [22.235941, -102.331601], [22.236359, -102.330914], [22.236299, -102.330421],
            [22.236001, -102.330442], [22.235842, -102.329863], [22.235584, -102.329885],
            [22.235663, -102.329713], [22.231453, -102.329691], [22.231254, -102.328790],
            [22.229943, -102.330099], [22.230122, -102.330421], [22.231254, -102.330442],
            [22.231552, -102.331322], [22.231433, -102.331515], [22.231592, -102.331880],
            [22.232803, -102.331451], [22.233022, -102.331987], [22.233220, -102.331923],
            [22.233439, -102.332524], [22.233637, -102.332524], [22.233796, -102.332953],
            [22.234452, -102.332803], [22.234929, -102.332395], [22.234869, -102.331987],
            [22.235564, -102.331730]
        ],
        color: "red"
    },
    {
        nombre: "San Jose",
        coords: [[22.230941, -102.321601], [22.231359, -102.320914], [22.231299, -102.320421], [22.231001, -102.320442]],
        color: "blue"
    }
];

// Función para obtener reportes de una colonia específica
function obtenerReportes(colonia, callback) {
    fetch('php/obtener_reportes.php')
        .then(response => response.json())
        .then(data => {
            // Filtrar reportes de la colonia seleccionada
            let reportesColonia = data.filter(reporte => reporte.colonia === colonia);
            callback(reportesColonia);
        })
        .catch(error => console.error('Error obteniendo reportes:', error));
}

// Dibujar las colonias en el mapa
zonas.forEach(zona => {
    let polygon = L.polygon(zona.coords, {
        color: "darkred",
        fillColor: zona.color,
        fillOpacity: 0.3,
        weight: 2,
        dashArray: "3, 3",
        zIndexOffset: 800
    }).addTo(map);

    // Evento de clic para mostrar reportes en el popup
    polygon.on('click', function () {
        obtenerReportes(zona.nombre, function (reportes) {
            let contenidoPopup = `<strong>${zona.nombre}</strong><br>`;
            if (reportes.length > 0) {
                reportes.forEach(rep => {
                    contenidoPopup += `<b>Tipo:</b> ${rep.tipo_falla}<br>
                                       <b>Descripción:</b> ${rep.descripcion}<hr>`;
                });
            } else {
                contenidoPopup += "No hay reportes registrados.";
            }
            polygon.bindPopup(contenidoPopup).openPopup();
        });
    });
});
