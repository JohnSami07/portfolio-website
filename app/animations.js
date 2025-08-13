'use client';

export function initializeAnimations() {
  if (typeof window === 'undefined') return;

  // Intersection Observer for fade-in animations
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

  // Observe all sections
  document.querySelectorAll('section, header').forEach(el => {
    el.classList.add('opacity-0', 'translate-y-8');
    observer.observe(el);
  });

  // Floating particles background
  createFloatingParticles();

  // Skill cards hover effects
  addSkillCardEffects();

  // Project cards 3D effects
  addProjectCard3DEffects();

  // Typing animation for hero text
  addTypingAnimation();

  // Add parallax scrolling
  addParallaxEffect();
}

function createFloatingParticles() {
  const canvas = document.createElement('canvas');
  canvas.id = 'particles-canvas';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '1';
  canvas.style.opacity = '0.6';
  
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
      this.size = Math.random() * 3 + 1;
      this.speedX = Math.random() * 2 - 1;
      this.speedY = Math.random() * 2 - 1;
      this.color = `hsla(${Math.random() * 60 + 200}, 70%, 60%, 0.3)`;
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
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }
  
  // Create particles
  for (let i = 0; i < 50; i++) {
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

function addSkillCardEffects() {
  const skillCards = document.querySelectorAll('[class*="bg-blue-50"], [class*="bg-green-50"], [class*="bg-purple-50"], [class*="bg-orange-50"]');
  
  skillCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px) rotateX(5deg)';
      card.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
      card.style.transition = 'all 0.3s ease';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) rotateX(0)';
      card.style.boxShadow = '';
    });
  });
}

function addProjectCard3DEffects() {
  const projectCards = document.querySelectorAll('[class*="bg-gradient-to-br"]');
  
  projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
      card.style.transition = 'transform 0.1s ease';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      card.style.transition = 'transform 0.3s ease';
    });
  });
}

function addTypingAnimation() {
  const title = document.querySelector('h1');
  if (!title) return;
  
  const text = title.textContent;
  title.textContent = '';
  title.style.borderRight = '3px solid #3B82F6';
  
  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      title.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    } else {
      setTimeout(() => {
        title.style.borderRight = 'none';
      }, 1000);
    }
  }
  
  setTimeout(typeWriter, 1000);
}

function addParallaxEffect() {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    const hero = document.querySelector('header');
    if (hero) {
      hero.style.transform = `translateY(${rate}px)`;
    }
  });
}

// Mouse trail effect
function addMouseTrail() {
  const trail = [];
  const trailLength = 10;
  
  document.addEventListener('mousemove', (e) => {
    trail.push({ x: e.clientX, y: e.clientY, age: 0 });
    
    if (trail.length > trailLength) {
      trail.shift();
    }
    
    trail.forEach((point, index) => {
      point.age++;
      
      const div = document.createElement('div');
      div.style.position = 'fixed';
      div.style.left = point.x + 'px';
      div.style.top = point.y + 'px';
      div.style.width = '8px';
      div.style.height = '8px';
      div.style.borderRadius = '50%';
      div.style.background = `hsla(${220 + index * 10}, 70%, 60%, ${1 - point.age / trailLength})`;
      div.style.pointerEvents = 'none';
      div.style.zIndex = '9999';
      div.style.transform = `scale(${1 - point.age / trailLength})`;
      
      document.body.appendChild(div);
      
      setTimeout(() => {
        if (div.parentNode) {
          div.parentNode.removeChild(div);
        }
      }, 200);
    });
  });
}

// Initialize mouse trail
addMouseTrail();
