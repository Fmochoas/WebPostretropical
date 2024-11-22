// scripts.js 
document.addEventListener('DOMContentLoaded', function() { 
    const footer = document.getElementById('footer'); 
    // Mostrar footer al cargar la página 
    setTimeout(() => footer.classList.remove('hidden'), 500); 
    // Función para ocultar el footer después de un tiempo 
    function hideFooter() { 
        footer.classList.add('hidden'); 
    } 
    // Mostrar footer cuando el usuario haga scroll hacia arriba 
    let lastScrollY = window.scrollY; 
    window.addEventListener('scroll', () => { 
        if (window.scrollY < lastScrollY) { 
            footer.classList.remove('hidden'); 
        } else { 
            hideFooter(); 
        } 
        lastScrollY = window.scrollY; 
    }); 
    // Ocultar el footer después de 5 segundos setTimeout(hideFooter, 5000); 
    });