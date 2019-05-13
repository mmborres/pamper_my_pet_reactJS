import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UpdateBlocker from 'react-router';
import UserProfile from './UserProfile';
import axios from 'axios';
import AddToCart from './AddToCart';

class Nav extends Component {
  render() {
    //const cart = AddToCart.getCart();
    //console.log('Cart', cart);
    const userId = UserProfile.getUserId();
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
      <span> &#x1F6D2; </span>

      </nav>
      </div>
    );
  }
};

class Navbar extends Component {

  render(){
  /*{
    let urlstr = window.location.href;
    if (urlstr.includes('#')) {
      urlstr = urlstr.split('#')[0] + '#/'
    }*/

    return(


<div className="navbar">
  <Link to="#">Home</Link>
  <Link to="/products">All Products</Link>
  <div className="subnav">
    <button className="subnavbtn">Dog <i className="fa fa-caret-down"></i></button>
    <div className="subnav-content">
      <Link to="/products/Dog/Clothing">Clothing</Link>
      <Link to="/products/Dog/Accessories">Accessories</Link>
      <Link to="/products/Dog/Toys">Toys</Link>

    </div>
  </div>
  <div className="subnav">
    <button className="subnavbtn">Cat <i className="fa fa-caret-down"></i></button>
    <div className="subnav-content">
      <Link to="/products/Cat/Clothing">Clothing</Link>
      <Link to="/products/Cat/Accessories" >Accessories</Link>
      <Link to="/products/Cat/Toys">Toys</Link>

    </div>
  </div>
  <div className="subnav">
    <button className="subnavbtn">Fish <i className="fa fa-caret-down"></i></button>
    <div className="subnav-content">
      <Link to="/products/Fish/Accessories">Accessories</Link>
      <Link to="/products/Fish/Toys">Toys</Link>

    </div>
  </div>
</div>

    )
  }
};

export default Nav;
