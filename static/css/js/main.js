// Initialize floating stars
function initStars() {
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars';
    document.body.appendChild(starsContainer);
  
    const starCount = window.innerWidth < 768 ? 50 : 100;
    
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      // Random properties
      const size = Math.random() * 3;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const opacity = Math.random() * 0.8 + 0.2;
      const duration = Math.random() * 5 + 3;
      const delay = Math.random() * 5;
      
      star.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${posX}%;
        top: ${posY}%;
        --opacity: ${opacity};
        --duration: ${duration}s;
        animation-delay: ${delay}s;
      `;
      
      starsContainer.appendChild(star);
    }
  }
  
  // Smooth scrolling for anchor links
  function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
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
  }
  
  // Animate elements when they come into view
  function initScrollAnimations() {
    const animateOnScroll = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    };
  
    const observer = new IntersectionObserver(animateOnScroll, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
  
    document.querySelectorAll('.section').forEach(section => {
      observer.observe(section);
    });
  }
  
  // Initialize everything when DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    initStars();
    initSmoothScrolling();
    initScrollAnimations();
    
    // Handle window resize
    window.addEventListener('resize', () => {
      const stars = document.querySelector('.stars');
      if (stars) stars.remove();
      initStars();
    });
  });