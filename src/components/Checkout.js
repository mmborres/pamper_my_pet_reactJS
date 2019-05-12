import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Checkout extends Component {
  render() {
    return (
      <div>
      <p>
        <Link to="/home">Home</Link>
      </p>
        <h1>Your Order</h1>
      </div>
    );
  }
}

export default Checkout;
