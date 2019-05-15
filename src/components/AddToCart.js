import UserProfile from './UserProfile';
import axios from 'axios';

const AddToCart = (function() {
  let cart = [];
  let order_id = 0;
  const userId = UserProfile.getUserId();
  const ordersUrl = "https://pamper-my-pet.herokuapp.com/orders.json";
  const orderItemsUrl = "https://pamper-my-pet.herokuapp.com/order_items.json";

  const getCart = function() {
    if (typeof (Storage) !== "undefined") {
      let temp = localStorage.getItem('cart');
      if (temp !== null) {
        cart = JSON.parse(temp);

        // if (emptyCart()) {
        //   return axios.get(URL).then((results) => {
        //       const index = results.data.findIndex((item) => item.user_id === userId && item.status === 'Open');
        //
        //       if (index >= 0)
        //       {
        //         this.setState({order_id: results.data[index].id});
        //         AddToCart.setOrderId(this.state.order_id);
        //       } else {
        //         this.createOrder();
        //       }
        //     }
        //   });
        // }
      } else {
        cart = [];
      }
    }
    console.log("getCart ==" + cart)
    return cart;
  };

  const getCartItems = function () {
    const cart = getCart();
    return cart.length;
  }

  const setCart = function(product_id, name, image, price, quantity, order_item_id) {
    console.log('order_item_id', order_item_id);

    if (product_id !== null && quantity !== null && name !== null && quantity !== null && order_item_id !== null) {

      // Update product quantity in cart if product already exists
      if (cart !== null && cart.some((item) => product_id === item.id)) {
        const productIndex = cart.findIndex((item) => product_id === item.id);
        cart[productIndex].quantity += quantity;
        console.log('Updated cart', cart);


        if (typeof (Storage) !== "undefined") {
          localStorage.setItem('cart', JSON.stringify(cart));
        }
      } else {
        // IF product does not exist in cart then add in Cart
        addInCart(product_id, name, image, price, quantity, order_item_id);
      }
    }
  };

  const addInCart = function(product_id, name, image, price, quantity, order_item_id) {
    if (product_id !== null && quantity !== null && name !== null && quantity !== null && order_item_id !== null) {

      const product = {
        id: product_id,
        name: name,
        image: image,
        price: price,
        quantity: quantity,
        order_item_id: order_item_id
      };

      if (cart === null) {
        cart = [];
      }

      cart.push(product);

      if (typeof (Storage) !== "undefined") {
        localStorage.setItem('cart', JSON.stringify(cart));
      }
      console.log('initial cart', cart);
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

  return {
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
