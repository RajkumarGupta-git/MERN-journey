document.addEventListener('DOMContentLoaded', () => {
  const paletteContainer = document.getElementById('palette');
  const generateBtn = document.getElementById('generateBtn');
  const toast = document.getElementById('toast');
  const COLOR_COUNT = 5;
  let colors = [];

  function getRandomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function getContrastColor(hex) {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? '#000000' : '#FFFFFF';
  }

  function initPalette() {
    for (let i = 0; i < COLOR_COUNT; i++) {
      colors.push({
        hex: getRandomHexColor(),
        isLocked: false
      });
    }
    renderPalette();
  }

  function generatePalette() {
    colors = colors.map(colorObj => {
      if (colorObj.isLocked) return colorObj;
      return {
        ...colorObj,
        hex: getRandomHexColor()
      };
    });
    renderPalette();
  }

  function renderPalette() {
    paletteContainer.innerHTML = '';

    colors.forEach((colorObj, index) => {
      const card = document.createElement('div');
      card.className = 'color-card';
      card.style.backgroundColor = colorObj.hex;

      const textColor = getContrastColor(colorObj.hex);

      const hexText = document.createElement('span');
      hexText.className = 'color-hex';
      hexText.style.color = textColor;
      hexText.textContent = colorObj.hex;

      hexText.addEventListener('click', (e) => {
        e.stopPropagation();
        copyToClipboard(colorObj.hex);
      });

      const lockBtn = document.createElement('button');
      lockBtn.className = 'lock-btn';
      lockBtn.style.color = textColor;
      lockBtn.innerHTML = colorObj.isLocked
        ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`
        : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg>`;

      lockBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        colors[index].isLocked = !colors[index].isLocked;
        renderPalette();
      });

      card.appendChild(lockBtn);
      card.appendChild(hexText);

      card.addEventListener('click', () => {
        copyToClipboard(colorObj.hex);
      });

      paletteContainer.appendChild(card);
    });
  }

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      showToast();
    });
  }

  function showToast() {
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2000);
  }

  generateBtn.addEventListener('click', generatePalette);

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && e.target === document.body) {
      e.preventDefault();
      generatePalette();
    }
  });

  initPalette();
});