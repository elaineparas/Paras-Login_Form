// --- Elements ---
const loginForm = document.getElementById('loginForm');
const userField = document.getElementById('username');
const passField = document.getElementById('password');
const userError = document.getElementById('userError');
const passError = document.getElementById('passError');
const successMsg = document.getElementById('successMsg');
const togglePassword = document.querySelector('#togglePassword');

// --- 1. Password Toggle ---
togglePassword.addEventListener('click', function () {
    // Toggle the type attribute
    const type = passField.getAttribute('type') === 'password' ? 'text' : 'password';
    passField.setAttribute('type', type);
    
    // Toggle the button text
    this.textContent = type === 'password' ? 'Show' : 'Hide';
});

// --- 2. Live Validation ---
[userField, passField].forEach(input => {
    input.addEventListener('input', () => {
        const errorElement = input.id === 'username' ? userError : passError;
        errorElement.style.display = 'none';
        successMsg.innerText = '';
    });
});

// --- 3. Form Submission ---
loginForm.addEventListener('submit', function(e) {
    e.preventDefault(); 

    let isValid = true;

    // Reset UI
    userError.style.display = 'none';
    passError.style.display = 'none';
    successMsg.innerText = '';

    // Validate Username
    if (userField.value.trim() === "") {
        userError.innerText = "Username is required";
        userError.style.display = 'block';
        isValid = false;
    }

    // Validate Password
    if (passField.value.trim() === "") {
        passError.innerText = "Password is required";
        passError.style.display = 'block';
        isValid = false;
    }

    // Success Action
    if (isValid) {
        successMsg.innerText = "Login successful! Redirecting...";
        
        // Log values (standard for testing)
        console.log("Username: " + userField.value);
        console.log("Password: " + passField.value);
        
        // Clear fields
        userField.value = "";
        passField.value = "";
    }
});