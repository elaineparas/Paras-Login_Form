document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Stop form from refreshing the page

    const userField = document.getElementById('username');
    const passField = document.getElementById('password');
    const userError = document.getElementById('userError');
    const passError = document.getElementById('passError');
    const successMsg = document.getElementById('successMsg');

    let isValid = true;

    // Reset messages
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

    // Final check
    if (isValid) {
        successMsg.innerText = "Login successful! Redirecting...";
        console.log("Username: " + userField.value);
        console.log("Password: " + passField.value);
        
        // Clear fields after success
        userField.value = "";
        passField.value = "";
    }
});