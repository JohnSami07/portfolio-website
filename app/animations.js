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
  addAdvancedParticleSystem();
  addTypingAnimation();
  addSkillProgressBars();
  addEnhancedMouseFollower();
  addTextRevealAnimation();
  addCounterAnimations();
  addAdvancedHoverEffects();
  addGlowingEffects();
  addRippleEffects();
  addFloatingIcons();
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

  // Add CSS for fade in animation
  const style = document.createElement('style');
  style.textContent = `
    .animate-fade-in {
      animation: fadeInUp 0.8s ease forwards;
    }
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  document.head.appendChild(style);
}

function addAdvancedParticleSystem() {
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
    opacity: 0.6;
  `;

  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let particles = [];
  let connections = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  class AdvancedParticle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 3 + 1;
      this.speedX = Math.random() * 2 - 1;
      this.speedY = Math.random() * 2 - 1;
      this.hue = Math.random() * 60 + 200;
      this.brightness = Math.random() * 50 + 50;
      this.alpha = Math.random() * 0.5 + 0.3;
      this.pulse = Math.random() * 0.02 + 0.01;
      this.pulseDirection = 1;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      // Pulsing effect
      this.alpha += this.pulse * this.pulseDirection;
      if (this.alpha >= 0.8 || this.alpha <= 0.3) {
        this.pulseDirection *= -1;
      }

      // Wrap around screen
      if (this.x > canvas.width) this.x = 0;
      if (this.x < 0) this.x = canvas.width;
      if (this.y > canvas.height) this.y = 0;
      if (this.y < 0) this.y = canvas.height;
    }

    draw() {
      // Glowing particle
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      
      // Outer glow
      const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 3);
      gradient.addColorStop(0, `hsla(${this.hue}, 70%, ${this.brightness}%, ${this.alpha})`);
      gradient.addColorStop(1, `hsla(${this.hue}, 70%, ${this.brightness}%, 0)`);
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
      ctx.fill();

      // Inner core
      ctx.fillStyle = `hsla(${this.hue}, 80%, ${this.brightness + 20}%, ${this.alpha + 0.3})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    }
  }

  // Create particles
  for (let i = 0; i < 40; i++) {
    particles.push(new AdvancedParticle());
  }

  function drawConnections() {
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          const opacity = (150 - distance) / 150 * 0.3;
          ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    
    ctx.restore();
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
      particle.update();
      particle.draw();
    });
    
    drawConnections();
    requestAnimationFrame(animate);
  }

  animate();
}

function addEnhancedMouseFollower() {
  const follower = document.createElement('div');
  follower.setAttribute('data-mouse-follower', 'true');
  follower.style.cssText = `
    position: fixed;
    width: 40px;
    height: 40px;
    background: radial-gradient(circle, rgba(59,130,246,0.4), rgba(139,92,246,0.2), transparent);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.15s ease, opacity 0.3s ease;
    opacity: 0;
    filter: blur(1px);
    mix-blend-mode: screen;
  `;

  document.body.appendChild(follower);

  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    follower.style.opacity = '1';
  });

  document.addEventListener('mouseleave', () => {
    follower.style.opacity = '0';
  });

  // Smooth following animation
  function updateFollower() {
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;
    
    follower.style.left = followerX - 20 + 'px';
    follower.style.top = followerY - 20 + 'px';
    
    requestAnimationFrame(updateFollower);
  }
  updateFollower();

  // Interactive hover effects
  document.querySelectorAll('button, a, [class*="cursor-pointer"]').forEach(el => {
    el.addEventListener('mouseenter', () => {
      follower.style.transform = 'scale(1.5)';
      follower.style.background = 'radial-gradient(circle, rgba(236,72,153,0.6), rgba(168,85,247,0.3), transparent)';
    });
    
    el.addEventListener('mouseleave', () => {
      follower.style.transform = 'scale(1)';
      follower.style.background = 'radial-gradient(circle, rgba(59,130,246,0.4), rgba(139,92,246,0.2), transparent)';
    });
  });
}

function addGlowingEffects() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes glow {
      0%, 100% { box-shadow: 0 0 5px rgba(59,130,246,0.3), 0 0 10px rgba(139,92,246,0.2); }
      50% { box-shadow: 0 0 20px rgba(59,130,246,0.6), 0 0 30px rgba(139,92,246,0.4); }
    }
    
    .glow-on-hover:hover {
      animation: glow 2s ease-in-out infinite;
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    
    .floating {
      animation: float 3s ease-in-out infinite;
    }
  `;
  document.head.appendChild(style);

  setTimeout(() => {
    // Add glow effects to key elements
    document.querySelectorAll('button').forEach(btn => {
      btn.classList.add('glow-on-hover');
    });

    // Add floating animation to profile picture
    const profilePic = document.querySelector('img[alt*="Profile Picture"]')?.parentElement;
    if (profilePic) {
      profilePic.classList.add('floating');
    }
  }, 1000);
}

