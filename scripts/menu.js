(() => {
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuToggle = document.querySelector('.menu-toggle');
  const menuLinks = document.querySelectorAll('.nav-link');

  // Toggle mobile menu
  menuToggle.addEventListener('click', () => {
    const isMenuOpen = mobileMenu.classList.contains('is-open');

    mobileMenu.classList.toggle('is-open');
    menuToggle.classList.toggle('is-open');

    // Toggle body scroll lock
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
      menuToggle.setAttribute('aria-label', 'Закрити мобільне меню');
    } else {
      document.body.style.overflow = '';
      menuToggle.setAttribute('aria-label', 'Відкрити мобільне меню');
    }
  });

  // Close menu when clicking on a link
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
      menuToggle.classList.remove('is-open');
      document.body.style.overflow = '';
      menuToggle.setAttribute('aria-label', 'Відкрити мобільне меню');
    });
  });

  // Close menu on window resize if desktop size
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1200 && mobileMenu.classList.contains('is-open')) {
      mobileMenu.classList.remove('is-open');
      menuToggle.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  });
})();
