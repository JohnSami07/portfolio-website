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

  // Initialize all animations
  initFadeInAnimations();
  addFloatingParticles();
  addTypingAnimation();
  addSkillProgressBars();
  addMouseFollower();
  addTextRevealAnimation();
  addParallaxScrolling();
  addCounterAnimations();
  addSimpleHoverEffects();
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
      el.classList.add('opacity-0', 'translate-y-8');
      observer.observe(el);
    });
  }, 100);
}

function addFloatingParticles() {
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
    opacity: 0.4;
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

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 1;
      this.speedX = Math.random() * 1 - 0.5;
      this.speedY = Math.random() * 1 - 0.5;
      this.hue = Math.random() * 60 + 200; // Blue to purple range
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x > canvas.width) this.x = 0;
      if (this.x < 0) this.x = canvas.width;
      if (this.y > canvas.height) this.y = 0;
      if (this.y < 0) this.y = canvas.height;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${this.hue}, 70%, 60%, 0.6)`;
      ctx.fill();
    }
  }

  for (let i = 0; i < 30; i++) {
    particles.push(new Particle());
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
    const subtitle = document.querySelector('p[class*="animate-pulse"]');
    if (!subtitle) return;

    const text = 'Computer Science Student';
    subtitle.textContent = '';
    subtitle.classList.remove('animate-pulse');
    subtitle.style.borderRight = '2px solid #3B82F6';

    let i = 0;
    function typeWriter() {
      if (i < text.length) {
        subtitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      } else {
        setTimeout(() => {
          subtitle.style.borderRight = 'none';
        }, 1000);
      }
    }

    typeWriter();
  }, 2000);
}

function addSkillProgressBars() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const skillCards = entry.target.querySelectorAll('[class*="bg-gradient-to-br"]:not([class*="hover:shadow-2xl"])');

        skillCards.forEach((card, index) => {
          // Check if progress bar already exists
          if (card.querySelector('.skill-progress-bar')) return;

          setTimeout(() => {
            const progressBar = document.createElement('div');
            progressBar.className = 'skill-progress-bar';
            progressBar.style.cssText = `
              position: absolute;
              bottom: 0;
              left: 0;
              height: 4px;
              background: linear-gradient(90deg, #3B82F6, #8B5CF6);
              border-radius: 0 0 12px 12px;
              width: 0%;
              transition: width 1.5s ease;
            `;

            card.style.position = 'relative';
            card.appendChild(progressBar);

            setTimeout(() => {
              const widths = [85, 78, 82, 75]; // Skill levels
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

function addMouseFollower() {
  const follower = document.createElement('div');
  follower.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    background: radial-gradient(circle, rgba(59,130,246,0.3), rgba(139,92,246,0.1));
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.1s ease;
    opacity: 0;
  `;

  document.body.appendChild(follower);

  document.addEventListener('mousemove', (e) => {
    follower.style.left = e.clientX - 10 + 'px';
    follower.style.top = e.clientY - 10 + 'px';
    follower.style.opacity = '1';
  });

  document.addEventListener('mouseleave', () => {
    follower.style.opacity = '0';
  });
}

function addTextRevealAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.hasAttribute('data-text-revealed')) {
        entry.target.setAttribute('data-text-revealed', 'true');
        const text = entry.target.textContent;
        const words = text.split(' ');

        entry.target.innerHTML = words.map(word =>
          `<span style="opacity: 0; display: inline-block; transform: translateY(20px); transition: all 0.5s ease;">${word}</span>`
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

function addParallaxScrolling() {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('[class*="bg-gradient-to-br"]:not(main)');

    parallaxElements.forEach((element, index) => {
      const speed = 0.5 + (index * 0.1);
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  });
}

function addCounterAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const gpaElement = entry.target.querySelector('span[class*="bg-green-100"]');
        if (gpaElement && gpaElement.textContent.includes('4.0')) {
          animateCounter(gpaElement, 0, 4.0, 2000, 1);
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

function addSimpleHoverEffects() {
  setTimeout(() => {
    const skillCards = document.querySelectorAll('[class*="bg-gradient-to-br"]:not([class*="hover:shadow-2xl"])');

    skillCards.forEach(card => {
      card.style.transition = 'all 0.3s ease';

      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px) scale(1.02)';
        card.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
        card.style.boxShadow = '';
      });
    });
  }, 500);
}
