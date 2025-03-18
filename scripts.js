// Inicializar el mapa centrado en Rincón de Romos
var map = L.map('map').setView([22.229454, -102.320402], 14);

// Capa de mapa base de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 18
}).addTo(map);

// Definir la zona de Santa Cruz
var zonaSantaCruz = {
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
    problema: "Baches en calles principales",
    color: "red"
};

// Definir la zona de Barrio de Chora
var zonaBarrioChora = {
    nombre: "Barrio de Chora",
    coords: [
        [22.235683, -102.329734], [22.235743, -102.325507], [22.233638, -102.325120],
        [22.231810, -102.324262], [22.229903, -102.324348], [22.229665, -102.323833],
        [22.228751, -102.323919], [22.228473, -102.327094], [22.227957, -102.327181],
        [22.227798, -102.329112], [22.227222, -102.329198], [22.227222, -102.330872],
        [22.227580, -102.330914], [22.227699, -102.331215], [22.228016, -102.331257],
        [22.228136, -102.331644], [22.228414, -102.331472], [22.228493, -102.329369],
        [22.230043, -102.330056], [22.231314, -102.328854], [22.231512, -102.329626],
        [22.235564, -102.329712]
    ],
    problema: "Drenaje colapsado",
    color: "orange"
};

// Definir la zona de Solidaridad
var zonaSolidaridad = {
    nombre: "Solidaridad",
    coords: [
        [22.225708, -102.330982], [22.224946, -102.331913], [22.224196, -102.331610],
        [22.223287, -102.331545], [22.223288, -102.330387], [22.220903, -102.330751],
        [22.220586, -102.329829], [22.220050, -102.329894], [22.219414, -102.328584],
        [22.219136, -102.328455], [22.219453, -102.328262], [22.219052, -102.326889],
        [22.219170, -102.326535], [22.219573, -102.326363], [22.219146, -102.324792],
        [22.222314, -102.324325], [22.222424, -102.324985], [22.225529, -102.324427],
        [22.225719, -102.330952]
    ],
    problema: "Alcantarillado en mal estado",
    color: "blue"
};
var zonaSanJose = {
    nombre: "San José",
    coords: [
        [22.225512, -102.322993], [22.225472, -102.321212], [22.225492, -102.321121],
        [22.222562, -102.319130], [22.222413, -102.319994], [22.221186, -102.319184],
        [22.220978, -102.319286], [22.220913, -102.319415], [22.220804, -102.321469],
        [22.222701, -102.322547], [22.222646, -102.322961], [22.224732, -102.322961],
        [22.224810, -102.323017], [22.225496, -102.323006]
    ],
    problema: "Falta de alumbrado público",
    color: "green"
};
// Definir la zona de El Chaveño
var zonaElChaveño = {
    nombre: "El Chaveño",
    coords: [
        [22.232966, -102.316758], [22.232966, -102.316382], [22.232012, -102.316425],
        [22.231983, -102.315009], [22.232251, -102.314988], [22.232261, -102.314183],
        [22.232196, -102.314188], [22.232176, -102.313625], [22.231541, -102.313636],
        [22.231397, -102.308261], [22.232747, -102.308100], [22.232539, -102.303701],
        [22.228169, -102.304312], [22.228626, -102.307118], [22.229110, -102.308422],
        [22.229182, -102.308465], [22.227648, -102.308625], [22.227860, -102.311692],
        [22.227432, -102.311719], [22.227462, -102.313511], [22.227204, -102.313532],
        [22.227428, -102.318253], [22.228304, -102.318186], [22.228339, -102.318146],
        [22.231633, -102.317912], [22.231609, -102.316797], [22.232959, -102.316721]
    ],
    problema: "Falta de recolección de basura",
    color: "purple"
};

