const loginForm = document.getElementById('loginForm');
const passwordInput = document.getElementById('password');
const toggleBtn = document.getElementById('toggleBtn');
const refreshBtn = document.getElementById('refreshBtn');





window.addEventListener('load', () => {
  loginForm.reset();
});

toggleBtn.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggleBtn.textContent = 'Hide';
  } else {
    passwordInput.type = 'password';
    toggleBtn.textContent = 'Show';
  }
});



loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (passwordInput.type === 'password') {
    alert('Password is Hide...');
  } else{
    alert('Password is not Hide...');
  }


});

refreshBtn.addEventListener('click', () => {
  loginForm.reset();


  
  passwordInput.type = 'password';
  toggleBtn.textContent = 'Show';
});