document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        document.getElementById('errorMessage').innerText = 'Passwords do not match!';
        return;
    }

    // Proceed with form submission (e.g., send data to a server or perform further validations)
    document.getElementById('errorMessage').innerText = '';
    alert('Registration successful!');
});
