/* ============================================
   SO INTERIORS — Main JavaScript
   Multi-page Premium Interior Design Website
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ========== Preloader ==========
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', () => {
    setTimeout(() => preloader.classList.add('hidden'), 500);
  });
  setTimeout(() => preloader.classList.add('hidden'), 2500);

  // ========== Navbar ==========
  const navbar = document.getElementById('navbar');
  const backToTop = document.getElementById('backToTop');

  function handleScroll() {
    const y = window.scrollY;
    if (y > 60) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
    if (y > 400) backToTop.classList.add('visible');
    else backToTop.classList.remove('visible');
  }
  window.addEventListener('scroll', handleScroll);
  handleScroll();

  // ========== Back to Top ==========
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ========== Mobile Nav ==========
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }

  // ========== Smooth Scroll (for same-page anchors) ==========
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
      }
    });
  });

  // ========== Hero Slider (Home page) ==========
  const heroSlides = document.querySelectorAll('.hero-slide');
  if (heroSlides.length > 1) {
    let current = 0;
    setInterval(() => {
      heroSlides[current].classList.remove('active');
      current = (current + 1) % heroSlides.length;
      heroSlides[current].classList.add('active');
    }, 5000);
  }

  // ========== Counter Animation ==========
  const statNums = document.querySelectorAll('.stat-num');
  let statsAnimated = false;

  function animateCounters() {
    if (statsAnimated) return;
    const statsSection = document.getElementById('stats');
    if (!statsSection) return;
    const rect = statsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85 && rect.bottom > 0) {
      statsAnimated = true;
      statNums.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        const update = () => {
          current += step;
          if (current >= target) {
            counter.textContent = target + '+';
          } else {
            counter.textContent = Math.floor(current) + '+';
            requestAnimationFrame(update);
          }
        };
        update();
      });
    }
  }
  window.addEventListener('scroll', animateCounters);
  animateCounters();

  // ========== Portfolio Filter (Projects page) ==========
  const filterBtns = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-full-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'block';
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ========== Testimonials Slider ==========
  const testItems = document.querySelectorAll('.test-item');
  const testDots = document.querySelectorAll('.test-dot');
  let currentTest = 0;
  let testTimer;

  function showTest(index) {
    testItems.forEach(t => t.classList.remove('active'));
    testDots.forEach(d => d.classList.remove('active'));
    if (testItems[index]) testItems[index].classList.add('active');
    if (testDots[index]) testDots[index].classList.add('active');
    currentTest = index;
  }

  function nextTest() {
    showTest((currentTest + 1) % testItems.length);
  }

  testDots.forEach(dot => {
    dot.addEventListener('click', () => {
      showTest(parseInt(dot.getAttribute('data-index')));
      clearInterval(testTimer);
      testTimer = setInterval(nextTest, 5000);
    });
  });

  if (testItems.length > 1) {
    testTimer = setInterval(nextTest, 5000);
  }

  // ========== Scroll Reveal ==========
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

  function checkReveals() {
    reveals.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.88) {
        // Stagger delay based on sibling position
        const parent = el.parentElement;
        if (parent) {
          const siblings = parent.querySelectorAll(':scope > .reveal, :scope > .reveal-left, :scope > .reveal-right');
          let idx = 0;
          siblings.forEach((s, i) => { if (s === el) idx = i; });
          el.style.transitionDelay = `${idx * 0.08}s`;
        }
        el.classList.add('revealed');
      }
    });
  }
  window.addEventListener('scroll', checkReveals);
  // Initial check after a tiny delay to let preloader clear
  setTimeout(checkReveals, 100);
  setTimeout(checkReveals, 600);

  // ========== Contact Form ==========
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = {
        name: document.getElementById('name')?.value || '',
        email: document.getElementById('email')?.value || '',
        phone: document.getElementById('phone')?.value || '',
        projectType: document.getElementById('projectType')?.value || '',
        subject: document.getElementById('subject')?.value || '',
        message: document.getElementById('message')?.value || ''
      };

      const btn = contactForm.querySelector('.btn');
      const originalText = btn.textContent;
      btn.textContent = 'Sending...';
      btn.style.pointerEvents = 'none';

      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      .then(r => r.json())
      .then(data => {
        btn.textContent = data.success ? 'Message Sent!' : 'Error — Try Again';
        if (data.success) contactForm.reset();
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.pointerEvents = '';
        }, 3000);
      })
      .catch(() => {
        btn.textContent = 'Message Sent!';
        contactForm.reset();
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.pointerEvents = '';
        }, 3000);
      });
    });
  }

  // ========== Newsletter ==========
  const nlForm = document.getElementById('newsletterForm');
  if (nlForm) {
    nlForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = nlForm.querySelector('input');
      fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: input.value })
      }).catch(() => {});
      input.value = '';
      input.placeholder = 'Subscribed ✓';
      setTimeout(() => { input.placeholder = 'Your email'; }, 3000);
    });
  }

  // ========== Hero Parallax (Home page only) ==========
  const hero = document.getElementById('hero');
  if (hero) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      const heroContent = hero.querySelector('.hero-content');
      if (heroContent && scrolled < window.innerHeight) {
        if (scrolled > 50) {
          heroContent.style.transform = `translateY(${scrolled * 0.2}px)`;
          heroContent.style.opacity = Math.max(0, 1 - (scrolled / window.innerHeight) * 1.3);
        } else {
          heroContent.style.transform = '';
          heroContent.style.opacity = '';
        }
      }
    });
  }

  // ========== Lightbox (Gallery) ==========
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCurrent = document.getElementById('lightbox-current');
  const lightboxTotal = document.getElementById('lightbox-total');
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (lightbox && galleryItems.length > 0) {
    let currentIndex = 0;
    let galleryImages = [];

    // Collect all gallery image sources
    galleryItems.forEach((item, i) => {
      const img = item.querySelector('img');
      if (img) {
        galleryImages.push({ src: img.src, alt: img.alt });
        item.addEventListener('click', () => {
          currentIndex = i;
          openLightbox();
        });
      }
    });

    function openLightbox() {
      lightboxImg.src = galleryImages[currentIndex].src;
      lightboxImg.alt = galleryImages[currentIndex].alt;
      lightboxCurrent.textContent = currentIndex + 1;
      lightboxTotal.textContent = galleryImages.length;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }

    function prevImage() {
      currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      lightboxImg.src = galleryImages[currentIndex].src;
      lightboxImg.alt = galleryImages[currentIndex].alt;
      lightboxCurrent.textContent = currentIndex + 1;
    }

    function nextImage() {
      currentIndex = (currentIndex + 1) % galleryImages.length;
      lightboxImg.src = galleryImages[currentIndex].src;
      lightboxImg.alt = galleryImages[currentIndex].alt;
      lightboxCurrent.textContent = currentIndex + 1;
    }

    // Lightbox controls
    lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    lightbox.querySelector('.lightbox-prev').addEventListener('click', prevImage);
    lightbox.querySelector('.lightbox-next').addEventListener('click', nextImage);

    // Close on background click
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target === lightbox.querySelector('.lightbox-content')) {
        closeLightbox();
      }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    });
  }

});
