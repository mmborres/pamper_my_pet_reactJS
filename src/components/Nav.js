import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserProfile from './UserProfile';
import axios from 'axios';

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
        <span><Navbar/></span>
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
      <span><Navbar /></span>
      <span>Welcome {hello}</span>
      </nav>
      </div>
    );
  }
};

class Navbar extends Component {

  render(){
    return(


<div className="navbar">
  <a href="#home">Home</a>
  <a href="#/products">All Products</a>
  <div className="subnav">
    <button className="subnavbtn">Dog <i className="fa fa-caret-down"></i></button>
    <div className="subnav-content">
      <a href="#/products/Dog/Clothing">Clothing</a>
      <a href="#/products/Dog/Accessories">Accessories</a>
      <a href="#/products/Dog/Toys">Toys</a>
    </div>
  </div>
  <div className="subnav">
    <button className="subnavbtn">Cat <i className="fa fa-caret-down"></i></button>
    <div className="subnav-content">
      <a href="#/products/Cat/Clothing">Clothing</a>
      <a href="#products/Cat/Accessories">Accessories</a>
      <a href="#/products/Cat/Toys">Toys</a>

    </div>
  </div>
  <div className="subnav">
    <button className="subnavbtn">Fish <i className="fa fa-caret-down"></i></button>
    <div className="subnav-content">
      <a href="#/products/Fish/Accessories">Accessories</a>
      <a href="#/products/Fish/Toys">Toys</a>

    </div>
  </div>
  <a href="#">Contact</a>


</div>

    )
  }
};

export default Nav;
