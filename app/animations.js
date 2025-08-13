'use client';

export function initializeAnimations() {
  if (typeof window === 'undefined') return;

  // Clean up any existing particles canvas to prevent duplicates
  const existingCanvas = document.getElementById('particles-canvas');
  if (existingCanvas) {
    existingCanvas.remove();
  }

  // Simple fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe sections for fade-in
  setTimeout(() => {
    document.querySelectorAll('section, header').forEach(el => {
      el.classList.add('opacity-0', 'translate-y-8');
      observer.observe(el);
    });
  }, 100);

  // Simple hover effects only
  addSimpleHoverEffects();
}

function addSimpleHoverEffects() {
  if (typeof window === 'undefined') return;
  
  // Add hover effects to skill cards
  setTimeout(() => {
    const skillCards = document.querySelectorAll('[class*="bg-gradient-to-br"]');
    
    skillCards.forEach(card => {
      // Remove any existing transform to prevent conflicts
      card.style.transform = '';
      card.style.transition = 'all 0.3s ease';
      
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '';
      });
    });
  }, 500);
}
