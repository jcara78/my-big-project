document.querySelector('#login-dev').addEventListener('submit', async (event) => {
  event.preventDefault();
  const form = new FormData(event.target);
  const payload = Object.fromEntries(form.entries());
  const result = document.querySelector('#result');

  const response = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
    
  });
  console.log('Login payload:', payload);
  result.textContent = JSON.stringify(await response.json(), null, 2);
});
