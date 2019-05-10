import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Products extends Component {
  constructor(){
    super();
    // this.state ={
    //   category: '',
    //   pettype:''
    // }
    this.handleProduct = this.handleProduct.bind(this);
  }

  handleProduct(category, pettype){
    console.log(category, pettype);
  }

  render () {
    return(
      <div>
        <p>
          <Link to="/">Home</Link>
        </p>
        <h2>Products are coming soon</h2>
        <AllProduct onSubmit={ this.handleProduct} />
      </div>
    );
  }
};

class AllProduct extends Component {
  constructor(){
    super();
    this.state ={
      category: '',
      pettype: ''
    }

    this._handleChangeCategory = this._handleChangeCategory.bind(this);
    this._handleChangePetType = this._handleChangePetType.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChangeCategory(event){
    console.log(event.target.value);
    this.setState({ category: event.target.value});
    //console.log(this.state.category);
  };

  _handleChangePetType(event) {
    console.log(event.target.value);
    this.setState({pettype: event.target.value});
    //console.log(this.state.pettype);
  };
  _handleSubmit(event){
    event.preventDefault();
    console.log("hi");
    console.log(this.state.category);
    //this.props.onSubmit(this.state.category, this.state.pettype);
    this.props.onSubmit("TEST", "this.state.pettype");

  }
  render () {

    return (
      <div>
        <h3>Category/Classification</h3>
          <form onSubmit={this._handleSubmit} >
            <label>Category:</label>
              <select onChange={this._handleChangeCategory}>
                <option></option>
                <option value="clothing">Clothing</option>
                <option value="accessories">Accessories</option>
                <option value="toys">Toys</option>
              </select>

            <label>Pet Type:</label>
              <select onChange={this._handleChangePetType}>
                <option></option>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Fish">Fish</option>
              </select>
          <button type="submit">Shop Now!</button>
        </form>
      </div>
    );
  }
};

export default Products;
