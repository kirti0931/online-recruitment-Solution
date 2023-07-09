function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Perform authentication logic here
    
    // Example validation (replace with your own authentication logic)
    if (username === 'admin' && password === 'password') {
      alert('Login successful!');
      return true;
    } else {
      alert('Invalid username or password.');
      return false;
    }
  }