var zonaElPotrero = {
    nombre: "El Potrero",
    coords: [
        [22.224719, -102.316285], [22.224630, -102.315534], [22.224511, -102.315008],
        [22.224451, -102.313828], [22.227450, -102.313527], [22.227430, -102.311725],
        [22.227848, -102.311682], [22.227649, -102.309043], [22.223895, -102.309021],
        [22.223537, -102.316274]
    ],
    problema: "Falta de alumbrado público",
    color: "green"
};
var zonaElBajio = {
    nombre: "El Bajío",
    coords: [
        [22.247332, -102.311993], [22.247233, -102.304612], [22.250827, -102.299827], 
        [22.250669, -102.299591], [22.247153, -102.304279], [22.247094, -102.304226], 
        [22.246538, -102.304247], [22.246597, -102.304923], [22.244879, -102.306693], 
        [22.244651, -102.305658], [22.243765, -102.305749], [22.243787, -102.306032], 
        [22.242263, -102.306238], [22.242303, -102.307000], [22.242097, -102.307012], 
        [22.242213, -102.310638], [22.242673, -102.310011], [22.243221, -102.310030], 
        [22.243234, -102.309681], [22.243872, -102.309643], [22.244314, -102.309525], 
        [22.244314, -102.309166], [22.246168, -102.308262], [22.246466, -102.312060], 
        [22.246456, -102.312049], [22.247370, -102.312006], [22.247260, -102.304604]
    ],
    problema: "Falta de iluminación pública",
    color: "brown"
};
var zonaEscaleras = {
    nombre: "Escaleras",
    coords: [
        [22.256666, -102.333249], [22.256159, -102.331200], [22.256418, -102.331136],
        [22.256189, -102.329956], [22.256080, -102.329934], [22.256060, -102.329848],
        [22.256219, -102.329580], [22.255315, -102.329537], [22.255305, -102.329398],
        [22.254938, -102.329376], [22.254918, -102.329505], [22.252763, -102.329526],
        [22.252634, -102.328604], [22.252624, -102.328572], [22.250360, -102.329151],
        [22.250301, -102.328893], [22.248682, -102.328861], [22.248881, -102.329880],
        [22.247689, -102.330492], [22.247659, -102.331222], [22.247173, -102.331361],
        [22.245902, -102.330052], [22.245683, -102.330192], [22.245663, -102.331737],
        [22.245038, -102.331801], [22.243965, -102.331275], [22.243783, -102.331462],
        [22.244185, -102.331944], [22.244582, -102.334605], [22.243917, -102.334594],
        [22.243887, -102.335700], [22.245009, -102.335775], [22.246002, -102.336139],
        [22.246409, -102.336064], [22.246499, -102.335549], [22.246707, -102.335463],
        [22.247383, -102.336011], [22.249230, -102.335860], [22.249557, -102.336279],
        [22.250530, -102.336096], [22.250610, -102.336451], [22.251732, -102.336193],
        [22.253177, -102.336086], [22.253177, -102.336193], [22.254905, -102.335614],
        [22.254348, -102.334970], [22.255639, -102.334809], [22.255560, -102.333618],
        [22.256712, -102.333221]
    ],
    problema: "Escaleras en mal estado",
    color: "blue"
};
var zonaBoquilla = {
    nombre: "La Boquilla",
    coords: [
        [22.263593, -102.366974], [22.261905, -102.365815], [22.258052, -102.367553],
        [22.256642, -102.366094], [22.255073, -102.366223], [22.254656, -102.367081],
        [22.255212, -102.368648], [22.259959, -102.370815], [22.260475, -102.371888],
        [22.261666, -102.372467], [22.262441, -102.372532], [22.263553, -102.373562],
        [22.264923, -102.372939], [22.265449, -102.372178], [22.263285, -102.369613],
        [22.263752, -102.367929], [22.263632, -102.366878]
    ],
    problema: "Drenaje obstruido",
    color: "green"
};

// Santa Cruz (prioridad alta)
L.polygon(zonaSantaCruz.coords, {
    color: "darkred",
    fillColor: zonaSantaCruz.color,
    fillOpacity: 0.6, // Aumentar opacidad para que predomine
    weight: 3, // Un borde más grueso para que sobresalga
    zIndexOffset: 1200 // Mayor prioridad
}).addTo(map).bindPopup(`<strong>${zonaSantaCruz.nombre}</strong><br>Problema: ${zonaSantaCruz.problema}`);

