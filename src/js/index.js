const slider = document.querySelector('.js-slider');
const sliderBoxContent = slider.firstChild.textContent;
const cards = document.querySelector('.js-cards');
const cardsBoxContent = cards.firstChild.textContent;

window.addEventListener('load', e => {
  if (window.innerWidth >= 1200) {
    slider.firstChild.textContent = '';
    cards.firstChild.textContent = '';
  } else {
    slider.firstChild.textContent = sliderBoxContent;
    cards.firstChild.textContent = cardsBoxContent;
  }
});

window.addEventListener('resize', e => {
  if (window.innerWidth >= 1200) {
    slider.firstChild.textContent = '';
    cards.firstChild.textContent = '';
  } else {
    slider.firstChild.textContent = sliderBoxContent;
    cards.firstChild.textContent = cardsBoxContent;
  }
});

const modal = document.querySelector('.js-modal');
const modalBoxContent = modal.firstChild.textContent;

window.addEventListener('load', e => {
  if (window.innerWidth >= 1200) {
    modal.firstChild.textContent = '';
  } else {
    modal.firstChild.textContent = modalBoxContent;
  }
});

window.addEventListener('resize', e => {
  if (window.innerWidth >= 1200) {
    modal.firstChild.textContent = '';
  } else {
    modal.firstChild.textContent = modalBoxContent;
  }
});

$(function() {
  $('[data-toggle="tooltip"]').tooltip();
});
