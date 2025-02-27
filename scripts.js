// Inicializar el mapa centrado en Rincón de Romos
var map = L.map('map').setView([22.232, -102.331], 15); // Ajusté el zoom para que la zona se vea mejor

// Capa de mapa base de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 18
}).addTo(map);

// Definir la zona con el problema
var zonaProblema = {
    nombre: "Santa cruz",
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
    problema: "Baches en calles principales",
    color: "red"
};

// Dibujar el polígono en el mapa
L.polygon(zonaProblema.coords, {
    color: zonaProblema.color,       // Color del borde
    fillColor: zonaProblema.color,   // Color de relleno
    fillOpacity: 0.5                 // Opacidad del relleno
}).addTo(map).bindPopup(`<strong>${zonaProblema.nombre}</strong><br>Problema: ${zonaProblema.problema}`);
