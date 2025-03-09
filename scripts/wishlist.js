import { calculateCartItems, getMatchingItem, addToCart } from "../data/cart.js";

export let wishlist;

loadFromStorage();

calculateCartItems();
calculateWishlistItems();

function getWishlistItem(productId) {
  return wishlist.findIndex(item => item.productId === productId);
}

export function addToWishlist(productId) {
  const product = getMatchingItem(productId);
  wishlist.push(product);
  saveToStorage(wishlist);
}

export function removeFromWishlist(productId) {
  const itemIndex = getWishlistItem(productId);
  wishlist.splice(itemIndex, 1);
  saveToStorage(wishlist);
}

function saveToStorage(wishlist) {
  localStorage.setItem('exclusive-wishlist', JSON.stringify(wishlist));
}

function loadFromStorage() {
  wishlist = JSON.parse(localStorage.getItem('exclusive-wishlist'));

  if (!wishlist) {
    wishlist = [];
  }
}

export function calculateWishlistItems() {
  let wishlistItems = 0;

  wishlist.forEach(() => {
    wishlistItems++;
  })

  document.querySelector('.heart-icon-counter').innerHTML = wishlistItems;
}

renderWishlist();

function renderWishlist() {
  let wishlistHTML = '';

  wishlist.forEach((item) => {
    const productId = item.productId;
    const name = item.name;
    const priceCents = item.priceCents;
    const discount = item.discount;
    const rating = item.rating;
    const image = item.image;

    wishlistHTML +=
      `
    <div class="swiper-slide">
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
          <div class="item-card-info-price">$${((priceCents / 100) - ((priceCents / 100) * discount)).toFixed(2)}<span style="text-decoration: line-through; margin-left: 10px; color: gray;">${priceCents / 100}</span></div>
          <div class="item-card-info-rating">Rating: ${rating * 0.1}</div>
        </div>
      </div>
    </div>
    `
  });

  const wishlistContainer = document.querySelector('.js-wishlist');
  if (wishlistContainer) {
    wishlistContainer.innerHTML = wishlistHTML;
    if(wishlistHTML === '') {
      wishlistContainer.innerHTML = '<h1 style="margin-left: auto; margin-right:auto">Wishlist is Empty</h1>';
    }
  }
}

const heartElement = document.querySelectorAll('.like-btn .fa-heart');

heartElement.forEach(button => {
  const { productId } = button.dataset;
  if (wishlist.find(item => item.productId === productId)) {
    button.classList.add('fa-heart-clicked');
  }
  button.addEventListener('click', () => {
    if (button.classList.contains('fa-heart-clicked')) {
      removeFromWishlist(productId);
      calculateWishlistItems();
      button.classList.remove('fa-heart-clicked');
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