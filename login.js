// Function to handle the form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the form
    const username = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Define valid credentials (for demonstration purposes only)
    const validUsername = 'vedant';
    const validPassword = 'vedant';

    // Get the error message element
    const errorMessage = document.getElementById('errorMessage');

    // Validate the credentials
    if (username === validUsername && password === validPassword) {
        // Clear any previous error messages
        errorMessage.textContent = '';

        // Show an alert message for successful login
        alert('Login successful!');

        // delay time daldo
        setTimeout(function() {
            window.location.href = 'redirect.html'; // Redirect to a separate page first
        }, 1000); // 2000 milliseconds (2 seconds) delay
    } else {
        // Show error message if credentials are invalid
        errorMessage.textContent = 'Invalid username or password.';
    }
});
