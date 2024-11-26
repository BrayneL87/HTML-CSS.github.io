const calendario = document.getElementById('calendario');
const cuerpoCalendario = calendario.querySelector('.cuerpo');

// Función para generar el calendario
function generarCalendario(mes, anio) {
  // ... Lógica para generar el calendario ...
  cuerpoCalendario.innerHTML = htmlCalendario; // Insertar el HTML generado

  // Agregar evento click a cada celda
  const celdas = cuerpoCalendario.querySelectorAll('div');
  celdas.forEach(celda => {
    celda.addEventListener('click', () => {
      // Código para manejar la selección de la fecha
      console.log('Fecha seleccionada:', celda.textContent);
    });
  });
}

// Ejemplo para generar el calendario del mes actual
const fechaActual = new Date();
generarCalendario(fechaActual.getMonth(), fechaActual.getFullYear());