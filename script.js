// TechFlow Landing Page - JavaScript Functionality

document.addEventListener('DOMContentLoaded', function () {
  console.log('TechFlow Landing Page - Carregando...');

  // Theme Toggle Functionality
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const html = document.documentElement;

  // Check for saved theme preference or default to light mode
  const savedTheme = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  // Theme toggle event listener
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';

      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);

      console.log('Theme changed to:', newTheme);
    });
  }

  // Update theme icon based on current theme
  function updateThemeIcon(theme) {
    if (themeIcon) {
      if (theme === 'dark') {
        themeIcon.className = 'fas fa-sun text-xl';
        themeIcon.setAttribute('title', 'Alternar para modo claro');
      } else {
        themeIcon.className = 'fas fa-moon text-xl';
        themeIcon.setAttribute('title', 'Alternar para modo escuro');
      }
    }
  }

  // Mobile menu functionality
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Close mobile menu if open
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
        }
      }
    });
  });

  // Header background change on scroll
  const header = document.querySelector('header');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
      header.classList.add('bg-white/95', 'backdrop-blur-sm');
    } else {
      header.classList.remove('bg-white/95', 'backdrop-blur-sm');
    }
  });

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animateElements = document.querySelectorAll('.feature-card, .testimonial-card');
  animateElements.forEach(el => {
    el.classList.add('opacity-0', 'translate-y-8');
    observer.observe(el);
  });

  // Add loading animation for buttons
  const buttons = document.querySelectorAll('button');
  console.log('Found buttons:', buttons.length);

  buttons.forEach(button => {
    console.log('Button text:', button.textContent.trim());

    button.addEventListener('click', function () {
      console.log('Button clicked:', this.textContent.trim());

      if (this.textContent.includes('Começar') || this.textContent.includes('Agendar')) {
        const originalText = this.innerHTML;
        this.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Carregando...';
        setTimeout(() => {
          this.innerHTML = originalText;
        }, 2000);
      }

      // Special handling for "Agendar Demo" button
      if (this.textContent.includes('Agendar Demo')) {
        console.log('Agendar Demo button clicked!');

        // Add clicked class for CSS styling
        this.setAttribute('data-clicked', 'true');

        // Apply purple effect with JavaScript
        this.style.backgroundColor = '#4c1d95';
        this.style.borderColor = '#4c1d95';
        this.style.color = '#ffffff';
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'all 0.3s ease';
        this.style.boxShadow = '0 8px 25px rgba(76, 29, 149, 0.4)';

        // Reset after 3 seconds
        setTimeout(() => {
          this.style.backgroundColor = '';
          this.style.borderColor = '';
          this.style.color = '';
          this.style.transform = '';
          this.style.boxShadow = '';
          this.removeAttribute('data-clicked');
        }, 3000);
      }
    });
  });

  // Parallax effect for hero section
  window.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.gradient-bg');
    if (heroSection) {
      const rate = scrolled * -0.5;
      heroSection.style.transform = `translateY(${rate}px)`;
    }
  });

  // Form validation (if forms are added later)
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // Counter animation for statistics
  function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    function updateCounter() {
      start += increment;
      if (start < target) {
        element.textContent = Math.floor(start);
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target;
      }
    }

    updateCounter();
  }

  // Accessibility improvements
  // Add keyboard navigation support
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
    }
  });

  // Add focus management for mobile menu
  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  }

  console.log('TechFlow Landing Page - Carregada com sucesso!');
}); 