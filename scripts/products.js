import { products } from "../data/products.js";
import { addToCart, calculateCartItems } from "../data/cart.js";
import { addToWishlist, removeFromWishlist, wishlist, calculateWishlistItems } from "./wishlist.js"

calculateCartItems();
calculateWishlistItems();

let productsHTML = '';

products.forEach((item) => {
  const productId = item.productId;
  const name = item.name;
  const priceCents = item.priceCents;
  const discount = item.discount;
  const rating = item.rating;
  const image = item.image;

  productsHTML +=
    `
    <div class="item-card">
      <div class="item-card-image">
        <img src="${image}" class="item-card-img">
        <div class="discount">
          -${(discount * 100).toFixed(0)}%
        </div>
        <div class="add-to-cart" data-product-id="${productId}">
          Add To Cart
        </div>
        <div class="like-btn">
          <i class="fa-solid fa-heart" data-product-id="${productId}"></i>
        </div>
        <div class="view-btn">
          <i class="fa-solid fa-eye"></i>
        </div>
      </div>
      <div class="item-card-info">
        <div class="item-card-info-name">${name}</div>
        <div class="item-card-info-price">$${((priceCents / 100) - ((priceCents / 100) * discount)).toFixed(2)} <span style="text-decoration: line-through; margin-left: 10px; color: gray;">${priceCents / 100}</span></div>
        <div class="item-card-info-rating">Rating: ${rating * 0.1}</div>
      </div>
    </div>
  `
});

const productGrid = document.querySelector('.products-grid');
productGrid.innerHTML = productsHTML;

const heartElement = document.querySelectorAll('.like-btn .fa-heart');

heartElement.forEach(button => {
  const { productId } = button.dataset;
  if(wishlist.find(item => item.productId === productId)) {
    button.classList.add('fa-heart-clicked');
  }
  button.addEventListener('click', () => {
    if (button.classList.contains('fa-heart-clicked')) {
      removeFromWishlist(productId);
      button.classList.remove('fa-heart-clicked');
      calculateWishlistItems();
    } else {
      addToWishlist(productId);
      button.classList.add('fa-heart-clicked');
      calculateWishlistItems();
    }
  });
});

document.querySelectorAll('.add-to-cart').forEach((product) => {
  const { productId } = product.dataset;
  product.addEventListener('click', () => {
    addToCart(productId);
  })
})