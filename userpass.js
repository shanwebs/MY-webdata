<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Profile Page</title>
  <style>
    body, html {
      margin: 0; 
      padding: 0; 
      height: 100%;
      background-color: #111;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      color: white;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      position: relative;
    }

    .profile-icon {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      border: 3px solid #66ccff;
      background-image: url('https://i.pinimg.com/1200x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg');
      background-size: cover;
      background-position: center;
      position: absolute;
      top: 10vh;
      left: 50%;
      transform: translateX(-50%);
      box-shadow: 0 0 10px #66ccffaa;
      cursor: pointer;
      transition: transform 0.3s ease;
      z-index: 2;
    }

    .profile-icon:hover {
      transform: translateX(-50%) scale(1.05);
    }

    .horizontal-line {
      position: absolute;
      top: calc(16vh); /* 10vh + half of circle height */
      left: 50%;
      width: 10000px;
      height: 2px;
      background-color: #66ccff;
      transform: translateX(-50%);
      z-index: 1;
    }

    /* Gray gradient overlay on top side above line */
    .top-gradient {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: calc(10vh); /* just above the line */
      background: linear-gradient(to bottom, #cc9595, transparent);
      z-index: 0;
    }

    /* Pencil icon container */
    .pencil-icon {
      position: absolute;
      width: 28px;
      height: 28px;
      background-color: #66ccff;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      border: 2px solid #111;
      /* Position bottom right, slightly inside circle's border but a bit right */
      top: calc(10vh + 150px - 22px);
      left: 50%;
      transform: translateX(calc(-50% + 35px));
      z-index: 3;
      box-shadow: 0 0 8px #66ccffaa;
      transition: background-color 0.3s ease, transform 0.3s ease;
    }
    .pencil-icon:hover {
      background-color: #55aadd;
      transform: translateX(calc(-50% + 35px)) scale(1.1);
    }

    /* Pencil SVG styling */
    .pencil-icon svg {
      width: 14px;
      height: 14px;
      fill: #111;
      transition: width 0.3s ease, height 0.3s ease;
    }
    .pencil-icon:hover svg {
      width: 16px;
      height: 16px;
    }

  </style>
</head>
<body>

  <div class="profile-icon" title="Profile Icon"></div>
  <div class="horizontal-line"></div>
  <div class="top-gradient"></div>

  <div class="pencil-icon" title="Change Profile Picture">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1.003 1.003 0 0 0 0-1.42l-2.34-2.34a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z"/>
    </svg>
  </div>

</body>
</html>
