console.log("script.js cargado correctamente");

// Manejador para el menú interactivo
document.getElementById('menu-toggle').addEventListener('click', function() {
    const nav = document.getElementById('navbar');
    nav.classList.toggle('active'); // Alterna la clase para mostrar/ocultar el menú

    // Verificar si el menú está activo
    if (nav.classList.contains('active')) {
        console.log("Menú abierto");
    } else {
        console.log("Menú cerrado");
    }

    this.setAttribute('aria-expanded', nav.classList.contains('active')); // Actualiza aria-expanded
});

// Cambio de imágenes de fondo
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showNextSlide() {
    slides[currentSlide].classList.remove('active'); // Quita la clase 'active' de la imagen actual
    currentSlide = (currentSlide + 1) % slides.length; // Cambia a la siguiente imagen
    slides[currentSlide].classList.add('active'); // Agrega la clase 'active' a la nueva imagen
}

setInterval(showNextSlide, 15000); // Cambia de imagen cada 3 segundos

document.addEventListener('DOMContentLoaded', () => {
    slides[currentSlide].classList.add('active'); // Muestra la primera imagen al cargar
});
