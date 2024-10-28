let contador = 0;

    // Escuchar el evento `blur` en la ventana
    window.addEventListener("blur", () => {
      contador++;
      document.getElementById("contador").textContent = contador;
    });
    // Selecciona todos los inputs de radio para la pregunta 1
const options = document.querySelectorAll('input[name="question1"]');

// Función para obtener el valor seleccionado y sumarlo
function calculateScore() {
  let score = 0;
  options.forEach((option) => {
    if (option.checked) {
      score += parseInt(option.value);
    }
  });
  alert(`Tu puntaje es: ${score}`);
}
function calculo(){
    // Seleccionamos todas las opciones de radio que tienen el name "var1"
    var opciones = document.getElementsByName("var1");
    var valorSeleccionado = null;

    // Iteramos sobre las opciones para encontrar la seleccionada
    for (var i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            valorSeleccionado = opciones[i].value;
            break;
        }
    }

    // Mostramos el valor de la opción seleccionada
    alert(valorSeleccionado);

    // Verificar si se seleccionó una opción
    if (valorSeleccionado !== null) {
        // Crear el enlace mailto
        window.location.href = `mailto:Kwiboazuareli@gmail.com?subject=Resultado%20de%20la%20encuesta&body=La%20respuesta%20seleccionada%20es:%20${valorSeleccionado}`;
    } else {
        alert("Por favor selecciona una opción.");
    }
}
}
