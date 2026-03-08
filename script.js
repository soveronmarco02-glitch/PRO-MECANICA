document.querySelector('.btn-llamar').addEventListener('click', function() {
    console.log("Intento de llamada registrado");
    // Aquí podrías agregar Google Analytics después
});

// Efecto simple al hacer scroll
window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = '#000';
    } else {
        header.style.background = 'rgba(0,0,0,0.9)';
    }
});
