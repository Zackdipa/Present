const navbar = document.querySelector('.apple-navbar');
const toggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

function closeMenu() {
  navbar.classList.remove('active');
  document.body.classList.remove('no-scroll');
  if (toggle) toggle.setAttribute('aria-expanded', 'false');
}

function openMenu() {
  navbar.classList.add('active');
  document.body.classList.add('no-scroll');
  if (toggle) toggle.setAttribute('aria-expanded', 'true');
}

// initialize accessible state
if (toggle) toggle.setAttribute('aria-expanded', 'false');

toggle && toggle.addEventListener('click', () => {
  const willOpen = !navbar.classList.contains('active');
  if (willOpen) openMenu(); else closeMenu();
});

// close when a link is clicked
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});

// close on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});

// close when clicking on backdrop area (outside links)
mobileMenu && mobileMenu.addEventListener('click', (e) => {
  if (e.target === mobileMenu) closeMenu();
});
