// ==================
// JS Slider
// ==================

const carousel = document.querySelector('.carousel-main');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

let translateX = 0;

leftArrow.addEventListener('click', () => {
  if (translateX < 0) {
    translateX += carousel.offsetWidth / Math.floor(carousel.offsetWidth / carousel.firstElementChild.offsetWidth);
    carousel.style.transform = `translateX(${translateX}px)`;
  }
});

rightArrow.addEventListener('click', () => {
  if (translateX > -(carousel.scrollWidth - carousel.offsetWidth)) {
    translateX -= carousel.offsetWidth / Math.floor(carousel.offsetWidth / carousel.firstElementChild.offsetWidth);
    carousel.style.transform = `translateX(${translateX}px)`;
  }
});