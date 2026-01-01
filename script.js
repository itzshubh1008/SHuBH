// ====================================
// PORTFOLIO INTERACTIONS & ANIMATIONS
// ====================================

// *** LOADER ANIMATION ***
window.addEventListener('load', () => {
  const loaderContainer = document.getElementById('loaderContainer');
  if (loaderContainer) {
    loaderContainer.classList.add('hidden');
    setTimeout(() => {
      loaderContainer.style.display = 'none';
    }, 800);
  }
});

// Fallback: Hide loader after 3 seconds
setTimeout(() => {
  const loaderContainer = document.getElementById('loaderContainer');
  if (loaderContainer && loaderContainer.style.display !== 'none') {
    loaderContainer.classList.add('hidden');
    setTimeout(() => {
      loaderContainer.style.display = 'none';
    }, 800);
  }
}, 3000);

// *** SMOOTH SCROLL BEHAVIOR ***
document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// *** NAVBAR ACTIVE LINK INDICATOR ***
const observerOptions = {
  threshold: 0.5,
  rootMargin: '-80px 0px -80px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
      });
      const activeLink = document.querySelector(.nav-link[href=\"#\"]);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
}, observerOptions);

document.querySelectorAll('section[id]').forEach(section => {
  observer.observe(section);
});

// Add active state styling in CSS dynamically
const style = document.createElement('style');
style.textContent = \
  .nav-link.active {
    color: var(--color-text) !important;
  }
  
  .nav-link.active::after {
    width: 100% !important;
  }
\;
document.head.appendChild(style);

// *** FADE-IN ON SCROLL ***
const fadeInElements = document.querySelectorAll('.about-text p, .skill-card, .project-card, .interest-card');

const fadeInObserverOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      fadeInObserver.unobserve(entry.target);
    }
  });
}, fadeInObserverOptions);

fadeInElements.forEach(element => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';
  element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  fadeInObserver.observe(element);
});

// *** NAVBAR BACKGROUND ON SCROLL ***
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(10, 14, 39, 0.98)';
    navbar.style.backdropFilter = 'blur(15px)';
  } else {
    navbar.style.background = 'rgba(10, 14, 39, 0.95)';
    navbar.style.backdropFilter = 'blur(10px)';
  }
});

// *** PARALLAX EFFECT ON HERO BACKGROUND ***
const heroBackground = document.querySelector('.hero-background');

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  if (heroBackground) {
    heroBackground.style.transform = \	ranslateY(\px)\;
  }
});

// *** PROJECT CARD HOVER EFFECT ***
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = \perspective(1000px) rotateX(\deg) rotateY(\deg)\;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  });
});

// *** CONTACT FORM HANDLER ***
const contactForm = document.querySelector('form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Log to console (replace with actual backend call)
    console.log('Form submitted:', data);
    
    // Show success message
    const successMsg = document.createElement('div');
    successMsg.textContent = 'Message sent successfully!';
    successMsg.style.cssText = \
      position: fixed;
      top: 80px;
      right: 20px;
      background: var(--color-accent);
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      animation: slideInRight 0.3s ease-out;
      z-index: 2000;
    \;
    
    document.body.appendChild(successMsg);
    
    // Remove after 3 seconds
    setTimeout(() => {
      successMsg.style.opacity = '0';
      successMsg.style.transform = 'translateX(100px)';
      setTimeout(() => successMsg.remove(), 300);
    }, 3000);
    
    // Reset form
    contactForm.reset();
  });
}

// *** PERFORMANCE OPTIMIZATIONS ***
// Lazy load images if they existed
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('img[loading=\"lazy\"]');
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imageObserver.observe(img));
  }
});

// *** ANIMATE COUNTERS ***
const animateCounters = () => {
  const stats = document.querySelectorAll('.stat h3');
  let started = false;
  
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        started = true;
        stats.forEach(stat => {
          const target = parseInt(stat.textContent);
          let current = 0;
          const increment = Math.ceil(target / 30);
          
          const counter = setInterval(() => {
            current += increment;
            if (current >= target) {
              stat.textContent = target + '+';
              clearInterval(counter);
            } else {
              stat.textContent = current + '+';
            }
          }, 30);
        });
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  const aboutSection = document.querySelector('.about');
  if (aboutSection) {
    statsObserver.observe(aboutSection);
  }
};

animateCounters();

// *** SKILL CARD ANIMATION ***
const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach((card, index) => {
  card.style.opacity = '0';
  card.style.animation = \adeInUp 0.6s ease-out \s forwards\;
});

// *** KEYBOARD SHORTCUTS ***
document.addEventListener('keydown', (e) => {
  if (e.code === 'KeyH') {
    document.querySelector('#hero').scrollIntoView({ behavior: 'smooth' });
  }
  if (e.code === 'KeyA') {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  }
  if (e.code === 'KeyS') {
    document.querySelector('#skills').scrollIntoView({ behavior: 'smooth' });
  }
  if (e.code === 'KeyW') {
    document.querySelector('#work').scrollIntoView({ behavior: 'smooth' });
  }
  if (e.code === 'KeyC') {
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
  }
});

// Certificate Modal Functionality
const certificateCards = document.querySelectorAll('.certificate-card');
const certModal = document.getElementById('certModal');
const certModalOverlay = document.getElementById('certModalOverlay');
const certModalClose = document.getElementById('certModalClose');
const certModalImage = document.getElementById('certModalImage');
const certModalTitle = document.getElementById('certModalTitle');

const certificateData = {
  oracle: {
    title: 'Oracle Certified Foundations Associate',
    src: 'certificates/oracle certified foundations associate_page-0001 (1).jpg'
  },
  tata: {
    title: 'Tata Data Analytics',
    src: 'certificates/Tata Data Analytics_page-0001.jpg'
  },
  certificate: {
    title: 'Professional Certificate',
    src: 'certificates/certificate.jpg'
  },
  course: {
    title: 'Course Completion',
    src: 'certificates/course.jpg'
  },
  achievement: {
    title: 'Achievement Certificate',
    src: 'certificates/LA2JDIMJZX.png'
  },
  new: {
    title: 'New Certificate',
    src: 'certificates/1767246296795.jpg'
  }
};

function openCertModal(certId) {
  const cert = certificateData[certId];
  if (!cert) return;
  
  certModalImage.src = cert.src;
  certModalTitle.textContent = cert.title;
  certModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCertModal() {
  certModal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

certificateCards.forEach(card => {
  card.addEventListener('click', () => {
    const certId = card.getAttribute('data-cert');
    openCertModal(certId);
  });
});

certModalClose.addEventListener('click', closeCertModal);
certModalOverlay.addEventListener('click', closeCertModal);

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.code === 'Escape' && certModal.classList.contains('active')) {
    closeCertModal();
  }
});

console.log('Portfolio loaded! Press H, A, S, W, or C for quick navigation.');

