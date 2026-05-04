var form = document.getElementById('loginForm');
var username = document.getElementById('username');
var password = document.getElementById('password');

form.onsubmit = function(e) {
  e.preventDefault();
  var u = username.value;
  var p = password.value;
  if (p.length < 6 || p.length > 8) {
    alert('Password must be 6 to 8 characters');
    return;
  }
  alert('Hello ' + u + '! (demo)');
  console.log('User:', u);
  form.reset();
};
