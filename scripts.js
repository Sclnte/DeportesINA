document.addEventListener("DOMContentLoaded", function() {
    var accordions = document.querySelectorAll(".accordion");

    accordions.forEach(function(accordion) {
        accordion.addEventListener("click", function() {
            this.classList.toggle("active");

            var panel = this.nextElementSibling;

            // Si el panel está colapsado, lo expandimos
            if (!panel.style.maxHeight) {
                panel.style.display = "block"; // Asegurarse de que se muestre el contenido
                panel.style.maxHeight = panel.scrollHeight + "px";
            } else {
                // Si el panel está expandido, lo colapsamos
                panel.style.maxHeight = null;

                // Para una mejor animación, después de la transición, ocultamos el contenido
                panel.addEventListener('transitionend', function() {
                    panel.style.display = "none";
                }, { once: true });
            }
        });
    });
});
