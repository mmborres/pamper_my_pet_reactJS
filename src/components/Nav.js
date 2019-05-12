import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div>
      <nav>
      <span><Link to="/home">Home</Link></span>
      <span><Link to="/products">All Products</Link></span>
      <span><Link to="/">Login</Link></span>
      <span><Link to="/logout">Logout</Link></span>
      <span><Link to="/checkout">Checkout</Link></span>
      </nav>
      </div>
    );
  }
}

export default Nav;
