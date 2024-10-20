// Seleccionar el botón y el audio
const playButton = document.getElementById('playButton');
const cancion = document.getElementById('cancion');

// Cambiar el fondo del body usando la imagen desde la URL
document.body.style.backgroundImage = "url('https://www.proyectosendo.es/wp-content/uploads/2018/06/Wall-E-1-1024x576.jpg')";

// Controlar la música al hacer clic en el botón
playButton.addEventListener('click', function() {
    if (cancion.paused) {
        cancion.play();
        playButton.textContent = 'Pausar Música';
    } else {
        cancion.pause();
        playButton.textContent = 'Reproducir Música';
    }
});
