const AddToCart = (function() {
  let cart = [];

  const getCart = function() {
    if (typeof (Storage) !== "undefined") {
      let temp = localStorage.getItem('cart');
      if (temp !== null) {
        cart = JSON.parse(temp);
      }
    }
    return cart;
  };

  const setCart = function(product_id, name, image, price, quantity, order_id) {
    if (product_id !== null && quantity !== null && name !== null && quantity !== null && order_id !== null) {

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
        addInCart(product_id, name, image, price, quantity, order_id);
      }
    }
  };

  const addInCart = function(product_id, name, image, price, quantity, order_id) {
    if (product_id !== null && quantity !== null && name !== null && quantity !== null && order_id !== null) {

      const product = {
        id: product_id,
        name: name,
        image: image,
        price: price,
        quantity: quantity,
        order_id: order_id
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

  return {
    getCart: getCart,
    setCart: setCart,
    emptyCart: emptyCart,
    finalizeCart: finalizeCart
  }

  })();

  export default AddToCart;
