import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav.js';
import Footer from './Footer.js';
import UserProfile from './UserProfile';
import AddToCart from './AddToCart';
import Payment from './Payment';
import axios from 'axios';
import { Table }  from "react-bootstrap";



import { Dropdowns }  from "react-bootstrap";
import { Button, Container, Row, Col } from "reactstrap";

import 'font-awesome/css/font-awesome.min.css';

import './../App.css';

class Checkout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shoppingList: [],
      total: 0
    }
    this.displayAfterRemove = this.displayAfterRemove.bind(this);
    this.renderCartItems = this.renderCartItems.bind(this);
  }

  displayAfterRemove(cart) {
    //this.setState()
    console.log("should redisplay");
    this.renderCartItems();
  }

  renderCartItems() {
    const userId = UserProfile.getUserId();
    let cart = AddToCart.getCart();
    const ordersUrl = "https://pamper-my-pet.herokuapp.com/orders.json";
    const orderItemsUrl = "https://pamper-my-pet.herokuapp.com/order_items.json";

    //console.log('Cart', cart);
    if (cart===null || cart===undefined) {
      cart = [];
    }
    ////
    if (cart.length===0) { //empty
      console.log("renderCartItems 0");
      axios.get(ordersUrl).then((results) => {
        console.log("renderCartItems 1");
        const index = results.data.findIndex((item) => item.user_id === userId && item.status === 'Open');
        if (index >= 0) {
          console.log("renderCartItems 2");
          const orderId = results.data[index].id;
          console.log('aasdfasdas=', orderId)
          AddToCart.setOrderId(orderId);

          axios.get(orderItemsUrl).then((results) => {
            console.log('rfr', results.data);
            const filteredArray = results.data.filter((item) => item.order_id === orderId);
            console.log('filteredArray', filteredArray);

            for (let y=0; y<filteredArray.length; y++) {
              const oi = filteredArray[y];
              console.log(oi.product_id);

              cart.push(
                {
                  id: oi.product_id,
                  name: "BLAH",
                  image: "https://www.fillmurray.com/200/300",
                  price: 5,
                  quantity: oi.quantity,
                  order_item_id: oi.id
                }
              );
            }
            console.log("renderCartItems 3");
            console.log("rcart" + cart);

          }).then( () => {

            return axios.get("https://pamper-my-pet.herokuapp.com/products.json").then((results) => {
              const p = results.data;
              for (let y=0; y<cart.length; y++) {
                for (let z=0; z<p.length; z++) {
                  if (cart[y].id === p[z].id) {
                    cart[y].image = p[z].image;
                    cart[y].price = p[z].price;
                    cart[y].name = p[z].name;
                  }
                }
              }
            });

          }).then( () => {
            AddToCart.replaceCart(cart);
            console.log("rcioio art = " + AddToCart.getCart());
            console.log("renderCartItems 32");
            this.setState({shoppingList: cart});

            let values = [];

            cart.map( (t) =>
            values.push(t.price * t.quantity)
          )
          if ( values.length > 0 ) {
            console.log(values);
            const add = (a, b) => a + b;
            const final = values.reduce(add);

            console.log("grandtotal = " + final);
            this.setState({total: final});
          }
        });
      }
    });
  } else {
    //if cart is not empty
    this.setState({shoppingList: cart});

    let values = [];

    cart.map( (t) =>
    values.push(t.price * t.quantity)
  )

  console.log(values);
  const add = (a, b) => a + b;
  const final = values.reduce(add);

  console.log("grandtotal = " + final);
  this.setState({total: final});
}

}

componentDidMount() {
  console.log("show");
  this.renderCartItems();
}

render() {

  return (
    <div>
    <Nav />
    <div className="checkout">
    <h1>Your Order Details</h1>
    <DisplayCart cart={this.state.shoppingList} total={this.state.total} onSubmit={this.displayAfterRemove}/>
    </div>
    <Footer />
    </div>
  );
}
}

class DisplayCart extends Component {
  constructor() {
    super();

    this._removeHandler = this._removeHandler.bind(this);
  }

  _removeHandler(e) {
    const oid = e.target.id;
    const url = "https://pamper-my-pet.herokuapp.com/order_items/" + oid + ".json";
    console.log("oid to delete=" + oid)

    //AddToCart.removeFromCart(oid);
    let indexToDelete = -1;
    let cart = []; //AddToCart.getCart();
    const promise = new Promise( (resolve, reject) => {
      cart = AddToCart.getCart();

      if (cart===null || cart===undefined) {
        console.log("0");
        cart = this.props.cart;
      }
      if (cart===null || cart===undefined) {
        console.log("1");
        cart = [];
      }
      if (cart.length>0) {
        console.log(cart.length);
        for(let i = 0; i < cart.length; i++ ){
          console.log(cart[i].order_item_id);
          if( parseInt(cart[i].order_item_id) === parseInt(oid) ) {
            console.log("index to delete == " + i);
            indexToDelete = i;
            break;
          }
        }
        console.log("index to delete == " + indexToDelete);
      }

      console.log("2");

      if(indexToDelete> -1) {
        console.log("4");
        cart.splice(indexToDelete, 1);
        AddToCart.replaceCart(cart);

        axios.delete(url).then((res) => {
          //post
          this.props.onSubmit(cart);
        });
      }

    } );

    promise
    .then( res => {
      console.log("3");

    })
    .catch( err => {
      console.log ("error with promise = " + err)

    })

  }

  //# {c.order_item_id}
  render () {
    console.log ("DisplayCart = " + this.props.cart);
    const cart = this.props.cart;
    if (cart.length===0) {
      return (
        <div id="no-item">
        No items in your cart.
        </div>
      )
    } else {
      return (
        <div className="checkout">

        <table >
        <th>Product</th>
        <th>ID</th>
        <th>Name</th>
        <th>Unit Price</th>
        <th>Quantity</th>
        <th>Total Price</th>
        <th>&nbsp;</th>
        <th>&nbsp;</th>
        {
          cart.map( (c) =>
          <tbody key={c.id + 1}>
          <tr key={c.id + 2}>
          <td key={c.id + 3}><img src={c.image} className="thumb"/></td>
          <td key={c.id + 4}>#{c.id}</td>
          <td key={c.id + 4}>{c.name}</td>
          <td key={c.id + 5}>AUD {c.price}</td>
          <td key={c.id + 6}>{ c.quantity}</td>
          <td key={c.id + 7}>AUD {c.price * c.quantity}</td>
          <td key={c.id + 8}><Link to={"/product/" + c.id} ><span><button className="favicon fa fa-edit fa-2x" ></button></span></Link></td>
          <td key={c.id + 6}><button className="favicon fa fa-trash fa-2x" onClick={this._removeHandler} id={c.order_item_id}></button></td>
          </tr>
          </tbody>

        )}
        </table>
        <tr><td colSpan={7} id="total"><strong>Grand Total AUD { this.props.total }</strong></td></tr>

        <Link to={"/payment"} ><span><button id="pay" className="btn btn-warning" >Pay Now</button></span></Link>
        </div>
      )
    }
  }
}


export default Checkout;
