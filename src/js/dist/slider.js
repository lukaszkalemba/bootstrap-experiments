const slider = document.querySelector('.js-slider');
const boxContent = slider.firstChild.textContent;

window.addEventListener('load', e => {
  if (window.innerWidth >= 992) {
    slider.firstChild.textContent = '';
  } else {
    slider.firstChild.textContent = boxContent;
  }
});

window.addEventListener('resize', e => {
  if (window.innerWidth >= 992) {
    slider.firstChild.textContent = '';
  } else {
    slider.firstChild.textContent = boxContent;
  }
});
