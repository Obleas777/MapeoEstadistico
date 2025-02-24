// Inicializar el mapa centrado en Rincón de Romos
var map = L.map('map').setView([22.229454, -102.320402], 14); // Coordenadas del centro de Rincón de Romos

// Capa de mapa base de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 18
}).addTo(map);

var colonias = [
    {
        nombre: "Rincón de Romos Centro",
        coords: [
            [22.2300, -102.3240],  // Esquina superior izquierda
            [22.2300, -102.3220],  // Esquina superior derecha
            [22.2280, -102.3220],  // Esquina inferior derecha
            [22.2280, -102.3240]   // Esquina inferior izquierda
        ],
        problema: "Fallas de agua",
        color: "blue"
    },
    {
        nombre: "Colonia",
        coords: [
            [22.2230, -102.3220],  
            [22.2230, -102.3200],  
            [22.2210, -102.3200],  
            [22.2210, -102.3220]   
        ],
        problema: "Alumbrado público apagado",
        color: "yellow"
    },
    {
        nombre: "Colonia",
        coords: [
            [22.2260, -102.3160],
            [22.2260, -102.3140],
            [22.2240, -102.3140],
            [22.2240, -102.3160]
        ],
        problema: "Baches en calles principales",
        color: "red"
    }
];

// Dibujar polígonos de colonias y asignar popups
colonias.forEach(function (colonia) {
    L.polygon(colonia.coords, {
        color: colonia.color,
        fillColor: colonia.color,
        fillOpacity: 0.5
    }).addTo(map).bindPopup(`<strong>${colonia.nombre}</strong><br>Problema: ${colonia.problema}`);
});
