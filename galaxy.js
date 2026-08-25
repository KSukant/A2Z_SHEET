// Interactive 3D Galaxy Canvas Background
// Custom prop equivalent: mouseRepulsion, mouseInteraction, density=1, glowIntensity=0.3, saturation=0, hueShift=140, twinkleIntensity=0.3, rotationSpeed=0.1, repulsionStrength=2, starSpeed=0.5

(function () {
  const config = {
    density: 1, // 1000 - 1500 stars
    glowIntensity: 0.3,
    saturation: 0,
    hueShift: 140, // Green/cyan/violet tint shift
    twinkleIntensity: 0.3,
    rotationSpeed: 0.002, // Base rotation
    repulsionStrength: 2.5,
    repulsionRadius: 180,
    starSpeed: 0.5,
    mouseInteraction: true,
    mouseRepulsion: true
  };

  let canvas, ctx;
  let animationRef = null;
  let stars = [];
  let mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000, active: false };
  let galaxyAngle = 0;

  class Star {
    constructor(width, height) {
      this.reset(width, height, true);
    }

    reset(width, height, initial = false) {
      const centerX = width / 2;
      const centerY = height / 2;
      const maxRadius = Math.max(width, height) * 0.7;

      // Spiral arms distribution
      const arms = 3;
      const armAngle = (Math.floor(Math.random() * arms) * (2 * Math.PI)) / arms;
      const distance = Math.pow(Math.random(), 1.5) * maxRadius;
      const spiralOffset = distance * 0.003;

      this.orbitRadius = distance;
      this.angle = armAngle + spiralOffset + (Math.random() - 0.5) * 0.5;
      
      this.x = centerX + Math.cos(this.angle) * this.orbitRadius;
      this.y = centerY + Math.sin(this.angle) * this.orbitRadius;
      
      this.baseX = this.x;
      this.baseY = this.y;

      this.vx = 0;
      this.vy = 0;

      this.size = Math.random() * 2 + 0.5;
      this.baseAlpha = Math.random() * 0.7 + 0.3;
      this.alpha = this.baseAlpha;
      this.twinklePhase = Math.random() * Math.PI * 2;
      this.twinkleSpeed = (Math.random() * 0.03 + 0.01) * config.starSpeed;

      // Color from hue shift
      const baseHue = (config.hueShift + (distance / maxRadius) * 60 + Math.random() * 30) % 360;
      const sat = config.saturation; // Saturation 0% -> monochrome white/cyan glow
      const lightness = Math.floor(Math.random() * 30 + 70);
      this.color = `hsla(${baseHue}, ${sat}%, ${lightness}%, `;
    }

    update(width, height, mouse, angleDelta) {
      const centerX = width / 2;
      const centerY = height / 2;

      // Orbit rotation around center
      this.angle += (0.0005 + (1 / (this.orbitRadius + 100)) * 0.5) * config.starSpeed;
      
      const targetBaseX = centerX + Math.cos(this.angle) * this.orbitRadius;
      const targetBaseY = centerY + Math.sin(this.angle) * this.orbitRadius;

      // Mouse repulsion physics
      if (config.mouseInteraction && config.mouseRepulsion && mouse.active) {
        const dx = targetBaseX - mouse.x;
        const dy = targetBaseY - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < config.repulsionRadius && dist > 0) {
          const force = (1 - dist / config.repulsionRadius) * config.repulsionStrength * 4;
          const angle = Math.atan2(dy, dx);
          this.vx += Math.cos(angle) * force;
          this.vy += Math.sin(angle) * force;
        }
      }

      // Spring force returning to orbit path
      this.vx += (targetBaseX - this.x) * 0.05;
      this.vy += (targetBaseY - this.y) * 0.05;

      // Friction
      this.vx *= 0.88;
      this.vy *= 0.88;

      this.x += this.vx;
      this.y += this.vy;

      // Twinkle animation
      this.twinklePhase += this.twinkleSpeed;
      const twinkle = Math.sin(this.twinklePhase) * config.twinkleIntensity;
      this.alpha = Math.min(1, Math.max(0.1, this.baseAlpha + twinkle));
    }

    draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color + this.alpha + ')';
      ctx.fill();

      // Soft glow for larger stars
      if (this.size > 1.4 && config.glowIntensity > 0) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = this.color + (this.alpha * config.glowIntensity) + ')';
        ctx.fill();
      }
    }
  }

  function initStars(width, height) {
    const starCount = Math.floor((width * height) / 1200 * config.density);
    stars = [];
    for (let i = 0; i < starCount; i++) {
      stars.push(new Star(width, height));
    }
  }

  function resizeCanvas() {
    if (!canvas) return;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const dpr = window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    if (ctx) {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    initStars(width, height);
  }

  function drawGalaxyCore(width, height) {
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) * 0.35;

    const grad = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
    grad.addColorStop(0, `hsla(${config.hueShift}, 20%, 90%, ${0.15 * config.glowIntensity})`);
    grad.addColorStop(0.3, `hsla(${config.hueShift}, 30%, 50%, ${0.08 * config.glowIntensity})`);
    grad.addColorStop(1, 'rgba(5, 8, 17, 0)');

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);
  }

  function render() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Smooth mouse position interpolation
    mouse.x += (mouse.targetX - mouse.x) * 0.15;
    mouse.y += (mouse.targetY - mouse.y) * 0.15;

    ctx.clearRect(0, 0, width, height);
    
    // Draw central galaxy glow
    drawGalaxyCore(width, height);

    // Update and draw all stars
    stars.forEach(star => {
      star.update(width, height, mouse, config.rotationSpeed);
      star.draw(ctx);
    });

    animationRef = requestAnimationFrame(render);
  }

  document.addEventListener('DOMContentLoaded', () => {
    canvas = document.getElementById('galaxyCanvas');
    if (!canvas) return;

    ctx = canvas.getContext('2d');
    resizeCanvas();
    render();

    // Window Resize handler
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (animationRef) cancelAnimationFrame(animationRef);
        resizeCanvas();
        render();
      }, 100);
    });

    // Mouse Interaction Handlers
    window.addEventListener('mousemove', (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    });

    window.addEventListener('mouseleave', () => {
      mouse.active = false;
    });

    // Touch support for mobile devices
    window.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        mouse.targetX = e.touches[0].clientX;
        mouse.targetY = e.touches[0].clientY;
        mouse.active = true;
      }
    }, { passive: true });

    window.addEventListener('touchend', () => {
      mouse.active = false;
    });
  });
})();
