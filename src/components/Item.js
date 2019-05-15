import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav.js';
import Footer from './Footer.js';
import UserProfile from './UserProfile';
import AddToCart from './AddToCart';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: []
    }

    const product_id = this.props.match.params.id;
    const URL = "https://pamper-my-pet.herokuapp.com/products/" + product_id + ".json"
    const fetchProduct = () => {
      axios.get(URL).then((results) => {
        //console.log(results.data);
        this.setState({item: results.data});
      })
    };
    fetchProduct();
  }

  render () {
    const isAdmin = UserProfile.getAdmin();
    return (
      <div>
      <Nav />
      <DetailsWithRouter item={this.state.item} />
      {
        isAdmin
        ?  <p><Link to={"/editproduct/" + this.state.item.id } >Edit Product</Link></p>
        : ''
      }
      <Footer />
      </div>
    );
  }
};

class Details extends Component {
  constructor() {
    super();
    this.state = {
      quantity : 1,
      order_id: -1,
      order_item_id: -1
    }
    this._handleChange = this._handleChange.bind(this);
    this._handleCart = this._handleCart.bind(this);
  }

  // createOrder() {
  //   const URL = "https://pamper-my-pet.herokuapp.com/orders.json";
  //   const userId = UserProfile.getUserId();
  //
  //   return axios.post(URL, {user_id: userId, status: 'Open'}).then((result) => {
  //     this.setState({order_id: result.data.id});
  //     AddToCart.setOrderId(this.state.order_id);
  //   });
  // };

  async fetchOrder() {
    const URL = "https://pamper-my-pet.herokuapp.com/orders.json";
    const userId = UserProfile.getUserId();

    return axios.get(URL).then((results) => {
      if (results.data.length === 0) {
        return axios.post(URL, {user_id: userId, status: 'Open'}).then((result) => {
          this.setState({order_id: result.data.id});
          AddToCart.setOrderId(this.state.order_id);
        });
      } else {
        const index = results.data.findIndex((item) => item.user_id === userId && item.status === 'Open');

        if (index >= 0)
        {
          this.setState({order_id: results.data[index].id});
          AddToCart.setOrderId(this.state.order_id);
        } else {
          return axios.post(URL, {user_id: userId, status: 'Open'}).then((result) => {
            this.setState({order_id: result.data.id});
            AddToCart.setOrderId(this.state.order_id);
          });
        }
      }
    });
  };

  // createOrderItem(order_id, product_id, quantity) {
  //   const url = "https://pamper-my-pet.herokuapp.com/order_items.json";
  //   return axios.post(url, {order_id: order_id, product_id: product_id, quantity: quantity}).then((result) => {
  //     console.log(result.data);
  //     this.setState({order_item_id: result.data.id});
  //     console.log('order_item_id', this.state.order_item_id);
  //   });
  // }

  // updateOrderItem(item, q) {
  //   const url = "https://pamper-my-pet.herokuapp.com/order_items.json";
  //   return axios.put(url, {item.quantity: q}).then((result) => {
  //     console.log(result.data);
  //     this.setState({order_item_id: result.data.id});
  //     console.log(this.state.order_item_id);
  //   });
  // }

