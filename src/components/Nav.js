import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserProfile from './UserProfile';
import NavCart from './NavCart';
import './../App.css';
import { Dropdowns }  from "react-bootstrap";
import { Button, Container, Row, Col } from "reactstrap";

class Nav extends Component {
  render() {

    if (UserProfile.getEmail() === "") {
      // not logged in
      return (

        <nav>
        <ul class="top-level-menu">
        <li style={{float: 'left'}}><Link to="/home">Home</Link></li>
        <li style={{float: 'left'}}><Link to="/products">All Products</Link></li>
        <li style={{width: '250px', textAlign: 'center',float: 'left'}} >
        <span class="non-link-menu">Shop By Category</span>
        <ul class="second-level-menu">
        <li>
        <span class="non-link-menu">Dog</span>
        <ul class="third-level-menu">
        <li><Link to="/products/Dog/Clothing">Clothing</Link></li>
        <li><Link to="/products/Dog/Accessories">Accessories</Link></li>
        <li><Link to="/products/Dog/Toys">Toys</Link></li>
        </ul>
        </li>
        <li>
        <span class="non-link-menu">Cat</span>
        <ul class="third-level-menu">
        <li><Link to="/products/Cat/Clothing">Clothing</Link></li>
        <li><Link to="/products/Cat/Accessories">Accessories</Link></li>
        <li><Link to="/products/Cat/Toys">Toys</Link></li>
        </ul>
        </li>
        <li>
        <span class="non-link-menu">Bird</span>
        <ul class="third-level-menu">
        <li><Link to="/products/Bird/Accessories">Accessories</Link></li>
        <li><Link to="/products/Bird/Miscellaneous">Miscellaneous</Link></li>
        </ul>
        </li>
        <li>
        <span class="non-link-menu">Others</span>
        <ul class="third-level-menu">
        <li><Link to="/products/Others/Accessories">Accessories</Link></li>
        <li><Link to="/products/Others/Miscellaneous">Miscellaneous</Link></li>
        </ul>
        </li>
        </ul>
        </li>
        <li style={{float: 'right'}}><Link to="/login">Login</Link></li>
        <li style={{float: 'right'}}><Link to="/signup">Sign Up</Link></li>
        </ul>
        </nav>

      );
    }
    const hello = UserProfile.getName();
    // logged in
    return (
      <div>

      <nav >
      <ul class="top-level-menu">
      <li style={{float: 'left'}}><Link to="/home">Home</Link></li>
      <li style={{float: 'left'}}><Link to="/products">All Products</Link></li>
      <li style={{width: '250px', textAlign: 'center',float: 'left'}}>
      <span class="non-link-menu">Shop By Category</span>
      <ul class="second-level-menu">
      <li>
      <span class="non-link-menu">Dog</span>
      <ul class="third-level-menu">
      <li><Link to="/products/Dog/Clothing">Clothing</Link></li>
      <li><Link to="/products/Dog/Accessories">Accessories</Link></li>
      <li><Link to="/products/Dog/Toys">Toys</Link></li>
      </ul>
      </li>
      <li>
      <span class="non-link-menu">Cat</span>
      <ul class="third-level-menu">
      <li><Link to="/products/Cat/Clothing">Clothing</Link></li>
      <li><Link to="/products/Cat/Accessories">Accessories</Link></li>
      <li><Link to="/products/Cat/Toys">Toys</Link></li>
      </ul>
      </li>
      <li>
      <span class="non-link-menu">Bird</span>
      <ul class="third-level-menu">
      <li><Link to="/products/Bird/Accessories">Accessories</Link></li>
      <li><Link to="/products/Bird/Miscellaneous">Miscellaneous</Link></li>
      </ul>
      </li>
      <li>
      <span class="non-link-menu">Others</span>
      <ul class="third-level-menu">
      <li><Link to="/products/Others/Accessories">Accessories</Link></li>
      <li><Link to="/products/Others/Miscellaneous">Miscellaneous</Link></li>
      </ul>
      </li>
      </ul>
      </li>
      <li style={{float: 'right'}}><NavCart /></li>
      <li style={{float: 'right'}} ><Link to="/logout">Logout</Link></li>
      <li style={{color: 'hotpink', float: 'right', paddingTop: '4px'}}>Welcome {hello}</li>
      </ul>
      </nav>

      </div>
    );
  }
};

export default Nav;
