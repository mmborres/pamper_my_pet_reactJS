import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import UserProfile from './UserProfile';
import Nav from './Nav.js';
import Footer from './Footer.js'


class NewProducts extends Component {
  constructor(){
    super();
    this.state = {
      newProd : []
    }
    this.saveProduct = this.saveProduct.bind(this);
  }

  saveProduct( name, image, description, size, color, price, stock, category, pettype) {
    axios.post("https://pamper-my-pet.herokuapp.com/products.json", {name: name, image:image,  description:description, size:size, color:color, price:price, stock:stock, classification:category, pet_type:pettype}).then((result) => {
      this.setState({newProd: [...this.state.newProd, result.data]})
      console.log(result.data);

      this.props.history.push("/products");
    });

  }

  render(){
    // const admin = UserProfile.isAdmin() === true;
    if (true) {
      return(
        <div>
        <Nav/>
        <h1 className="heading">Create Product</h1>
        <CreateForm onSubmit={this.saveProduct}/>
        <Footer/>
        </div>
      )
    }

  }
};


class CreateForm extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      image: '',
      description: '',
      size: '',
      color: '',
      price: 0,
      stock: 0,
      category: '',
      pettype: ''
    }

    this._handleChangeCategory = this._handleChangeCategory.bind(this);
    this._handleChangePetType = this._handleChangePetType.bind(this);
    this._handleInputName = this._handleInputName.bind(this);
    this._handleInputImage = this._handleInputImage.bind(this);
    this._handleInputDescription = this._handleInputDescription.bind(this);
    this._handleInputPrice = this._handleInputPrice.bind(this);
    this._handleInputColor = this._handleInputColor.bind(this);
    this._handleInputSize = this._handleInputSize.bind(this);
    this._handleInputStock = this._handleInputStock.bind(this)
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

  _handleInputName(event) {
    console.log(event.target.value);
    this.setState({name: event.target.value})
  };
  _handleInputImage(event) {
    console.log(event.target.value);
    this.setState({image: event.target.value})
  };

  _handleInputDescription(event) {
    console.log(event.target.value);
    this.setState({description: event.target.value})
  };

  _handleInputPrice(event) {
    console.log(event.target.value);
    this.setState({price: parseInt(event.target.value)})
    console.log(this.state.price)
  };

  _handleInputColor(event) {
    console.log(event.target.value);
    this.setState({color: event.target.value})
  };

  _handleInputSize(event) {
    console.log(event.target.value);
    this.setState({size: event.target.value})
  };

  _handleInputStock(event) {
    console.log(event.target.value);
    this.setState({stock: parseInt(event.target.value)})
  };

  _handleSubmit(event){
    event.preventDefault();
    // console.log("hi");
    console.log(this.state.category + "HI");
    console.log(this.state.pettype + "Hello");
    this.props.onSubmit(this.state.name, this.state.image, this.state.description, this.state.size, this.state.color, this.state.price, this.state.stock, this.state.category, this.state.pettype);
    //this.props.onSubmit("TEST", "this.state.pettype");

  }
  render () {

    return (
      <div className="editform">
      <form onSubmit={this._handleSubmit} >
      <label>Name</label>
      <input type="text" onInput={this._handleInputName}/>
      <br />

      <label>Image</label>
      <input type="text" onInput={this._handleInputImage}/>
      <br />

      <label>Details</label>
      <input type="text" onInput={this._handleInputDescription}/>
      <br />

      <label>Size</label>
      <input type="text" onInput={this._handleInputSize}/>
      <br />

      <label>Color</label>
      <input type="text" onInput={this._handleInputColor}/>
      <br />

      <label>Price</label>
      <input type="number" onInput={this._handleInputPrice} min="0"/>
      <br />

      <label>Stock</label>
      <input type="number" onInput={this._handleInputStock} min="0"/>
      <br />

      <label className="label">Category:</label>
      <select className="product-option" onChange={this._handleChangeCategory}>
      <option></option>
      <option value="Clothing">Clothing</option>
      <option value="Accessories">Accessories</option>
      <option value="Toys">Toys</option>
      </select>
      <br></br>
      <label className="label">Pet </label>
      <select className="product-option" onChange={this._handleChangePetType}>
      <option></option>
      <option value="Dog">Dog</option>
      <option value="Cat">Cat</option>
      <option value="Birds">Birds</option>
      <option value="Others">Others</option>
      </select>
      <br/>

      <button type="submit" onClick={"http://localhost:3000/#/products"} className="alter">Create Item!</button>

      </form>
      </div>

    );
  }
};

export default NewProducts;
