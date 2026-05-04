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

const strengthBar = document.getElementById('strengthBar');
const strengthText = document.getElementById('strengthText');

passField.addEventListener('input', () => {
    const val = passField.value;
    let strength = 0;

    if (val.length >= 8) strength++; // Length check
    if (/[A-Z]/.test(val)) strength++; // Uppercase check
    if (/[0-9]/.test(val)) strength++; // Number check
    if (/[^A-Za-z0-9]/.test(val)) strength++; // Special char check

    switch(strength) {
        case 0:
        case 1:
            strengthBar.style.width = "25%";
            strengthBar.style.backgroundColor = "#ff4d4d";
            strengthText.innerText = "Weak";
            break;
        case 2:
            strengthBar.style.width = "50%";
            strengthBar.style.backgroundColor = "#ffa500";
            strengthText.innerText = "Fair";
            break;
        case 3:
            strengthBar.style.width = "75%";
            strengthBar.style.backgroundColor = "#2ecc71";
            strengthText.innerText = "Good";
            break;
        case 4:
            strengthBar.style.width = "100%";
            strengthBar.style.backgroundColor = "#27ae60";
            strengthText.innerText = "Strong";
            break;
    }

    if (val === "") {
        strengthBar.style.width = "0%";
        strengthText.innerText = "";
    }
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