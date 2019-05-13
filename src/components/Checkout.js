import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav.js';
import Footer from './Footer.js';
import UserProfile from './UserProfile';
import AddToCart from './AddToCart';

class Checkout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shoppingList: []
    }
  }

  renderEmptyCart() {
    return (
      <div>
        No items in your cart.
      </div>
    );
  }

  renderItems(cart) {
    return (
      <div>
      {
        cart.map( (c) =>
        <div>
          <img src={c.image}/>
          <p><strong>Name:</strong>{c.name}</p>
          <p><strong>Price:</strong> AUD {c.price}</p>
          <p><strong>Quantity:</strong>{c.quantity}</p>
          <p><strong>Total Price: </strong>{c.price * c.quantity}</p>
        </div>
      )}
      </div>
    );
  }

  grandTotal() {
    const total = AddToCart.getCart();
    if (total !== null) {
      let values = [];

      total.map( (t) =>
        values.push(t.price * t.quantity)
      )
      console.log(values)
      const add = (a, b) =>
      a + b
      const final = values.reduce(add)
      return (
        <p><strong>Grand Total: </strong>
        {
          final
        }
        </p>
      );
    }
  }

  renderCartItems() {
    const cart = AddToCart.getCart();
    console.log('Cart', cart);

    return cart !== null ? this.renderItems(cart) : this.renderEmptyCart();
  }

  render() {
    return (
      <div>
      <Nav />
      <h1>Your Order Details</h1>
      {this.renderCartItems()}
      {this.grandTotal()}
      <PaymentForm />
      <Footer />
      </div>
    );
  }
}

class PaymentForm extends Component {
  render() {
    return (
      <div>
      <h2>Fill out the Payment details</h2>
      <form>
      <label>Card Number:</label>
      <input type="number"/>
      <label>Expiry date:</label>
      <input type="date"/>
      <button type="submit">Pay Now!</button>
      </form>
      </div>
    )
  }
}

export default Checkout;
