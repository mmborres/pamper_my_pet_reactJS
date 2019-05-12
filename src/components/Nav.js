import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserProfile from './UserProfile';

class Nav extends Component {
  render() {
    if (UserProfile.getEmail() === "") {
      return (
        <div>
        <nav>
        <span><Link to="/home">Home</Link></span>
        <span><Link to="/products">All Products</Link></span>
        <span><Link to="/">Login</Link></span>
        <span><Link to="/signup">SignUp</Link></span>
        <span><Link to="/checkout">Checkout</Link></span>
        </nav>
        </div>
      );
    }
    const hello = UserProfile.getName();
    return (
      <div>
      <nav>
      <span><Link to="/home">Home</Link></span>
      <span><Link to="/products">All Products</Link></span>
      <span><Link to="/logout">Logout</Link></span>
      <span><Link to="/checkout">Checkout</Link></span>
      <span>Welcome {hello}</span>
      </nav>
      </div>
    );
  }
}

export default Nav;
