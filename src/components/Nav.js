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
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/products">All Products</Link></li>
              <li style={{width: '250px', textAlign: 'center'}} >
                  <a href="#">Shop By Category</a>
                  <ul class="second-level-menu">
                      <li>
                          <a href="#">Dog</a>
                          <ul class="third-level-menu">
                              <li><Link to="/products/Dog/Clothing">Clothing</Link></li>
                              <li><Link to="/products/Dog/Accessories">Accessories</Link></li>
                              <li><Link to="/products/Dog/Toys">Toys</Link></li>
                          </ul>
                      </li>
                      <li>
                          <a href="#">Cat</a>
                          <ul class="third-level-menu">
                              <li><Link to="/products/Cat/Clothing">Clothing</Link></li>
                              <li><Link to="/products/Cat/Accessories">Accessories</Link></li>
                              <li><Link to="/products/Cat/Toys">Toys</Link></li>
                          </ul>
                      </li>
                      <li>
                          <a href="#">Bird</a>
                          <ul class="third-level-menu">
                              <li><Link to="/products/Bird/Accessories">Accessories</Link></li>
                              <li><Link to="/products/Bird/Miscellaneous">Miscellaneous</Link></li>
                          </ul>
                      </li>
                      <li>
                          <a href="#">Others</a>
                          <ul class="third-level-menu">
                              <li><Link to="/products/Others/Accessories">Accessories</Link></li>
                              <li><Link to="/products/Others/Miscellaneous">Miscellaneous</Link></li>
                          </ul>
                      </li>
                  </ul>
              </li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
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
    <li><Link to="/home">Home</Link></li>
    <li><Link to="/products">All Products</Link></li>
    <li>
        <a href="#">Shop By Category</a>
        <ul class="second-level-menu">
            <li>
                <a href="#">Dog</a>
                <ul class="third-level-menu">
                    <li><Link to="/products/Dog/Clothing">Clothing</Link></li>
                    <li><Link to="/products/Dog/Accessories">Accessories</Link></li>
                    <li><Link to="/products/Dog/Toys">Toys</Link></li>
                </ul>
            </li>
            <li>
                <a href="#">Cat</a>
                <ul class="third-level-menu">
                    <li><Link to="/products/Cat/Clothing">Clothing</Link></li>
                    <li><Link to="/products/Cat/Accessories">Accessories</Link></li>
                    <li><Link to="/products/Cat/Toys">Toys</Link></li>
                </ul>
            </li>
            <li>
                <a href="#">Bird</a>
                <ul class="third-level-menu">
                    <li><Link to="/products/Bird/Accessories">Accessories</Link></li>
                    <li><Link to="/products/Bird/Miscellaneous">Miscellaneous</Link></li>
                </ul>
            </li>
            <li>
                <a href="#">Others</a>
                <ul class="third-level-menu">
                    <li><Link to="/products/Others/Accessories">Accessories</Link></li>
                    <li><Link to="/products/Others/Miscellaneous">Miscellaneous</Link></li>
                </ul>
            </li>
        </ul>
    </li>
    <li><NavCart /></li>
    <li><Link to="/logout">Logout</Link></li>
    <li><span>Welcome {hello} </span></li>
    </ul>
    </nav>

      </div>
    );
  }
};

class Navbar extends Component {

  render(){

    return(


<div className="navbar">
  <Link to="#">Home</Link>
  <Link to="/products">All Products</Link>

  <div className="subnav">
    <button className="subnavbtn">Dog <i className="fa fa-caret-down"></i></button>
    <div className="subnav-content">
      <Link to="/products/Dog/Clothing">Clothing</Link>
      <Link to="/products/Cat/Accessories">Accessories</Link>
      <Link to="/products/Bird/Toys">Toys</Link>


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
      <Link to="/products/Fish/Accessories">Food</Link>
      <Link to="/products/Fish/Toys">Miscellaneous</Link>

    </div>
  </div>

  <div className="subnav">
    <button className="subnavbtn">Birds <i className="fa fa-caret-down"></i></button>
    <div className="subnav-content">
      <Link to="/products/Fish/Accessories">Food</Link>
      <Link to="/products/Fish/Toys">Miscellaneous</Link>

    </div>
  </div>
  <NavCart />
</div>

    )
  }
};

export default Nav;


/**
 * float: left;
    padding: 5px;
    background: maroon;
    border-left: 1px dotted #fff;
 */


 /**
  *     display: block;
    padding: 2px 20px;
    color: #fff;
    font-family: arial;
  */


  /**
   *         <nav id="main_nav">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">All Products</a>
          </li>
          <li>
            <a href="">Shop By Category</a>
            <ul>
              <li>
                <a href="">Dog</a>
                <ul>
                  <li><a href="">Clothing</a></li>
                  <li><a href="">Accessories</a></li>
                  <li><a href="">Toys</a></li>
                </ul>
              </li>
              <li>
                <a href="">Cat</a>
                <ul>
                <li><a href="">Clothing</a></li>
                  <li><a href="">Accessories</a></li>
                  <li><a href="">Toys</a></li>
                </ul>
              </li>
              <li>
                <a href="">Bird</a>
                <ul>
                  <li><a href="">Accessories</a></li>
                  <li><a href="">Miscellaneous</a></li>
                </ul>
              </li>
              <li>
                <a href="">Others</a>
                <ul>
                  <li><a href="">Accessories</a></li>
                  <li><a href="">Miscellaneous</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="">Login</a>
          </li>
          <li>
            <a href="">Sign Up</a>
          </li>
        </ul>
      </nav>

   */
