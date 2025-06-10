document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const errorMsg = document.getElementById('error-msg');

  // Allowed credentials (loaded from localStorage if available)
  let allowedUsers = {
    Shan: 'shan2008',
    Nishaf: 'sabu',
    Rabeeh: 'rabeeh123'
    // You can add more users here
  };

  // Load any additional users from localStorage
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith('userpass_')) {
      const uname = key.replace('userpass_', '');
      allowedUsers[uname] = localStorage.getItem(key);
    }
  }

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

    // Save username to localStorage for dashboard page
    localStorage.setItem('username', username);

    // Redirect to dashboard page after login success
    window.location.href = 'afterlg.html';
  });
});

// Function to save a new username/password (for the A window)
function saveUserPass(username, password) {
  // Save to localStorage so it can be used for login
  localStorage.setItem('userpass_' + username, password);
}
