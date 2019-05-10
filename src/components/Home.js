import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Pamper My Pet</h1>
        <p>
          <Link to="/products">Products</Link>
        </p>
        <p>
          <Link to="/item">Item</Link>
        </p>
        <p>
          <Link to="/login">Login</Link>
        </p>
        <p>
          <Link to="/logout">Logout</Link>
        </p>
        <p>
          <Link to="/checkout">Checkout</Link>
        </p>
      </div>
    );
  }
}

export default Home;
