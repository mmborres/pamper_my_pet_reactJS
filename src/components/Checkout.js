import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav.js';
import Footer from './Footer.js'

class Checkout extends Component {
  render() {
    return (
      <div>
      <Nav />
      <h1>Your Order</h1>
      <Footer />
      </div>
    );
  }
}

export default Checkout;
