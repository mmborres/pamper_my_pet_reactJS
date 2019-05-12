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

  const setCart = function(product_id, quantity) {
    if (product_id !== null && quantity !== null) {
      const product = {
        id: product_id,
        quantity: quantity
      };
      
      cart.push(product);

      if (typeof (Storage) !== "undefined") {
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    }
  };

  return {
    getCart: getCart,
    setCart: setCart,
  }

  })();

  export default AddToCart;
