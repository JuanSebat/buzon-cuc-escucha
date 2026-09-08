const formulario = document.getElementById("formulario-sugerencia");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    alert("Gracias por compartir tu sugerencia con la Universidad de la Costa.");
    formulario.reset();
});
