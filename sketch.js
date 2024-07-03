document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('.slider');
  
  sliders.forEach(slider => {
    slider.addEventListener('input', () => {
        updateImage(slider);
    });

    slider.addEventListener('mousedown', () => {
        if (!slider.dataset.initialized) {
            slider.value = 1;
            updateImage(slider);
            slider.dataset.initialized = true;
        }
    });
});
});

function updateImage(slider) {
  const imageContainer = document.getElementById('imageContainer');
  const sliders = document.querySelectorAll('.slider');
  
  sliders.forEach(s => {
    const label = s.previousElementSibling;
    if (s === slider) {
        s.style.opacity = '1';
        label.style.opacity = '1';
    } else {
        s.style.opacity = '0.5';
        label.style.opacity = '0.5';
    }
});

  let imageName = '';
  switch (slider.name) {
      case 'colors':
          imageName = `assets/color${slider.value}.png`;
          break;
      case 'logoSize':
          imageName = `assets/logo${slider.value}.png`;
          break;
      case 'information':
          imageName = `assets/info${slider.value}.png`;
          break;
      case 'photoToIllustration':
          imageName = `assets/photo${slider.value}.png`;
          break;
      case 'copy':
          imageName = `assets/copy${slider.value}.png`;
          break;
  }
  
  imageContainer.style.backgroundImage = `url(${imageName})`;
}