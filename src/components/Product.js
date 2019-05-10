import React, { Component } from 'react';

class Product extends Component {
  render () {
    return(
      <div>
        <h2>Products are coming soon</h2>
        <AllProduct />
      </div>
    );
  }
};

class AllProduct extends Component {
  render () {
    return (
      <div>
        <h3>Category/Classification</h3>
        <form>
          <select>

          <label>Category</label>

            <option value="clothing">Clothing</option>
            <option value="accessories">Accessories</option>
            <option value="toys">Toys</option>
          </select>

          <select>
          <label>Pet Type:</label>
          <option></option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Fish">Fish</option>
          </select>

        </form>
      </div>
    );
  }
};

export default Product;
