document.addEventListener('DOMContentLoaded', () => { 
  const form = document.getElementById('loginForm');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const errorMsg = document.getElementById('error-msg');

  // Allowed credentials
  const allowedUsers = {
    Shan: 'shan2008',
    Nishaf: 'sabu',
    Rabeeh: 'rabeeh123', // You can add more users here
  };

  // Move focus to password input when Enter pressed in username input
  usernameInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      passwordInput.focus();
    }
  });

  // Submit form when Enter pressed in password input
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

    // Success! Clear error
    errorMsg.style.display = 'none';

    // Save username and login time to localStorage for dashboard page
    localStorage.setItem('username', username);
    localStorage.setItem('loginTime', new Date().toLocaleString());

    // Ask for notification permission
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          new Notification('Welcome!', {
            body: `Hello ${username}, you’ve logged in successfully!`,
            icon: 'https://cdn-icons-png.flaticon.com/512/545/545705.png'
          });
        }
      });
    }

    // Redirect to dashboard page after login success
    window.location.href = 'afterlg.html';
  });
});
