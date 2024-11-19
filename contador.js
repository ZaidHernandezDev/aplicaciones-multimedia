let contador = 0;

// Escuchar el evento `blur` en la ventana
window.addEventListener("blur", () => {
  contador++;
  document.getElementById("contador").textContent = contador;
});


// Para el mailer
const btn = document.getElementById('enviar');

document.getElementById('examen')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_t5kgtph';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sus respuestas se han enviado correctamente');
      location.reload();
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});