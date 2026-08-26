/* ============================================
   Clouds Farm – Premium JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // ---------- Language Switch ----------
  const langButtons = document.querySelectorAll('.lang-btn');
  
  function setLang(lang) {
    document.body.className = 'lang-' + lang;
    langButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    // Save preference
    localStorage.setItem('clouds-farm-lang', lang);
  }

  langButtons.forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  // Load saved language or default to Bangla
  const savedLang = localStorage.getItem('clouds-farm-lang') || 'bn';
  setLang(savedLang);

  // ---------- Mobile Menu ----------
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      menuToggle.classList.toggle('active');
    });

    // Close menu when clicking a link
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        menuToggle.classList.remove('active');
      });
    });
  }

  // ---------- Sticky Header Effect ----------
  const topbar = document.querySelector('.topbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      topbar.classList.add('scrolled');
    } else {
      topbar.classList.remove('scrolled');
    }
  });

  // ---------- Scroll Fade-in Animations ----------
  const fadeElements = document.querySelectorAll('.fade-up');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optional: unobserve after animation
        // observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  fadeElements.forEach(el => observer.observe(el));

  // ---------- Smooth scroll for anchor links ----------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ---------- Category cards scroll to products ----------
  document.querySelectorAll('.cat-card').forEach(card => {
    card.addEventListener('click', () => {
      const products = document.getElementById('products');
      if (products) {
        const top = products.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
});
