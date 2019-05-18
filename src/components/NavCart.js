import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserProfile from './UserProfile';
import axios from 'axios';

import 'font-awesome/css/font-awesome.min.css';

class NavCart extends Component {

  constructor() {
    super();
    this.state = {
      cartItems: 0
    };

    const getCartItems = () => {
      const user_id = UserProfile.getUserId();

      const prod = "https://pamper-my-pet.herokuapp.com/orders/getCartItemCount";
      axios.post(prod, { user_id: user_id } ).then((results) => {
        //console.log ("navcart of = " + user_id);
        //console.log(results.data.data);
        const oldval = this.state.cartItems;
        const newval = results.data.data;
        if (oldval != newval) {
          this.setState({cartItems: results.data.data});
        }
      });


    }; //getCartItems
    getCartItems();
    setInterval(getCartItems, 4000);

  } //constructor

  render() {
    return(
      <Link to="/checkout"><i className="fa fa-shopping-cart"> Cart ({this.state.cartItems})</i></Link>
    )
  }
}

export default NavCart;