// Barrio de Chora (prioridad media, debajo de Santa Cruz)
L.polygon(zonaBarrioChora.coords, {
    color: "darkorange",
    fillColor: zonaBarrioChora.color,
    fillOpacity: 0.3, // Reducir opacidad para evitar que opaque
    weight: 2, 
    dashArray: "6, 6", // Hacer el borde más segmentado para diferenciarlo
    zIndexOffset: 800 // Menor prioridad que Santa Cruz
}).addTo(map).bindPopup(`<strong>${zonaBarrioChora.nombre}</strong><br>Problema: ${zonaBarrioChora.problema}`);


// Solidaridad (prioridad baja para no cubrir otras zonas)
L.polygon(zonaSolidaridad.coords, {
    color: "darkblue",
    fillColor: zonaSolidaridad.color,
    fillOpacity: 0.3,
    weight: 2,
    dashArray: "3, 3",
    zIndexOffset: 800
}).addTo(map).bindPopup(`<strong>${zonaSolidaridad.nombre}</strong><br>Problema: ${zonaSolidaridad.problema}`);
//San jose
L.polygon(zonaSanJose.coords, {
    color: "darkgreen",
    fillColor: zonaSanJose.color,
    fillOpacity: 0.35,
    weight: 2,
    dashArray: "4, 4",
    zIndexOffset: 750
}).addTo(map).bindPopup(`<strong>${zonaSanJose.nombre}</strong><br>Problema: ${zonaSanJose.problema}`);
//El chaveño
L.polygon(zonaElChaveño.coords, {
    color: "purple",
    fillColor: zonaElChaveño.color,
    fillOpacity: 0.4,
    weight: 2,
    dashArray: "3, 3",
    zIndexOffset: 700
}).addTo(map).bindPopup(`<strong>${zonaElChaveño.nombre}</strong><br>Problema: ${zonaElChaveño.problema}`);
//Potrero
L.polygon(zonaElPotrero.coords, {
    color: "green",
    fillColor: zonaElPotrero.color,
    fillOpacity: 0.5,
    weight: 2,
    dashArray: "3, 3",
    zIndexOffset: 1000
}).addTo(map).bindPopup(`<strong>${zonaElPotrero.nombre}</strong><br>Problema: ${zonaElPotrero.problema}`);
//  El Bajío en el mapa
L.polygon(zonaElBajio.coords, {
    color: "brown",     // Borde verde oscuro
    fillColor: zonaElBajio.color, 
    fillOpacity: 0.4,       // Opacidad media
    weight: 2,              // Grosor del borde
    dashArray: "3, 3",      // Borde punteado
    zIndexOffset: 750       // Jerarquía superior en el mapa
}).addTo(map).bindPopup(`<strong>${zonaElBajio.nombre}</strong><br>Problema: ${zonaElBajio.problema}`);
//  Escaleras en el mapa
L.polygon(zonaEscaleras.coords, {
    color: "darkblue",      
    fillColor: zonaEscaleras.color,
    fillOpacity: 0.5,        
    weight: 2.5,
    dashArray: "3, 3",      
    zIndexOffset: 800        
}).addTo(map).bindPopup(`<strong>${zonaEscaleras.nombre}</strong><br>Problema: ${zonaEscaleras.problema}`);
//  La Boquilla en el mapa
L.polygon(zonaBoquilla.coords, {
    color: "darkgreen",     
    fillColor: zonaBoquilla.color,
    fillOpacity: 0.5,       
    weight: 2.5,            
    zIndexOffset: 700,
    dashArray: "3, 3",      // Borde punteado
      
}).addTo(map).bindPopup(`<strong>${zonaBoquilla.nombre}</strong><br>Problema: ${zonaBoquilla.problema}`);