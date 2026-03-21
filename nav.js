function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}
document.querySelectorAll('.nav-links a').forEach(l =>
  l.addEventListener('click', () =>
    document.getElementById('navLinks').classList.remove('open')
  )
);
// highlight active page
const p = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  if (a.getAttribute('href') === p) a.classList.add('active');
});
