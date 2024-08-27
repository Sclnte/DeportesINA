document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Simulación de autenticación (puedes reemplazar esto con una solicitud real al servidor)
    if (username === 'admin' && password === 'admin123') {
        window.location.href = 'index.html'; // Redirigir a la página principal
    } else {
        errorMessage.textContent = 'Usuario o contraseña incorrectos.';
    }
});
