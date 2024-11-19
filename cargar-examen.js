window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    async function cargarExamen() {
        const response = await fetch('preguntas-examen.json');
        const { examen } = await response.json();

        const contenedorExamen = document.getElementById('preguntas-examen'); // Asegúrate de tener un div con id "examen" en tu HTML

        examen.tareas.forEach(tarea => {
            // Creamos el contenedor de la tarea
            const contenedorTarea = document.createElement('div');
            contenedorTarea.classList.add('seccion-tarea');

            // Título de la tarea
            const tituloTarea = document.createElement('h5');
            tituloTarea.innerText = `Tarea ${tarea.id}: ${tarea.titulo}`;
            contenedorTarea.appendChild(tituloTarea);

            let preguntasImpresas = [];
            const totalPreguntas = tarea.preguntas.length;
            let i = 0;

            // Selección aleatoria de dos preguntas
            while (i < 2) {
                const rand = Math.floor(Math.random() * totalPreguntas);
                if (!preguntasImpresas.includes(rand)) {
                    preguntasImpresas.push(rand);
                    i++;

                    const preguntaJSON = tarea.preguntas[rand];

                    // Creamos la pregunta
                    const pregunta = document.createElement('p');
                    pregunta.classList.add('pregunta');
                    pregunta.innerText = `${i}.- ${preguntaJSON.pregunta}`;
                    contenedorTarea.appendChild(pregunta);
                    const inputPregunta = document.createElement("input");
                    inputPregunta.setAttribute('type', 'hidden');
                    inputPregunta.setAttribute('name', `pregunta${tarea.id}${i}`);
                    inputPregunta.setAttribute('value', preguntaJSON.pregunta);
                    contenedorTarea.appendChild(inputPregunta);

                    // Creamos las opciones
                    const opcionesContainer = document.createElement('div');
                    opcionesContainer.classList.add('opciones');

                    preguntaJSON.opciones.forEach((opcion, index) => {
                        const opcionLabel = document.createElement('label');
                        opcionLabel.classList.add('opcion');

                        const radioBtn = document.createElement('input');
                        radioBtn.setAttribute('type', 'radio');
                        radioBtn.setAttribute('name', `respuesta${tarea.id}${i}`);
                        radioBtn.setAttribute('value', opcion);

                        opcionLabel.appendChild(radioBtn);
                        opcionLabel.appendChild(document.createTextNode(opcion));
                        opcionesContainer.appendChild(opcionLabel); 
                    });

                    contenedorTarea.appendChild(opcionesContainer);
                }
            }

            // Agregamos la tarea al contenedor principal
            contenedorExamen.appendChild(contenedorTarea);
        });
    }

    cargarExamen();
});
