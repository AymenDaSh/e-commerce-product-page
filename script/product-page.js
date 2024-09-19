import "./menu.js";
import "./images.js";
import { cart, addToCart,renderCartInfo,quantitySelector } from "../data/cart.js";
import { products, roundPrice } from "../data/products.js";

const product = products[0];

function renderProductInfo() {
  const productInfo =  document.querySelector(".js-product-info");

  const productInfoHTML = `
      <p class="product-company">${product.company}</p>
      <h1>${product.name}</h1>
      <p class="product-description">${product.description}</p>
      <div class="price-container">
        <div class="price-row">
          <p class="product-price">$${roundPrice(product.price)}</p>
          <p class="discount">50%</p>
        </div>
        <p class="price-discounted">$250.00</p>
      </div>
      
      <div class="add-to-cart-row">
        <div class="quantity-selector">
          <button class="button-minus js-btn-minus">-</button>
          <p class="quantity js-quantity">0</p>
          <button class="button-plus js-btn-plus">+</button>
        </div>
        <button class="add-to-cart-btn js-add-to-cart-btn"><img alt="add-to-cart-icon" src="images/icon-cart.svg">Add to cart</button>
      </div>
  `;


  productInfo.innerHTML = productInfoHTML;
}

renderProductInfo();
quantitySelector();
      
addToCart(product);
