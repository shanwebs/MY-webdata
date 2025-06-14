// dashboard.js

document.addEventListener("DOMContentLoaded", () => {
  const userInfo = JSON.parse(localStorage.getItem("loggedInUserInfo")) || { username: "Guest", password: "******" };
  document.getElementById("dashUser").textContent = userInfo.username;
  document.getElementById("dashPass").textContent = userInfo.password;

  // Destroy old charts if they exist (to prevent duplication on reload)
  const oldCharts = Chart.instances;
  for (let id in oldCharts) {
    if (oldCharts.hasOwnProperty(id)) {
      oldCharts[id].destroy();
    }
  }

  // Line Chart
  const lineCtx = document.getElementById("lineChart").getContext("2d");
  new Chart(lineCtx, {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
        label: 'Active Users',
        data: [120, 190, 300, 250, 220, 400, 380],
        borderColor: '#66ccff',
        backgroundColor: 'rgba(102, 204, 255, 0.2)',
        fill: true,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      animation: {
        duration: 1000,
        easing: 'easeOutQuart'
      },
      plugins: {
        legend: {
          labels: { color: '#e3e3e3' }
        }
      },
      scales: {
        x: { ticks: { color: '#aaa' }, grid: { color: '#333' } },
        y: { ticks: { color: '#aaa' }, grid: { color: '#333' } }
      }
    }
  });

  // Pie Chart
  const pieCtx = document.getElementById("pieChart").getContext("2d");
  new Chart(pieCtx, {
    type: 'doughnut',
    data: {
      labels: ['Completed', 'In Progress', 'Pending'],
      datasets: [{
        data: [45, 25, 30],
        backgroundColor: ['#66ccff', '#ffcc66', '#ff6666'],
        borderColor: '#111',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      animation: {
        animateScale: true,
        duration: 1000
      },
      plugins: {
        legend: { labels: { color: '#e3e3e3' } }
      }
    }
  });

  // Circle Chart
  const circleCtx = document.getElementById("circleChart").getContext("2d");
  new Chart(circleCtx, {
    type: 'doughnut',
    data: {
      labels: ['Online', 'Offline', 'Idle'],
      datasets: [{
        data: [60, 25, 15],
        backgroundColor: ['#66ff99', '#9999ff', '#ff9966'],
        borderColor: '#111',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      cutout: '65%',
      animation: {
        animateRotate: true,
        duration: 1200
      },
      plugins: {
        legend: { labels: { color: '#e3e3e3' } }
      }
    }
  });
});
