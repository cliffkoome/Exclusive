import { cart, removeFromCart, calculateCartItems } from "../data/cart.js";
import { calculateWishlistItems } from "./wishlist.js"

renderCart();
renderOrderSummary();
calculateCartItems();
calculateWishlistItems();

function renderCart() {
  let cartHTML='';

  if(cart.length < 1) {
    cartHTML += '<h1 style="font-size: 60px; margin-top: 100px; margin-bottom: 100px">Cart is Empty<h1>';
  } else {
    cart.forEach((cartItem) => {
      const productId = cartItem.productId;
      const name = cartItem.name;
      const priceCents = cartItem.priceCents;
      const discount = cartItem.discount;
      const price = ((priceCents/100)-((priceCents/100)*discount)).toFixed(2);
      const image = cartItem.image;
  
      cartHTML += 
      `
        <div class="item">
          <div class="item-section1">
            <div class="item-section item-section-image"><img src="${image}" class="product-img"></div>
            <div class="item-section item-section-name">${name}</div>
          </div>
          <div class="item-section item-section-price">$${price}</div>
          <div class="item-section item-section-quantity">1</div>
          <div class="item-section item-section-subtotal">$${price*1}</div>
          <div class="delete-item" data-product-id="${productId}">Delete</div>
        </div>
      `
    });
  }

  document.querySelector('.items').innerHTML = cartHTML;
  renderOrderSummary();

  document.querySelectorAll('.delete-item').forEach((item) => {
    const {productId} = item.dataset;
    item.addEventListener('click', () => {
      removeFromCart(productId);
      renderCart();
    })
  });
}

function renderOrderSummary () {
  let subtotal = 0;
  let orderSummaryHTML;

  if (cart.length < 1) {
    orderSummaryHTML = 
    `
    `;
  } else {
    cart.forEach((cartItem) => {
      const priceCents = cartItem.priceCents;
      const discount = cartItem.discount;
      const price = ((priceCents/100)-((priceCents/100)*discount)).toFixed(2);
  
      subtotal += Number(price);
    });
  
    orderSummaryHTML = 
      `
      <div class="coupons">
        <input type="text" placeholder="Coupon Code" class="coupon-input">
        <button class="coupon-btn">Apply Coupon</button>
      </div>
    <div class="cart-total">
      <p class="total-header">Cart Total</p>
        <div class="subtotal">
          <p>Subtotal:</p>
          <p>$${subtotal}</p>
        </div>
        <div class="shipping">
          <p>Shipping:</p>
          <p>Free</p>
        </div>
        <div class="total">
          <p>Total</p>
          <p>$${subtotal}</p>
        </div>
        <div class="checkout">
          <button onclick="location='checkout.html'">Proceed to checkout</button>
        </div>
    </div>
      `;
  }

    document.querySelector('.order-summary').innerHTML = orderSummaryHTML;
}