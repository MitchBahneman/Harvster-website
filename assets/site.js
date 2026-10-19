// Progressive enhancement only; all navigation and content work without JavaScript.
document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});