function addRippleEffects() {
  document.addEventListener('click', (e) => {
    const ripple = document.createElement('div');
    ripple.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      background: radial-gradient(circle, rgba(59,130,246,0.6), transparent);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      left: ${e.clientX - 10}px;
      top: ${e.clientY - 10}px;
      transform: scale(0);
      animation: ripple 0.6s ease-out forwards;
    `;

    document.body.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });

  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}

function addFloatingIcons() {
  const icons = ['💻', '🚀', '⚡', '🌟', '🎯', '🔥'];
  
  function createFloatingIcon() {
    const icon = document.createElement('div');
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];
    
    icon.style.cssText = `
      position: fixed;
      font-size: 20px;
      pointer-events: none;
      z-index: 2;
      left: ${Math.random() * window.innerWidth}px;
      top: ${window.innerHeight + 20}px;
      opacity: 0.7;
      animation: floatUp 8s linear forwards;
    `;
    icon.textContent = randomIcon;

    document.body.appendChild(icon);

    setTimeout(() => {
      icon.remove();
    }, 8000);
  }

  const style = document.createElement('style');
  style.textContent = `
    @keyframes floatUp {
      to {
        transform: translateY(-${window.innerHeight + 100}px) rotate(360deg);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  // Create floating icons periodically
  setInterval(createFloatingIcon, 3000);
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
              height: 4px;
              background: linear-gradient(90deg, #3B82F6, #8B5CF6, #EC4899);
              border-radius: 0 0 16px 16px;
              width: 0%;
              transition: width 2s ease;
              box-shadow: 0 0 10px rgba(59,130,246,0.5);
            `;

            card.style.position = 'relative';
            card.appendChild(progressBar);

            setTimeout(() => {
              const widths = [90, 85, 80, 88];
              progressBar.style.width = `${widths[index] || 85}%`;
            }, 100);
          }, index * 300);
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
          `<span style="opacity: 0; display: inline-block; transform: translateY(20px) rotate(5deg); transition: all 0.6s ease ${index * 0.1}s;">${word}</span>`
        ).join(' ');

        const spans = entry.target.querySelectorAll('span');
        spans.forEach((span, index) => {
          setTimeout(() => {
            span.style.opacity = '1';
            span.style.transform = 'translateY(0) rotate(0deg)';
          }, index * 150);
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

function addAdvancedHoverEffects() {
  setTimeout(() => {
    const cards = document.querySelectorAll('[class*="hover:shadow-xl"], [class*="hover:shadow-2xl"]');

    cards.forEach(card => {
      card.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';

      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px) scale(1.02) rotateX(5deg)';
        card.style.boxShadow = '0 25px 50px rgba(0,0,0,0.2), 0 0 30px rgba(59,130,246,0.3)';
        card.style.filter = 'brightness(1.05)';
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
        card.style.boxShadow = '';
        card.style.filter = 'brightness(1)';
      });
    });
  }, 500);
}
