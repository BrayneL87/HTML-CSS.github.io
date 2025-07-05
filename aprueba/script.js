document.addEventListener('DOMContentLoaded', () => {
    const rsvpBtn = document.getElementById('rsvpBtn');
    const rsvpForm = document.getElementById('rsvpForm');

    if (rsvpBtn && rsvpForm) {
        rsvpBtn.addEventListener('click', () => {
            rsvpForm.classList.toggle('hidden'); // Alterna la clase 'hidden'
            if (!rsvpForm.classList.contains('hidden')) {
                rsvpBtn.textContent = 'Ocultar Formulario';
            } else {
                rsvpBtn.textContent = 'Confirmar Asistencia';
            }
        });

        // Opcional: Manejar el envío del formulario (ej. enviar a un servicio backend)
        rsvpForm.querySelector('form').addEventListener('submit', (event) => {
            event.preventDefault(); // Prevenir el envío por defecto del formulario

            const name = document.getElementById('name').value;
            const guests = document.getElementById('guests').value;
            const message = document.getElementById('message').value;

            // Aquí puedes enviar estos datos a un servidor (usando fetch API, AJAX, etc.)
            // Por ejemplo, usando una API de Google Forms, Netlify Forms, o tu propio backend.
            console.log({
                name,
                guests,
                message
            });

            alert(`¡Gracias, ${name}! Tu asistencia ha sido registrada.`);
            rsvpForm.classList.add('hidden'); // Ocultar el formulario después de enviar
            rsvpBtn.textContent = 'Confirmar Asistencia';
            event.target.reset(); // Limpiar el formulario
        });
    }

    // Puedes agregar más funcionalidades con JavaScript, como:
    // 1. Un contador regresivo para la fecha de la boda.
    // 2. Efectos de paralaje en el fondo.
    // 3. Un carrusel de imágenes para la galería.
    // 4. Integración con Google Maps API para mostrar el mapa directamente.
});