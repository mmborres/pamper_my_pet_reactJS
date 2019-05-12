import React, { Component } from 'react';
import Footer from './Footer.js'
import Nav from './Nav.js';

class Order extends Component {
  render() {
    return (
      <div>
        <Nav />
        <h2>Orders</h2>
        <Footer />
      </div>
    );
  }
}

export default Order;
