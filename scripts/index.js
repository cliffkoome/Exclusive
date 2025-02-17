import { productsSwiper, productsSwiper2 } from "./swipper.js";

const heartElement = document.querySelectorAll('.like-btn .fa-heart');

heartElement.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('fa-heart-clicked')) {
      button.classList.remove('fa-heart-clicked');
    } else {
      button.classList.add('fa-heart-clicked');
    }
  });
});

document.querySelector('.fa-arrow-up').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

document.querySelector('.js-today-arrow-right').addEventListener('click', () => {
  productsSwiper.slideNext();
});

document.querySelector('.js-today-arrow-left').addEventListener('click', () => {
  productsSwiper.slidePrev();
});

document.querySelector('.js-products-arrow-right').addEventListener('click', () => {
  productsSwiper2.slideNext();
});

document.querySelector('.js-products-arrow-left').addEventListener('click', () => {
  productsSwiper2.slidePrev();
});