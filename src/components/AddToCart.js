const AddToCart = (function() {
  let cart = [];
  //let order_id =

  const getCart = function() {
    if (typeof (Storage) !== "undefined") {
      let temp = localStorage.getItem('cart');
      if (temp !== null) {
        cart = JSON.parse(temp);
      }
    }
    return cart;
  };

  const setCart = function(product_id, name, image, price, quantity) {
    if (product_id !== null && quantity !== null) {

      const product = {
        id: product_id,
        name: name,
        image: image,
        price: price,
        quantity: quantity,
        //order_item_id: 
      };

      if (cart === null) {
        cart = [];
      }

      cart.push(product);

      if (typeof (Storage) !== "undefined") {
        localStorage.setItem('cart', JSON.stringify(cart));
      }
      console.log(cart);
    }
  };

  const emptyCart = function() {
      if (typeof (Storage) !== "undefined") {
        localStorage.setItem('cart', null);
      }
    };

  return {
    getCart: getCart,
    setCart: setCart,
    emptyCart: emptyCart
  }

  })();

  export default AddToCart;
