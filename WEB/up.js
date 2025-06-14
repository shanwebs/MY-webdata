const users = [
  { username: "Shan", password: "shan2008" },
  { username: "Rabeeh", password: "rabeeh123" },
  { username: "Riswan", password: "riswan2009" }
];

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;
  const errorMsg = document.getElementById('error-msg');

  const found = users.some(user => user.username === username && user.password === password);

  if (found) {
    errorMsg.style.display = "none";
    localStorage.setItem("loggedInUser", username);
    window.location.href = "afterlogin.html";
  } else {
    errorMsg.textContent = "Invalid username or password.";
    errorMsg.style.display = "block";
  }
});
