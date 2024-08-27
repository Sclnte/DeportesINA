document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;
    const errorMessage = document.getElementById('register-error-message');

    // Simulación de almacenamiento de usuario (puedes reemplazar esto con una solicitud real al servidor)
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    errorMessage.textContent = 'Registro exitoso. Ahora puedes iniciar sesión.';
    setTimeout(() => {
        window.location.href = 'login.html'; // Redirigir a la página de inicio de sesión
    }, 2000);
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const errorMessage = document.getElementById('login-error-message');

    // Simulación de autenticación (puedes reemplazar esto con una solicitud real al servidor)
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        window.location.href = 'index.html'; // Redirigir a la página principal
    } else {
        errorMessage.textContent = 'Usuario o contraseña incorrectos.';
    }
});
