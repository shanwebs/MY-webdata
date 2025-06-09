// profile.js

document.addEventListener('DOMContentLoaded', () => {
  // Get elements
  const usernameInput = document.getElementById('username');
  const dobInput = document.getElementById('dob');
  const hobbyInput = document.getElementById('hobby');

  // Load data from localStorage
  const username = localStorage.getItem('username') || '';
  const dob = localStorage.getItem('dob') || '';
  const hobby = localStorage.getItem('hobby') || '';

  // Set values to inputs
  usernameInput.value = username;
  dobInput.value = dob;
  hobbyInput.value = hobby;

  // Username should be readonly (already set in HTML)

  // Optional: If you want to save changes to dob and hobby back to localStorage on input change:
  dobInput.addEventListener('input', () => {
    localStorage.setItem('dob', dobInput.value);
  });

  hobbyInput.addEventListener('input', () => {
    localStorage.setItem('hobby', hobbyInput.value);
  });
});
