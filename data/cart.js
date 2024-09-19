export let cart = [] ;


export function calculateCartQuantity(){
  let total = 0;
  cart.forEach((item) => {
    total += item.quantity;
  });

  return total
}

export function renderCartInfo(name,price,quantity){
  const cartInfo = document.querySelector(".js-cart-info")
  const cartInfoHTML = `
     <div class="product-in-cart">
                <img alt="product image" src="images/image-product-1-thumbnail.jpg" class="product-image-cart-info">
                <div class="product-in-cart-info">
                  <p class="product-in-cart-name">${name}</p>
                  <p class="product-total-price">$${price} x ${quantity} <span class="total">$${price * quantity}</span></p>
                </div>
                <img class="delete-product js-delete-product" alt="delte icon" src="images/icon-delete.svg">
               </div>
               <button class="checkout-btn">Checkout</button>
  `;
  if(quantity === 0){
    cartInfo.innerHTML = "Your cart is empty"
    document.querySelector(".cart-empty").classList.remove("cart-fill");
    
  }else{
    cartInfo.innerHTML = cartInfoHTML;
    document.querySelector(".cart-empty").classList.add("cart-fill");
    deleteCartItem(cartInfo,name);

    // add notification
    document.querySelector(".js-cart-notif").style.display = "flex"; 
    document.querySelector(".js-cart-notif").innerHTML = quantity;
  }


  
}

let selectedQuantity = 0;

export function quantitySelector(){
  const quantityHTML = document.querySelector(".js-quantity");

  function updateQuantity(){
    quantityHTML.innerHTML = selectedQuantity;
  }
  document.querySelector(".js-btn-plus")
    .addEventListener("click",() => {
      console.log("quantity added")
      selectedQuantity ++;
      updateQuantity()
      });
  
  document.querySelector(".js-btn-minus")
  .addEventListener("click",() => {
    if(selectedQuantity > 0){
      console.log("quantity deleted")
      selectedQuantity --;
      updateQuantity()
    }
    });
    updateQuantity()
}

export function addToCart(product){

  document.querySelector(".js-add-to-cart-btn")
   .addEventListener("click",() => {

    //array.findIndex(callback(element[, index[, array]])[, thisArg])
    const productIndex = cart.findIndex(item => item.name === product.name);

    if(productIndex > -1){ //it no match is found findindex returns -1
      //product already exists in the cart
      cart[productIndex].quantity += selectedQuantity;
    }else{
      cart.push({
        name: product.name,
        quantity: selectedQuantity
       })
    }

    renderCartInfo(product.name,product.price,calculateCartQuantity())
    
   });
}


function deleteCartItem(cartInfo,productName){
  document.querySelector(".js-delete-product")
  .addEventListener("click", () => {
    cartInfo.innerHTML = "Your cart is empty"
    document.querySelector(".cart-empty").classList.remove("cart-fill");
    document.querySelector(".js-quantity").innerHTML = 0;
    document.querySelector(".js-cart-notif").style.display = "none";
    const productIndex = cart.findIndex(item => item.name === productName);

    cart.splice(productIndex,1);
    console.log(cart);
  });
}








