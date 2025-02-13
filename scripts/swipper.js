const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
});

const productsSwiper = new Swiper('.product-swiper', {
  slidesPerView: 4.5,
  direction: 'horizontal',
  loop: false,
  grid: {
    rows: 1,
    fill: 'row',
  },
});

const productsSwiper2  = new Swiper('.product-swipper-2', {
  slidesPerView: 4,
  direction: 'horizontal',
  loop: false,
  grid: {
    rows: 2,
    fill: 'row',
  },
  spaceBetween: 20,
})

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