import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

import Nav from './Nav.js';
import Footer from './Footer.js';

class Payment extends Component {

  render() {
    return (
        <div>
      <Nav />
      <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
        <div className="example">
          <h1>Payment Form</h1>
          <Elements>
            <CheckoutForm  />
          </Elements>
        </div>
      </StripeProvider>
      <Footer />
      </div>
    );
  }
}

export default Payment;