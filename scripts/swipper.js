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
  slidesPerView: 5.5,
  direction: 'horizontal',
  loop: false,
  grid: {
    rows: 1,
    fill: 'row',
  },
})


document.querySelector('.js-arrow-right').addEventListener('click', () => {
  productsSwiper.slideNext();
});

document.querySelector('.js-arrow-left').addEventListener('click', () => {
  productsSwiper.slidePrev();
});