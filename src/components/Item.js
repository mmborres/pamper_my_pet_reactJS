import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Item extends Component {
  constructor(){
    super();
    this.state = {
      item: []
    }

    //this.fetchImages = this.fetchImages.bind(this);
    //localhost:3001/#/product/{id}
    //<Route exact path="/product/:id" component={Item} />
    // To get to this page, the product id should be passed same way in Rails params.
    // Refer to Flights.js -> flight link going to -> Reservation.js

    const fetchImages = () => {
      axios.get("https://pamper-my-pet.herokuapp.com/products.json").then((results) => {
        //console.log(results.data[0]);
        this.setState({item: results.data});
      })
    };
    fetchImages();
  }



  render () {
    return (
      <div>
      <p>
        <Link to="/">Home</Link>
      </p>

        <Details item={this.state.item} />
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
         {this.props.item.map( (i) =>
           <div>
          <img src={i.image}/>
          <p><strong>Name:</strong>{i.name}</p>
          <p><strong>Price: </strong>{i.price}</p>
          <p><strong>Description: </strong>{i.description}</p>
          <p><strong>Size: </strong>{i.size}</p>
          <p><strong>Color: </strong>{i.color}</p>
          </div>
        )}
        </div>

       <button onClick={this._handleClick}>Add to Cart</button>
       <button onClick={this._handleClick}>Buy Now</button>
       </div>
     );
   }
};
export default Item;
