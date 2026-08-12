const toSignupBtn = document.getElementById('toSignupBtn');
const toLoginBtn = document.getElementById('toLoginBtn');
const lf = document.getElementById('lf');
const sf = document.getElementById('sf');
const overlayLogin = document.querySelector('.overlay-login');
const overlaySignup = document.querySelector('.overlay-signup');

overlayLogin.classList.add('active');

toSignupBtn.addEventListener('click', () => {
  clearMessage();
  lf.classList.remove('active');
  sf.classList.add('active');
  overlayLogin.classList.remove('active');
  overlaySignup.classList.add('active');
});

toLoginBtn.addEventListener('click', () => {
  clearMessage();
  sf.classList.remove('active');
  lf.classList.add('active');
  overlaySignup.classList.remove('active');
  overlayLogin.classList.add('active');
});

function showMessage(msg, type) {
  const mBox = document.getElementById('mBox');
  mBox.textContent = msg;
  mBox.className = `msg-box ${type}`;
}

function clearMessage() {
  const mBox = document.getElementById('mBox');
  mBox.textContent = '';
  mBox.className = 'msg-box';
}

sf.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('sn').value.trim();
  const email = document.getElementById('se').value.trim().toLowerCase();
  const password = document.getElementById('sp').value.trim();

  let users = JSON.parse(localStorage.getItem('my_auth_users')) || [];

  if (users.find(user => user.email === email)) {
    showMessage('This email is already registered!', 'err');
    return;
  }

  users.push({ name, email, password });
  localStorage.setItem('my_auth_users', JSON.stringify(users));

  showMessage('Account created successfully! Please Sign in.', 'suc');
  this.reset();

  setTimeout(() => {
    toLoginBtn.click();
  }, 1200);
});

lf.addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('le').value.trim().toLowerCase();
  const password = document.getElementById('lp').value.trim();

  let users = JSON.parse(localStorage.getItem('my_auth_users')) || [];
  let userMatch = users.find(user => user.email === email && user.password === password);

  if (userMatch) {
    clearMessage();
    document.getElementById('authContent').style.display = 'none';
    const welcomeScreen = document.getElementById('welcomeScreen');
    welcomeScreen.classList.add('active');
    document.getElementById('uDisp').textContent = userMatch.name;
    triggerPartyPopper();
  } else {
    showMessage('Invalid email or password!', 'err');
  }
});

function triggerPartyPopper() {
  const duration = 2000;
  const animationEnd = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 6,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#0099e5', '#ffffff', '#0077c5']
    });
    confetti({
      particleCount: 6,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#0099e5', '#ffffff', '#0077c5']
    });

    if (Date.now() < animationEnd) {
      requestAnimationFrame(frame);
    }
  })();
}