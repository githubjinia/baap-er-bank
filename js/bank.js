document.getElementById('login-button').addEventListener('click', function () {
    console.log('login clicked');
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if (userEmail == 'Sharif@gmail.com' && userPassword == 'secret');
    window.location.href = 'bankpage.html';
})