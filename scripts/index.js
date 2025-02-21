import { productsSwiper, productsSwiper2 } from "./swipper.js";
import { products } from "../data/products.js";

let flashSalesHTML = '';
let flashSaleItems = 0;

products.forEach((item) => {
  const productId = item.productId;
  const name = item.name;
  const priceCents = item.priceCents;
  const discount = item.discount;
  const rating = item.rating;
  const image = item.image;

  if (discount >= 0.35) {
    flashSaleItems ++;
    flashSalesHTML +=
  `
    <div class="swiper-slide">
      <div class="item-card">
        <div class="item-card-image">
          <img src="${image}" class="item-card-img">
          <div class="discount">
            -${(discount*100).toFixed(0)}%
          </div>
          <div class="add-to-cart">
            Add To Cart
          </div>
          <div class="like-btn">
            <i class="fa-solid fa-heart"></i>
          </div>
          <div class="view-btn">
            <i class="fa-solid fa-eye"></i>
          </div>
        </div>
        <div class="item-card-info">
          <div class="item-card-info-name">${name}</div>
          <div class="item-card-info-price">$${((priceCents/100)-((priceCents/100)*discount)).toFixed(2)}<span style="text-decoration: line-through; margin-left: 10px; color: gray;">${priceCents/100}</span></div>
          <div class="item-card-info-rating">Rating: ${rating*0.1}</div>
        </div>
      </div>
    </div>
  `;
  }
});

if (flashSaleItems === 0) {
  document.querySelector('.today-section').innerHTML ='';
}

document.querySelector('.js-flash-sales').innerHTML = flashSalesHTML;

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