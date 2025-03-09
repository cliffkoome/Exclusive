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

export const productsSwiper = new Swiper('.product-swiper', {
  slidesPerView: 4.5,
  direction: 'horizontal',
  loop: false,
  grid: {
    rows: 1,
    fill: 'row',
  },
});

export const productsSwiper2  = new Swiper('.product-swipper-2', {
  slidesPerView: 4,
  direction: 'horizontal',
  loop: false,
  grid: {
    rows: 2,
    fill: 'row',
  },
  spaceBetween: 20,
})

const wishlistSwiper = new Swiper('.wishlist', {
  slidesPerView: 4,
  direction: 'horizontal',
  loop: false,
  grid: {
    rows: 3,
    fill: 'row',
  },
  spaceBetween: 20,
})

const justForYou = new Swiper('.just-for-you', {
  slidesPerView: 4,
  direction: 'horizontal',
  loop: false,
  grid: {
    rows: 1,
    fill: 'row',
  },
})

export const memberSwiper = new Swiper('.members-swiper', {
  slidesPerView: 3,
  direction: 'horizontal',
  loop: false,
  spaceBetween: 50,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})