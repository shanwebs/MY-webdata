// profile.js

document.addEventListener('DOMContentLoaded', () => {
  // Get elements
  const usernameInput = document.getElementById('username');
  const dobInput = document.getElementById('dob');
  const hobbyInput = document.getElementById('hobby');
  const hobbyOtherInput = document.getElementById('hobbyOther');
  const emailInput = document.getElementById('email');

  // Load username
  const username = localStorage.getItem('username') || '';

  // Load profile data object
  let profileData = {};
  try {
    profileData = JSON.parse(localStorage.getItem(username + '_profile')) || {};
  } catch (e) {
    profileData = {};
  }

  // Set values to inputs if they exist
  if (usernameInput) usernameInput.value = username;
  if (dobInput && profileData.dob) dobInput.value = profileData.dob;
  if (emailInput && profileData.email) emailInput.value = profileData.email;

  // Handle hobby and hobbyOther
  if (hobbyInput && profileData.hobby) {
    // If hobby matches one of the select options, select it
    let found = false;
    for (let i = 0; i < hobbyInput.options.length; i++) {
      if (hobbyInput.options[i].value === profileData.hobby) {
        hobbyInput.value = profileData.hobby;
        found = true;
        break;
      }
    }
    // If not found, set to "Other" and fill hobbyOther
    if (!found) {
      hobbyInput.value = "Other";
      if (hobbyOtherInput) {
        hobbyOtherInput.style.display = "block";
        hobbyOtherInput.value = profileData.hobby;
      }
    }
  }
});
