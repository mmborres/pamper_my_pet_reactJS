import UserProfile from './UserProfile';
import axios from 'axios';

const AddToCart = (function() {
  let cart = [];
  let order_id = 0;
  const userId = UserProfile.getUserId();
  const URL = "https://pamper-my-pet.herokuapp.com/orders.json";
  let temp = null;

  const getCart = function() {
    if (typeof (Storage) !== "undefined") {
      temp = localStorage.getItem('cart');
      if (temp !== null) {
        console.log("getCart 1");
        cart = JSON.parse(temp);
      }
      if (temp===null || cart===null) {
        cart = [];

        console.log("getCart == " + cart)
        return cart;
      }

    }

  };

  const getCartItems = function () {
    let cart = getCart();
    if (cart===null) {
      cart = [];
    }
    return cart.length;
  }

  const setCart = function(product_id, name, image, price, quantity, order_item_id) {
    console.log('addtocart order_item_id = ', order_item_id);

    if (product_id !== null && quantity !== null && name !== null && quantity !== null && order_item_id !== null) {
      console.log("setCart 1");
      // Update product quantity in cart if product already exists
      if (cart !== null && cart.some((item) => product_id === item.id)) {
        console.log("setCart 2");
        const productIndex = cart.findIndex((item) => product_id === item.id);
        cart[productIndex].quantity += quantity;
        console.log('Updated cart', cart);


        if (typeof (Storage) !== "undefined") {
          localStorage.setItem('cart', JSON.stringify(cart));
        }
      } else {
        console.log("setCart 3");
        // IF product does not exist in cart then add in Cart
        addInCart(product_id, name, image, price, quantity, order_item_id);
      }
    }
  };

  const addInCart = function(product_id, name, image, price, quantity, order_item_id) {
    if (product_id !== null && quantity !== null && name !== null && quantity !== null && order_item_id !== null) {

      console.log("setCart 4");

      const product = {
        id: product_id,
        name: name,
        image: image,
        price: price,
        quantity: quantity,
        order_item_id: order_item_id
      };

      const cart = getCart();

      if (cart === null) {
        cart = [];
      }

      cart.push(product);

      if (typeof (Storage) !== "undefined") {
        localStorage.setItem('cart', JSON.stringify(cart));
      }
      console.log("setCart 5");
      //console.log('cart', cart);
    }
  };

  const emptyCart = function() {
    if (typeof (Storage) !== "undefined") {
      localStorage.setItem('cart', null);
    }
  };

  const finalizeCart = function () {
    console.log('final cart');
  }

  const getOrderId = function() {
    if (typeof (Storage) !== "undefined") {
      let temp = localStorage.getItem('order_id');
      if (temp != null) {
        order_id = temp;
      }
    }
    return order_id;
  };

  const setOrderId = function(n) {
    if (n != null) {
      order_id = n;
      if (typeof (Storage) !== "undefined") {
        localStorage.setItem('order_id', order_id);
      }
    }
  };

  const removeFromCart = function(order_item_id){
    let indexToDelete = -1;
    const cart = getCart();
    console.log("before" + cart);
    for(let i = 0; i < cart.length; i++ ){
      if(cart[i].order_item_id === order_item_id){
        indexToDelete = i;
        break;
      }
    }
    cart.splice(indexToDelete, 1);
    console.log("after" + cart);
  };

  const replaceCart = function (c) {
    cart = c;

    if (typeof (Storage) !== "undefined") {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }

  return {
    replaceCart: replaceCart,
    getOrderId: getOrderId,
    setOrderId: setOrderId,
    getCart: getCart,
    setCart: setCart,
    emptyCart: emptyCart,
    finalizeCart: finalizeCart,
    getCartItems: getCartItems,
    removeFromCart: removeFromCart
  }

})();

export default AddToCart;
