document.addEventListener('DOMContentLoaded', () => {
  const testimonials = document.querySelectorAll('.testimonial-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  testimonials.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.5s ease ${index * 0.1}s`;
    observer.observe(card);
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const aboutLink = document.getElementById('about-link');
  const aboutModal = document.getElementById('about-modal');
  const aboutClose = aboutModal.querySelector('.modal-close');

  aboutLink.addEventListener('click', function (e) {
    e.preventDefault();
    aboutModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });

  aboutClose.addEventListener('click', function () {
    aboutModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });

  const contactModal = document.getElementById('contact-modal');
  const closeContactModal = document.getElementById('close-modal');
  document.querySelectorAll('.button, .open-contact-modal').forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      contactModal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
  });

  closeContactModal.addEventListener('click', function () {
    contactModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });

  window.addEventListener('click', function (e) {
    if (e.target === contactModal) {
      contactModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
    if (e.target === aboutModal) {
      aboutModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
});

