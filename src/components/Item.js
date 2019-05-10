import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Item extends Component {
  render () {
    return (
      <div>
      <p>
        <Link to="/">Home</Link>
      </p>
        <Details />
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
       <h2>Name: of the Item will go here</h2>
       <img src="#"/>
       <h4>Prize: of the item </h4>
       <p>Descrption</p>
       <button onClick={this._handleClick}>Add to Cart</button>
       <button onClick={this._handleClick}>Buy Now</button>
       </div>
     );
   }
};
export default Item;
