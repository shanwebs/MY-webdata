document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const errorMsg = document.getElementById('error-msg');

  // Allowed credentials
  const allowedUsers = {
    Shan: 'shan2008',
    Nishaf: 'sabu',
    Rabeeh: 'rabeeh123'
  };

  // Move focus to password input when Enter pressed
  usernameInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      passwordInput.focus();
    }
  });

  // Submit form on Enter in password
  passwordInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      form.requestSubmit();
    }
  });

  form.addEventListener('submit', e => {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username || !password) {
      errorMsg.textContent = 'Please enter both username and password.';
      errorMsg.style.display = 'block';
      return;
    }

    if (!(username in allowedUsers)) {
      errorMsg.textContent = 'Username not found.';
      errorMsg.style.display = 'block';
      return;
    }

    if (allowedUsers[username] !== password) {
      errorMsg.textContent = 'Incorrect password.';
      errorMsg.style.display = 'block';
      return;
    }

    // Clear error
    errorMsg.style.display = 'none';

    // Ask for notification permission
    if (Notification && Notification.permission !== 'granted') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          new Notification('Login Successful!', {
            body: `Welcome back, ${username}`,
            icon: 'https://cdn-icons-png.flaticon.com/512/847/847969.png'
          });
        }
      });
    }

    // Redirect
    window.location.href = 'afterlg.html';
  });
});
