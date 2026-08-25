// Animated Letter Glitch Canvas Background
// Vanilla JS port of the LetterGlitch component

(function () {
  const glitchColors = ['#1e293b', '#0284c7', '#38bdf8', '#7c3aed', '#c084fc', '#059669', '#34d399'];
  const glitchSpeed = 60;
  const smooth = true;
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789';
  const fontSize = 16;
  const charWidth = 10;
  const charHeight = 20;

  const lettersAndSymbols = Array.from(characters);

  let canvas, ctx;
  let animationRef = null;
  let letters = [];
  let grid = { columns: 0, rows: 0 };
  let lastGlitchTime = Date.now();

  function getRandomChar() {
    return lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)];
  }

  function getRandomColor() {
    return glitchColors[Math.floor(Math.random() * glitchColors.length)];
  }

  function hexToRgb(hex) {
    if (hex.startsWith('rgb')) {
      const parts = hex.match(/\d+/g);
      return parts ? { r: parseInt(parts[0]), g: parseInt(parts[1]), b: parseInt(parts[2]) } : null;
    }
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) } : null;
  }

  function interpolateColor(start, end, factor) {
    const result = {
      r: Math.round(start.r + (end.r - start.r) * factor),
      g: Math.round(start.g + (end.g - start.g) * factor),
      b: Math.round(start.b + (end.b - start.b) * factor)
    };
    return `rgb(${result.r}, ${result.g}, ${result.b})`;
  }

  function calculateGrid(width, height) {
    const columns = Math.ceil(width / charWidth);
    const rows = Math.ceil(height / charHeight);
    return { columns, rows };
  }

  function initializeLetters(columns, rows) {
    grid = { columns, rows };
    const totalLetters = columns * rows;
    letters = Array.from({ length: totalLetters }, () => ({
      char: getRandomChar(),
      color: getRandomColor(),
      targetColor: getRandomColor(),
      colorProgress: 1
    }));
  }

  function resizeCanvas() {
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    if (ctx) {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    const { columns, rows } = calculateGrid(width, height);
    initializeLetters(columns, rows);
    drawLetters();
  }

  function drawLetters() {
    if (!ctx || letters.length === 0) return;
    const width = window.innerWidth;
    const height = window.innerHeight;
    ctx.clearRect(0, 0, width, height);
    ctx.font = `${fontSize}px monospace`;
    ctx.textBaseline = 'top';

    letters.forEach((letter, index) => {
      const x = (index % grid.columns) * charWidth;
      const y = Math.floor(index / grid.columns) * charHeight;
      ctx.fillStyle = letter.color;
      ctx.fillText(letter.char, x, y);
    });
  }

  function updateLetters() {
    if (!letters || letters.length === 0) return;
    const updateCount = Math.max(1, Math.floor(letters.length * 0.04));

    for (let i = 0; i < updateCount; i++) {
      const index = Math.floor(Math.random() * letters.length);
      if (!letters[index]) continue;

      letters[index].char = getRandomChar();
      letters[index].targetColor = getRandomColor();

      if (!smooth) {
        letters[index].color = letters[index].targetColor;
        letters[index].colorProgress = 1;
      } else {
        letters[index].colorProgress = 0;
      }
    }
  }

  function handleSmoothTransitions() {
    let needsRedraw = false;
    letters.forEach(letter => {
      if (letter.colorProgress < 1) {
        letter.colorProgress += 0.05;
        if (letter.colorProgress > 1) letter.colorProgress = 1;

        const startRgb = hexToRgb(letter.color);
        const endRgb = hexToRgb(letter.targetColor);
        if (startRgb && endRgb) {
          letter.color = interpolateColor(startRgb, endRgb, letter.colorProgress);
          needsRedraw = true;
        }
      }
    });

    if (needsRedraw) {
      drawLetters();
    }
  }

  function animate() {
    const now = Date.now();
    if (now - lastGlitchTime >= glitchSpeed) {
      updateLetters();
      drawLetters();
      lastGlitchTime = now;
    }

    if (smooth) {
      handleSmoothTransitions();
    }

    animationRef = requestAnimationFrame(animate);
  }

  document.addEventListener('DOMContentLoaded', () => {
    canvas = document.getElementById('glitchCanvas');
    if (!canvas) return;

    ctx = canvas.getContext('2d');
    resizeCanvas();
    animate();

    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (animationRef) cancelAnimationFrame(animationRef);
        resizeCanvas();
        animate();
      }, 100);
    });
  });
})();
