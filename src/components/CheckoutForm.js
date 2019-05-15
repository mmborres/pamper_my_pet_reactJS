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
        //update to "Completed"
        axios.put(url, { status: 'Completed' }).then((result) => {});
    }
  }

  render() {
    if (this.state.complete) return <h2>Purchase Complete</h2>;

    return (
      <div className="checkout">
        <p>Enter Card Details</p>
        <CardElement />
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
