const swiper = new Swiper('.swiper', {
  direction: 'horizontal',

  grid: {
    rows: 1,
  },

  fill: 'row',

  loop: false,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay: {
    delay: 5000,
  },

});

const productsSwiper = new Swiper('.product-swiper', {
  slidesPerView: 5.5,
  direction: 'horizontal',
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
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