import React, { Component } from 'react';
import Footer from './Footer.js'
import Nav from './Nav.js';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './../App.css';
import UserProfile from './UserProfile';

class Order extends Component {
  constructor(){
    super();
    this.state = {
      order: [],
      load: 10
    }
    //const order_id = this.props.match.params.id;

    this._incrementOrder = this._incrementOrder.bind(this);

    const fetchOrder = () => {
      const userId = UserProfile.getUserId();
      const prod = "https://pamper-my-pet.herokuapp.com/orders/getOrderHistory";

      axios.post(prod, { user_id: userId } ).then((results) => {
      //axios.get("https://pamper-my-pet.herokuapp.com/orders.json").then((results) => {
        console.log(results.data.data);
        this.setState({order: results.data.data})

      });
    }

    fetchOrder();

  }
  _incrementOrder(){
    console.log(this.state.load);
    this.setState({ load : this.state.load + 10 })
    console.log(this.state.load);
  }
  render() {
    const orderSortedByDate = this.state.order;
    orderSortedByDate.sort( function(a,b) {
      console.log(a.updated_at);
      return new Date(b.updated_at) - new Date(a.updated_at);

    });
    console.log(orderSortedByDate);
    return (
      <div className="checkout">
        <Nav />
        <h1>Order History</h1>
        <div style={{display: 'flex', flexDirection: 'column', paddingRight: '400px', paddingLeft: '400px'}}>
        <table className="checkout" >    
          <td>Order</td>
          <td>Last Accessed</td>
          <td>Status</td>
        {console.log(this.state.load)}
        {orderSortedByDate.slice(0, this.state.load).map ((o) =>
        <tbody key={o.id + 1}>
        <tr key={o.id + 2}>
        <td key={o.id + 3}>#{o.id}</td>
        <td key={o.id + 4}>{o.updated_at}</td>
        <td key={o.id + 5}>
        { 
          (o.status==="Open") 
          ? 
          <Link to={"/checkout"}>{o.status}</Link>
          :
          o.status
        }</td>
        </tr>
        </tbody>
        )}
        </table>
        </div>
        
        <Footer />
      </div>

    );
  }
}

export default Order;

//      <button onClick={this._incrementOrder}> Load More...</button>
