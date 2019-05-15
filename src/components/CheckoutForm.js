import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import AddToCart from './AddToCart';
import UserProfile from './UserProfile';
import axios from 'axios';

class CheckoutForm extends Component {
    constructor(props) {
        super(props);
        this.state = {complete: false, didsplayErr: false};
        this.submit = this.submit.bind(this);
      }

  async submit(ev) {
    const stripeserver = "https://pamper-my-pet.herokuapp.com/orders/";
    //const stripeserver = "http://localhost:3000/orders";
    let {token} = await this.props.stripe.createToken({name: "Name"});
    console.log(token);
    //console.log("token id = " + token.id);

    let response = "";
    const userId = UserProfile.getUserId();
    const orderId = AddToCart.getOrderId();
    const em = UserProfile.getEmail();

  /*let resp = await fetch( "/charge", {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: tok.id
    });*/

    axios.post(stripeserver + "/charge", { token: token, user_id: userId, order_id: orderId, email: em }).then((result) => {
      console.log(result);
      console.log(result.data);
      console.log(result.statusText);

      if (result.statusText === "OK") {
          response = "OK";
          console.log("Purchase Complete!")
          this.setState({complete: true});
          console.log("payment order_id = " + orderId);
          AddToCart.emptyCart();
  
          const url = "https://pamper-my-pet.herokuapp.com/orders/" + orderId + ".json";
          console.log("Order ID = " + orderId + ", set to Completed.")
          //update to "Completed"
          axios.put(url, { status: 'Completed' }).then((result) => {});
      } else {
        this.setState({didsplayErr: true});
      }
    });

  
    /*console.log(resp);

    if (resp.ok) {
      //response = "OK";
    }*/

    /*if (response==="OK") {
        console.log("Purchase Complete!")
        this.setState({complete: true});
        console.log("payment order_id = " + orderId);
        AddToCart.emptyCart();

        const url = "https://pamper-my-pet.herokuapp.com/orders/" + orderId + ".json";
        console.log("Order ID = " + orderId + ", set to Completed.")
        //update to "Completed"
        axios.put(url, { status: 'Completed' }).then((result) => {});
    } else {
      this.setState({didsplayErr: true});
    } */
  }

  render() {
    if (this.state.complete) {
      return <h3>Purchase Complete. Shop More, we have other amazing products.</h3>;
    } else if ( this.state.didsplayErr === true ) {
      return <h3>Purchase Cannot Be Completed At This Time. Try Again After A Few Seconds.</h3>;
    }

    return (
      <div className="checkout">
        <p>Enter Card Details</p>
        <div style={{borderRadius: '0.5em', height: '100px', padding: '50px', border: '3px solid orange', marginTop: '10px', marginBottom: '30px', marginRight: '350px', marginLeft: '350px', backgroundColor: 'aliceblue' }} ><CardElement /></div>
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);


/*
style={{borderRadius: '0.5em', height: '100px', padding: '50px', border: '3px solid orange', marginTop: '10px', marginBottom: '30px', marginRight: '350px', marginLeft: '350px', backgroundColor: 'aliceblue' }} 

border-radius: 0.5em; height: 100px; padding: 50px; border: 3px solid orange; margin-top: 10px; margin-bottom: 30px; margin-right: 350px; margin-left: 350px; background-color: aliceblue;
*/
