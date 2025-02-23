import { products } from "./products.js";

export let cart;

loadFromStorage();

export function addToCart(addedProductId) {
  const product = getMatchingItem(addedProductId);
  cart.push(product);
  console.log(cart);

  saveToLocalStorage(cart);
  calculateCartItems();
}

export function removeFromCart(removedProductId) {
  const newCart = [];
  cart.forEach((cartItem) => {
    if(cartItem.productId !== removedProductId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;
  saveToLocalStorage(cart);
  calculateCartItems();
}

function getMatchingItem(addedProductId) {
  let matchingItem;
  products.forEach((product) => {   
    if (addedProductId === product.productId) {
      matchingItem = product;
    }
  });
  return matchingItem;
}

function saveToLocalStorage(cart) {
  localStorage.setItem('exclusive', JSON.stringify(cart));
}

function loadFromStorage() {
  cart = JSON.parse(localStorage.getItem('exclusive'));

  if (!cart) {
    cart = [{
      productId: 'product-21',
      name:'Black Leather Shoes',
      priceCents: 5500,
      discount: 0.1,
      rating: 50,
      image: 'images/product-29.jpg'
    }];
  }
}

export function calculateCartItems() {
  let cartCount = 0;

  cart.forEach(() => {
    cartCount ++;
  });

  document.querySelector('.cart-icon-counter').innerHTML = cartCount;
  console.log(cartCount);
}