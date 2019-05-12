import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav.js';
import Footer from './Footer.js'

class Item extends Component {
  constructor(props){
    super(props);
    this.state = {
      item: []
    }

    //this.fetchImages = this.fetchImages.bind(this);
    //localhost:3001/#/product/{id}
    //<Route exact path="/product/:id" component={Item} />
    // To get to this page, the product id should be passed same way in Rails params.
    // Refer to Flights.js -> flight link going to -> Reservation.js
// 10. UserProfile - Rash Purvi - Please work on this in Product.JS and Item.JS, this is added in pages that need admin filtering. Admin can add Product and edit Product.
const product_id = this.props.match.params.id;
  const URL = "https://pamper-my-pet.herokuapp.com/products/" + product_id + ".json"
    const fetchImages = () => {
      axios.get(URL).then((results) => {
        //console.log(results.data);
        this.setState({item: results.data});
      })
    };
    fetchImages();
  }



  render () {
    return (
      <div>
        <Nav />
        <Details item={this.state.item} />
        <Footer />
      </div>
    );
  }
};

class Details extends Component {

  constructor(){
    super();
    this.state = {
      click : ''
    }
    this._handleClick = this._handleClick.bind(this);
  }
  _handleClick(event){
    event.preventDefault();
    this.setState({ click : this.state.click});
    console.log('hi');
  }

   render(){


     return(
       <div>
        <div>
          <img src={this.props.item.image}/>
          <p><strong>Name:</strong>{this.props.item.name}</p>
          <p><strong>Price: </strong> AUD {this.props.item.price}</p>
          <p><strong>Description: </strong>{this.props.item.description}</p>
          <p><strong>Size: </strong>{this.props.item.size}</p>
          <p><strong>Color: </strong>{this.props.item.color}</p>
          <p><strong>Stock: </strong>{this.props.item.stock > 0 ? 'Available' : 'Out of Stock'}</p>
        </div>
        <button onClick={this._handleClick}>Add to Cart</button>
        <button onClick={this._handleClick}>Buy Now</button>
       </div>
     );
   }
};
export default Item;
