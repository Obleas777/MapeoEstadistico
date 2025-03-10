// Seleccionamos el formulario
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault(); // Evita el envío tradicional del formulario

    // Crear un objeto FormData con los datos del formulario
    var formData = new FormData(this);

    // Usar fetch para enviar los datos al servidor de forma asincrónica
    fetch("php/procesar.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.json()) // Esperamos una respuesta JSON
    .then(data => {
        console.log(data); // Ver el contenido de la respuesta
        if (data.success) {
            // Si la inserción fue exitosa, mostramos el mensaje del modal
            showPopup();
        } else {
            // Si hubo un error al guardar el mensaje
            alert(data.error || "Hubo un error al procesar los datos.");
        }
    })
    .catch(error => {
        // Si ocurre algún error en la solicitud AJAX
        console.error('Error:', error);
        alert("Hubo un error al enviar el formulario.");
    });
});

// Función para mostrar el modal
function showPopup() {
    var popup = document.getElementById("popupModal");
    if (popup) {
        popup.style.display = "flex"; // Mostrar el popup modal
    }
}

// Cerrar el modal cuando se haga clic fuera del contenido
window.onclick = function(event) {
    var popup = document.getElementById("popupModal");
    if (event.target === popup) {
        popup.style.display = "none"; // Cerrar el modal si se hace clic fuera
    }
};

// Función para cerrar el modal cuando se haga clic en el botón "Ok"
document.getElementById("closePopup").addEventListener("click", function() {
    var popup = document.getElementById("popupModal");
    if (popup) {
        popup.style.display = "none"; // Cerrar el modal al hacer clic en "Ok"
    }
});
