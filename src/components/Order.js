import React, { Component } from 'react';
import Footer from './Footer.js'
import Nav from './Nav.js';
import { Link } from 'react-router-dom';
import axios from 'axios';


// Create Orders page, display only recent 10 Orders, sorted by date
// id | date last updated | status
//
// if status = "Open" add link to Checkout


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
      axios.get("https://pamper-my-pet.herokuapp.com/orders.json").then((results) => {
        console.log(results.data);
        this.setState({order: results.data})

      })


    }
    fetchOrder();

}
_incrementOrder(){
console.log(this.state.load);
    this.setState({ load : this.state.load + 10 })
console.log(this.state.load);
}
  render() {
    return (
      <div>

        <Nav />

        <div>

        {console.log(this.state.load)};
        {this.state.order.slice(0, this.state.load).map ((o) =>
          <div>
          <p>User_Id: {o.user_id}</p>
          <p>Status: {o.status}</p>
          {
            o.status ==='Open' ? <p><Link to={"/checkout" } >Go Here</Link></p>
            : ''

          }
          <p>Created_At: {o.created_at}</p>
          <p>Updated_At: {o.updated_at}</p>
          </div>
        )}
        </div>
          <button onClick={this._incrementOrder}> Load More...</button>
        <Footer />
      </div>

    );
  }
}


export default Order;
