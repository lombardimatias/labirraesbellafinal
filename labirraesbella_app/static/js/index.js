document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector("#contact-form");
    const enviarBtn = document.querySelector("#enviar-btn");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Evitar que el formulario se envíe por defecto

            // Obtener los valores de los campos del formulario
            const nombreApellido = document.querySelector("#nombre-apellido").value;
            const email = document.querySelector("#email").value;
            const tipoConsulta = document.querySelector("#tipo-consulta").value;
            const mensaje = document.querySelector("#mensaje").value;
            const soyMayor = document.querySelector("#soy-mayor").checked;
            const soyMenor = document.querySelector("#soy-menor").checked;

            // Validar que se hayan completado todos los campos obligatorios
            if (nombreApellido.trim() === "" || email.trim() === "" || tipoConsulta.trim() === "" || mensaje.trim() === "") {
                alert("Por favor completa todos los campos obligatorios.");
                return;
            }

            // Validar el formato del correo electrónico
            if (!validateEmail(email)) {
                alert("Por favor ingresa una dirección de correo electrónico válida.");
                return;
            }

            // Validar que al menos una de las casillas de verificación esté seleccionada
            if (!soyMayor && !soyMenor) {
                alert("Por favor selecciona tu condición de edad.");
                return;
            }

            // Aquí podrías enviar el formulario utilizando AJAX o realizar otras acciones

            // Mostrar un mensaje de éxito
            alert("¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.");

            // Limpiar el formulario después de enviarlo
            contactForm.reset();
        });
    }

    // Función para validar el formato de correo electrónico
    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    // Función para actualizar fecha y hora
    function updateDateTime() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = now.toLocaleDateString('es-ES', options);
        const formattedTime = now.toLocaleTimeString('es-ES');
        document.querySelector("#fecha-hora").textContent = `${formattedDate} - ${formattedTime}`;
    }

    // Llamar a la función inmediatamente y luego cada minuto
    updateDateTime();
    setInterval(updateDateTime, 60000);

    // Función para obtener el clima desde wttr.in
    function fetchWeather() {
        const apiUrl = 'https://wttr.in/Buenos_Aires?format=%C+%t';

        fetch(apiUrl)
            .then(response => response.text())
            .then(data => {
                document.querySelector("#clima").textContent = `Clima: ${data}`;
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                document.querySelector("#clima").textContent = 'No se pudo obtener el clima.';
            });
    }

    // Llamar a la función para obtener el clima
    fetchWeather();
});
