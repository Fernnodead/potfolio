// Убираем класс is-loading, чтобы сработала анимация появления
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.remove('is-loading');

  // Обновляем год в футере
  const yearEl = document.getElementById('js-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Плавный скролл по якорям (на случай старых браузеров)
  const links = document.querySelectorAll('a[href^="#"]:not([href="#"])');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
