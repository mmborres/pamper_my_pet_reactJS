import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import AddToCart from './AddToCart';
import axios from 'axios';

class CheckoutForm extends Component {
    constructor(props) {
        super(props);
        this.state = {complete: false};
        this.submit = this.submit.bind(this);
      }

  async submit(ev) {
    let {token} = await this.props.stripe.createToken({name: "Name"});
    let response = await fetch("/charge", {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: token.id
    });
  
    if (response.ok) {
        console.log("Purchase Complete!")
        this.setState({complete: true});
        const order_id = AddToCart.getOrderId();
        console.log("payment order_id = " + order_id);
        AddToCart.emptyCart();

        const url = "https://pamper-my-pet.herokuapp.com/orders/" + order_id + ".json";
        console.log("Order ID = " + order_id + ", set to Completed.")
        //update to "Completed"
        axios.put(url, { status: 'Completed' }).then((result) => {});
    } 
  }

  render() {
    if (this.state.complete) {
      return <h2>Purchase Complete</h2>;
    } else if ( this.state.complete!== true ) {
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