  async  checkOrderItem (order_id, product_id, quantity) {
    const url = "https://pamper-my-pet.herokuapp.com/order_items.json";

    return axios.get(url).then((results) => {
      //console.log('flethdhf', results.data.length);
      console.log('order_item_id', this.state.order_item_id);
      if (results.data.length === 0) {
        //this.createOrderItem(order_id, product_id, quantity);
        //const url = "https://pamper-my-pet.herokuapp.com/order_items.json";
        return axios.post(url, {order_id: order_id, product_id: product_id, quantity: quantity}).then((result) => {
          console.log(result.data);
          this.setState({order_item_id: result.data.id});
          console.log('order_item_id', this.state.order_item_id);

        });
      } else {
        const index = results.data.findIndex((item) => item.order_id === order_id && item.product_id === product_id);
        console.log('index', index);
        console.log('order_item_id', this.state.order_item_id);

        if (index >= 0) {
          this.setState({order_item_id: results.data[index].id});
          const ind = results.data[index].quantity;
          console.log(results.data[index])
          console.log('order_item_id', this.state.order_item_id);
          let tempq = results.data[index].quantity;
          tempq += quantity;
          console.log('initial quantity', quantity)
          console.log('updated quantity', tempq)

          const lnk = "https://pamper-my-pet.herokuapp.com/order_items/" + results.data[index].id + ".json"
          //console.log(lnk);
          return axios.put(lnk, {quantity: tempq}).then((result) => {
            console.log(result.data);
            this.setState({order_item_id: result.data.id});
            console.log('order_item_id', this.state.order_item_id);
          });

        } else {
          //this.createOrderItem(order_id, product_id, quantity);
          //const url = "https://pamper-my-pet.herokuapp.com/order_items.json";
          return axios.post(url, {order_id: order_id, product_id: product_id, quantity: quantity}).then((result) => {
            console.log(result.data);
            this.setState({order_item_id: result.data.id});
            console.log('order_item_id', this.state.order_item_id);
          });
        }
      }
    });
  };


  _handleChange(event){
    event.preventDefault();
    this.setState({quantity: event.target.value})
  }
  
  _handleCart(event){
    event.preventDefault();

    // Check if order exists for the current user with the status Open
    // If order exists then use that order
    // IF order does not exist then create an order and use that order id

    // Check if order item id exists in the table of that order id and product id
    // If exists then increment the Quantity
    // If does not exist, insert new record of order id, product id and Quantity
    const id = event.target.id;
    this.fetchOrder().then( () => {
      // Add in order item id table
      this.checkOrderItem(this.state.order_id, this.props.item.id, parseInt(this.state.quantity)).then( () => {
        AddToCart.setCart(this.props.item.id, this.props.item.name, this.props.item.image, this.props.item.price, parseInt(this.state.quantity), this.state.order_item_id);

        if (id === "2") {
          const urlback = "/checkout/" ;
          this.props.history.push(urlback);
        }

      });
    });

  }

  createQuantitySelect() {
    const stockLimit = this.props.item.stock;
    if (stockLimit === 0) return; //TODO Disable this

    let items = [];
    for (let i = 1; i <= stockLimit; i++) {
      items.push(<option key={i} value={i}>{i}</option>);
    }
    return items;
  }

  render(){

    const isOutOfStock = this.props.item.stock === 0;
    const userPresent = UserProfile.getEmail() === "";

    return(
      <div>
      <div>
      <img src={this.props.item.image}/>
      <p><strong>Name:</strong>{this.props.item.name}</p>
      <p><strong>Price: </strong> AUD {this.props.item.price}</p>
      <p><strong>Description: </strong>{this.props.item.description}</p>
      <p><strong>Size: </strong>{this.props.item.size}</p>
      <p><strong>Color: </strong>{this.props.item.color}</p>
      <p><strong>Stock: </strong>{isOutOfStock ? 'Out of Stock' : 'Available'}</p>
      <p><strong>Select quantity: </strong>
      <select onChange={this._handleChange}>
      {this.createQuantitySelect()}
      </select>
      </p>
      </div>
      {userPresent ?
        <p>
        <button><Link to="/">Add to Cart</Link></button>
        <button><Link to="/">Buy Now</Link>></button>
        </p>
        :
        <p>
        <button onClick={this._handleCart} id="1" disabled={isOutOfStock}>Add to Cart</button>
        <button onClick={this._handleCart} id="2" disabled={isOutOfStock}>Buy Now</button>
        </p>
      }
      </div>
    );
  }
};
const DetailsWithRouter = withRouter(Details);
export default Item;
