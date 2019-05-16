import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserProfile from './UserProfile';
import axios from 'axios';
import { Dropdowns }  from "react-bootstrap";
import { Button, Container, Row, Col } from "reactstrap";

import 'font-awesome/css/font-awesome.min.css';

class NavCart extends Component {

    constructor() {
        super();
        this.state = {
          cartItems: 0
        };

        const getCartItems = () => {
            //check database first
            const ordersUrl = "https://pamper-my-pet.herokuapp.com/orders.json";
            const orderItemsUrl = "https://pamper-my-pet.herokuapp.com/order_items.json";

            let cart = []; //AddToCart.getCart();
            const user_id = UserProfile.getUserId();

            //if ( cart.length === 0 ) {
                //console.log("navcart 1");
                //check if truly empty
                axios.get(ordersUrl).then((results) => {
                    //console.log(results);
                    const index = results.data.findIndex((item) => item.user_id === user_id && item.status === "Open");
                    //console.log("here 2 ");
                    if ( index > 0 ) {
                      //console.log("here, found Open");
                        let orderId = results.data[index].id;
                        let filteredArray = [];

                        axios.get(orderItemsUrl).then((results) => {
                            filteredArray = results.data.filter((item) => item.order_id === orderId);
                          }).then( () => {
                            this.setState({cartItems: filteredArray.length});
                          } );
                    } else if (index < 1) {
                      //console.log("here, NOT found Open");
                      this.setState({cartItems: 0});
                    }
                });

        }; //getCartItems
        getCartItems();
        setInterval(getCartItems, 5000);

      } //constructor

    render() {
        return(
            <Link to="/checkout"><i className="fa fa-shopping-cart"> Cart ({this.state.cartItems})</i></Link>
        )
    }
}

export default NavCart;
