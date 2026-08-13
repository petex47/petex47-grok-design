const nav = document.querySelector('.nav');
const menuBtn = document.querySelector('.menu-btn');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuBtn.textContent = nav.classList.contains('open') ? 'Close' : 'Menu';
  });
}

const themeBtn = document.querySelector('[data-theme-toggle]');
const saved = localStorage.getItem('theme');
if (saved) document.documentElement.setAttribute('data-theme', saved);
if (themeBtn) {
  const label = () => document.documentElement.getAttribute('data-theme') === 'light' ? 'Dark' : 'Light';
  themeBtn.textContent = label();
  themeBtn.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    if (next === 'dark') document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', next === 'dark' ? '' : 'light');
    themeBtn.textContent = label();
  });
}
