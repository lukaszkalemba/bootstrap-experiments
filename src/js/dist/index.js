const slider = document.querySelector('.js-slider');
const cards = document.querySelector('.js-cards');
const modal = document.querySelector('.js-modal');
const collapse = document.querySelector('.js-collapse');
const sliderBoxContent = slider.firstChild.textContent;
const cardsBoxContent = cards.firstChild.textContent;
const modalBoxContent = modal.firstChild.textContent;
const collapseBoxContent = collapse.firstChild.textContent;

window.addEventListener('load', e => {
  if (window.innerWidth >= 1200) {
    slider.firstChild.textContent = '';
    cards.firstChild.textContent = '';
    modal.firstChild.textContent = '';
    collapse.firstChild.textContent = '';
  } else {
    slider.firstChild.textContent = sliderBoxContent;
    cards.firstChild.textContent = cardsBoxContent;
    modal.firstChild.textContent = modalBoxContent;
    collapse.firstChild.textContent = collapseBoxContent;
  }
});

window.addEventListener('resize', e => {
  if (window.innerWidth >= 1200) {
    slider.firstChild.textContent = '';
    cards.firstChild.textContent = '';
    modal.firstChild.textContent = '';
    collapse.firstChild.textContent = '';
  } else {
    slider.firstChild.textContent = sliderBoxContent;
    cards.firstChild.textContent = cardsBoxContent;
    modal.firstChild.textContent = modalBoxContent;
    collapse.firstChild.textContent = collapseBoxContent;
  }
});

$(function() {
  $('[data-toggle="tooltip"]').tooltip();
});

$(function() {
  $('[data-toggle="popover"]').popover();
});
