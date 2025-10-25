const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const form = document.querySelector('form');
const modal = document.querySelector('.modal-container');
const closeModal = document.getElementById('close-modal');

// Dark/light mode toggle
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  const dark = body.classList.contains('dark');
  themeToggle.textContent = dark ? '☀️' : '🌙';
  localStorage.setItem('theme', dark ? 'dark' : 'light');
});

// Modal show/hide
//form.addEventListener('submit', (e) => {
//  e.preventDefault();
 // modal.classList.add('show');
//});

closeModal.addEventListener('click', () => {
  modal.classList.remove('show');
  form.reset();
});


 