document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('.login');
    const registerForm = document.querySelector('.register');
    const registerLink = document.querySelector('.register-link');
    const loginLink = document.querySelector('.login-link');

    registerLink.addEventListener('click', function (event) {
        event.preventDefault();
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    });

    loginLink.addEventListener('click', function (event) {
        event.preventDefault();
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    });
});
