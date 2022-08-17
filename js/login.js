document.getElementById('login-btn').addEventListener('click', function () {

    const userEmailField = document.getElementById('user-email');
    const email = userEmailField.value;

    const userPasswordField = document.getElementById('user-password');
    const password = userPasswordField.value;

    if (email === 'sontan@baap.com' && password === 'secreat') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Wrong email or password!');
    }
});