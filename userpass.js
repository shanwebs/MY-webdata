document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const errorMsg = document.getElementById('error-msg');

  // Allowed credentials
  const allowedUsers = {
    Shan: 'shan2008',
    Nishaf:'sabu',
    Rabeeh:'rabeeh123',// you can add more users here
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

    // Save username to localStorage for dashboard page
    localStorage.setItem('username', username);

    // Redirect to dashboard page after login success
    window.location.href = 'afterlg.html';
  });
});
