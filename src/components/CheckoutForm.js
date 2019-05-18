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
    let custname = UserProfile.getName();
    let {token} = await this.props.stripe.createToken({name: custname});
    //console.log(token);
    //console.log("token id = " + token.id);

    let response = "";
    const userId = UserProfile.getUserId();
    //const orderId = 0; //AddToCart.getOrderId();
    const em = UserProfile.getEmail();


    axios.post(stripeserver + "/charge", { stripeToken: token, user_id: userId,  stripeEmail: em }).then((result) => {
      console.log(result);
      console.log(result.data);
      console.log(result.statusText);

      if (result.statusText === "OK") {

        response = "OK";
        console.log("Purchase Complete!")
        this.setState({complete: true});
        //console.log("payment order_id = " + orderId);
        AddToCart.emptyCart();

        //let orderId = AddToCart.getOrderId();
        const userId = UserProfile.getUserId();
        const prod = "https://pamper-my-pet.herokuapp.com/orders/updateStocks";
        //also sets order to 'Completed'

        axios.post(prod, { user_id: userId } ).then((results) => {
          console.log("updateStocks")
          console.log(results);
         });


//////    FOR TEACHING - LEARNING PURPOSES
        /*
      const orderItemsUrl = "https://pamper-my-pet.herokuapp.com/order_items.json";
      let stockDetails = [];

          axios.get(orderItemsUrl).then((results) => {
              console.log('rfr', results.data);
              const filteredArray = results.data.filter((item) => parseInt(item.order_id) === parseInt(orderId));
              const f = results.data;
              for (let b=0; b<f.length; b++) {
                if (f[b].order_id === orderId) {
                  filteredArray.push(f[b]);
                }
              }

              console.log('filteredArray', filteredArray);

              for (let c=0; c<filteredArray.length; c++) {
                const oi = filteredArray[c];
                console.log(oi.product_id);

                stockDetails.push(
                  {
                    id: oi.product_id,
                    stockLeft: oi.quantity,
                    newStock: 0
                  }
                );
              }

            }).then( () => {

              return axios.get("https://pamper-my-pet.herokuapp.com/products.json").then((results) => {
                const p = results.data;
                for (let y=0; y<stockDetails.length; y++) {
                  for (let z=0; z<p.length; z++) {
                    if (stockDetails[y].id === p[z].id) {
                      console.log(p[z].id);
                      console.log(p[z].stock);
                      stockDetails[y].newStock = p[z].stock - stockDetails[y].stockLeft
                    }
                  }
                }
              }).then( () => {
                  for (let r=0; r<stockDetails.length; r++) {
                  axios.put( "https://pamper-my-pet.herokuapp.com/products/" + stockDetails[r].id +".json", {stock : stockDetails[r].newStock}).then((result) => {
                    console.log(result.data);
                  });
                }
            });

          });*/

        //const url = "https://pamper-my-pet.herokuapp.com/orders/" + orderId + ".json";
        //console.log("Order ID = " + orderId + ", set to Completed.")
        //update to "Completed"
        //axios.put(url, { status: 'Completed' }).then((result) => {});

//////    FOR TEACHING - LEARNING PURPOSES - END


      } else {
        this.setState({didsplayErr: true});
      }
    });
  //});

  }

  render() {
    if (this.state.complete) {
      return <h3>Purchase Complete. Shop more! We have other amazing products to choose from.</h3>;
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
