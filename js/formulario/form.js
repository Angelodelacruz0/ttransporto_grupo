document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formulario-contacto');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            // Obtener los valores de los campos del formulario
            const nombre = document.querySelector('input[placeholder="Escriba su nombre y apellidos"]').value;
            const celular = document.querySelector('input[placeholder="Escriba su numero"]').value;
            const ciudad = document.querySelector('input[placeholder="Escriba su ciudad"]').value;
            const correo = document.querySelector('input[placeholder="Escriba su correo electronico"]').value;
            const mensaje = document.querySelector('textarea[placeholder="Escriba aqui su mensaje"]').value;

            // Validar que todos los campos tengan valores
            if (nombre && celular && ciudad && correo && mensaje) {
                // Enviar el formulario por correo electrónico usando SMTP.js
                Email.send({
                    SecureToken: "DEFB8D3EBD82B03CEE03D2BA376A443589899863A33AA171D16D41F3F3D5BD7B73A987D57810893174F5B897E6CE6405",  // Aquí deberías reemplazar con tu SecureToken de SMTP.js
                    To: 'angelodelacruz607@gmail.com',  // Correo destinatario
                    From: correo,  // Correo del remitente (tomado del formulario)
                    Subject: `Contacto desde la página web: ${nombre}`,
                    Body: `
                        Nombre: ${nombre}<br>
                        Celular: ${celular}<br>
                        Ciudad: ${ciudad}<br>
                        Correo: ${correo}<br>
                        Mensaje: ${mensaje}
                    `  // Cuerpo del correo
                }).then(
                    message => {
                        alert("Formulario enviado exitosamente.");
                        // Aquí podrías agregar lógica adicional después de enviar el formulario
                        // Por ejemplo, limpiar el formulario o redirigir a una página de éxito.
                        form.reset();  // Limpiar el formulario después de enviarlo
                    }
                ).catch(
                    error => alert("Error al enviar el formulario: " + error)
                );
            } else {
                alert("Por favor, complete todos los campos del formulario.");
            }
        });
    } else {
        console.error("El formulario no se encontró en el DOM.");
    }
});
