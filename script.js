// Función para crear bolitas
function crearBolitas() {
    const numeroBolitas = 100; // Número de bolitas a crear
    for (let i = 0; i < numeroBolitas; i++) {
        const bolita = document.createElement("div");
        bolita.classList.add("bolita");
        
        // Tamaño y posición inicial aleatorios
        const tamaño = Math.random() * 80 + 20; // Tamaño entre 20px y 100px
        const posX = Math.random() * window.innerWidth;
        const retraso = Math.random() * -20 + "s";
        const duracion = Math.random() * 20 + 10 + "s"; // Duración entre 10s y 30s

        bolita.style.width = tamaño + "px";
        bolita.style.height = tamaño + "px";
        bolita.style.left = posX + "px";
        bolita.style.animationDelay = retraso;
        bolita.style.animationDuration = duracion;

        document.body.appendChild(bolita);
    }
}

// Llamar a la función al cargar la página
// crearBolitas();

// Función para mostrar y ocultar la información de la tarea
function toggleTarea() {
    const tareaInfo = document.getElementById("tarea-info");
    tareaInfo.classList.toggle("hidden");
}
function toggleTarea2() {
    const tareaInfo2 = document.getElementById("tarea-info2");
    tareaInfo2.classList.toggle("hidden");
}
function toggleTarea3() {
    const tareaInfo3 = document.getElementById("tarea-info3");
    tareaInfo3.classList.toggle("hidden");
}
function runCode() {
    const htmlCode = document.getElementById('htmlCode').value;
    const cssCode = document.getElementById('cssCode').value;
    const jsCode = document.getElementById('jsCode').value;

    const iframe = document.getElementById('output');
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

    // Crear la estructura de la página dentro del iframe
    iframeDoc.open();
    iframeDoc.write(`
        <html>
            <head>
                <style>${cssCode}</style>
            </head>
            <body>
                ${htmlCode}
                <script>${jsCode}<\/script>
            </body>
        </html>
    `);
    iframeDoc.close();
}