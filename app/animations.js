'use client';

export function initializeAnimations() {
  if (typeof window === 'undefined') return;

  // Prevent multiple initializations
  if (window.animationsInitialized) return;
  window.animationsInitialized = true;

  // Clean up any existing elements to prevent duplicates
  const existingCanvas = document.getElementById('particles-canvas');
  if (existingCanvas) {
    existingCanvas.remove();
  }

  const existingFollower = document.querySelector('[data-mouse-follower]');
  if (existingFollower) {
    existingFollower.remove();
  }

  // Initialize professional animations only
  initFadeInAnimations();
  addSubtleParticleSystem();
  addTypingAnimation();
  addSkillProgressBars();
  addSubtleHoverEffects();
  addTextRevealAnimation();
  addCounterAnimations();
}

function initFadeInAnimations() {
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

  setTimeout(() => {
    document.querySelectorAll('section, header').forEach(el => {
      el.classList.add('opacity-0', 'translate-y-4');
      observer.observe(el);
    });
  }, 100);

  // Add professional CSS animations
  const style = document.createElement('style');
  style.textContent = `
    .animate-fade-in {
      animation: fadeInUp 0.6s ease forwards;
    }
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  document.head.appendChild(style);
}

function addSubtleParticleSystem() {
  const canvas = document.createElement('canvas');
  canvas.id = 'particles-canvas';
  canvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
    opacity: 0.3;
  `;

  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let particles = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  class SubtleParticle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 1.5 + 0.5;
      this.speedX = Math.random() * 0.5 - 0.25;
      this.speedY = Math.random() * 0.5 - 0.25;
      this.hue = Math.random() * 30 + 200; // Subtle blue range
      this.alpha = Math.random() * 0.3 + 0.1;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      // Wrap around screen
      if (this.x > canvas.width) this.x = 0;
      if (this.x < 0) this.x = canvas.width;
      if (this.y > canvas.height) this.y = 0;
      if (this.y < 0) this.y = canvas.height;
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = `hsl(${this.hue}, 50%, 70%)`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  // Create fewer, subtler particles
  for (let i = 0; i < 15; i++) {
    particles.push(new SubtleParticle());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
      particle.update();
      particle.draw();
    });
    
    requestAnimationFrame(animate);
  }

  animate();
}

function addTypingAnimation() {
  setTimeout(() => {
    const subtitle = document.querySelector('p[class*="bg-gradient-to-r"][class*="text-transparent"]');
    if (!subtitle || subtitle.hasAttribute('data-typed')) return;
    
    subtitle.setAttribute('data-typed', 'true');
    const text = 'Computer Science Student';
    subtitle.textContent = '';
    subtitle.style.borderRight = '2px solid #3B82F6';
    subtitle.style.minHeight = '1.5rem';

    let i = 0;
    function typeWriter() {
      if (i < text.length) {
        subtitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 80);
      } else {
        setTimeout(() => {
          subtitle.style.borderRight = 'none';
        }, 1000);
      }
    }

    typeWriter();
  }, 1500);
}

function addSkillProgressBars() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const skillCards = entry.target.querySelectorAll('[class*="bg-gradient-to-br"][class*="backdrop-blur-sm"]');

        skillCards.forEach((card, index) => {
          if (card.querySelector('.skill-progress-bar')) return;

          setTimeout(() => {
            const progressBar = document.createElement('div');
            progressBar.className = 'skill-progress-bar';
            progressBar.style.cssText = `
              position: absolute;
              bottom: 0;
              left: 0;
              height: 3px;
              background: linear-gradient(90deg, #3B82F6, #6366F1);
              border-radius: 0 0 16px 16px;
              width: 0%;
              transition: width 1.5s ease;
            `;

            card.style.position = 'relative';
            card.appendChild(progressBar);

            setTimeout(() => {
              const widths = [85, 80, 75, 82];
              progressBar.style.width = `${widths[index] || 80}%`;
            }, 100);
          }, index * 200);
        });

        observer.unobserve(entry.target);
      }
    });
  });

  setTimeout(() => {
    const skillsSection = document.querySelector('h2[class*="from-gray-900 to-green-600"]')?.parentElement?.parentElement;
    if (skillsSection && !skillsSection.hasAttribute('data-progress-observed')) {
      skillsSection.setAttribute('data-progress-observed', 'true');
      observer.observe(skillsSection);
    }
  }, 1000);
}

function addTextRevealAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.hasAttribute('data-text-revealed')) {
        entry.target.setAttribute('data-text-revealed', 'true');
        const text = entry.target.textContent;
        const words = text.split(' ');

        entry.target.innerHTML = words.map((word, index) =>
          `<span style="opacity: 0; display: inline-block; transform: translateY(10px); transition: all 0.4s ease ${index * 0.1}s;">${word}</span>`
        ).join(' ');

        const spans = entry.target.querySelectorAll('span');
        spans.forEach((span, index) => {
          setTimeout(() => {
            span.style.opacity = '1';
            span.style.transform = 'translateY(0)';
          }, index * 100);
        });

        observer.unobserve(entry.target);
      }
    });
  });

  setTimeout(() => {
    document.querySelectorAll('h2[class*="bg-gradient-to-r"]').forEach(heading => {
      if (!heading.hasAttribute('data-text-observed')) {
        heading.setAttribute('data-text-observed', 'true');
        observer.observe(heading);
      }
    });
  }, 500);
}

function addCounterAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const gpaElement = entry.target.querySelector('span[class*="bg-green-100"]');
        if (gpaElement && gpaElement.textContent.includes('4.0')) {
          animateCounter(gpaElement, 0, 4.0, 1500, 1);
        }
        observer.unobserve(entry.target);
      }
    });
  });

  setTimeout(() => {
    const educationSection = document.querySelector('h2[class*="from-gray-900 to-purple-600"]')?.parentElement?.parentElement;
    if (educationSection) {
      observer.observe(educationSection);
    }
  }, 1000);
}

function animateCounter(element, start, end, duration, decimals = 0) {
  const startTime = performance.now();
  const originalText = element.textContent;

  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const currentValue = start + (end - start) * easeOutCubic(progress);
    const displayValue = decimals > 0 ? currentValue.toFixed(decimals) : Math.floor(currentValue);

    element.textContent = originalText.replace(/[\d.]+/, displayValue);

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    }
  }

  requestAnimationFrame(updateCounter);
}

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function addSubtleHoverEffects() {
  setTimeout(() => {
    const cards = document.querySelectorAll('[class*="hover:shadow-xl"], [class*="hover:shadow-2xl"]');

    cards.forEach(card => {
      card.style.transition = 'all 0.3s ease';

      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-4px)';
        card.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '';
      });
    });

    // Professional button hover effects
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
      btn.style.transition = 'all 0.2s ease';
      
      btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'translateY(-1px)';
        btn.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translateY(0)';
        btn.style.boxShadow = '';
      });
    });
  }, 500);
}
