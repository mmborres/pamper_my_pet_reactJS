import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import UserProfile from './UserProfile';

class NewProducts extends Component {
  constructor(){
    super();
    this.state = {
      newProd : []
    }
    this.saveProduct = this.saveProduct.bind(this);
  }

  saveProduct( name, image, description, size, color, price, stock, category, pettype) {
      axios.post("https://pamper-my-pet.herokuapp.com/products.json", {name: name, image:image, description:description, size:size, color:color, price:price, stock:stock, classification:category, pet_type:pettype}).then((result) => {
        this.setState({newProd: [...this.state.newProd, result.data]})
        console.log(result.data);
      });

    }

  render(){
    // const admin = UserProfile.isAdmin() === true;
    if (true) {
      return(
        <div>
        <h1>Create Product</h1>
        <CreateForm onSubmit={this.saveProduct}/>


        <p>
         <Link to="/home">Back to Home</Link>
         </p>
        </div>
      )
    }

  }
};

// const Allproducts = (props) => {
//   //console.log("products" + props.products.length);
//   if (props.products.length === 0){
//     return 'You have 0 search rresult';
//   } else {
//     return(
//       <div>
//     {props.products.map( (p) =>
//       <div>
//      <img src={p.image}/>
//      <p><strong>Name:</strong><Link to={ "/product/" + p.id }>{p.name}</Link></p>
//      </div>
//    )}
//    </div>
//  )
//
//
//   }
// }


class CreateForm extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      image: '',
      description: '',
      size: '',
      color: '',
      price: '',
      stock: '',
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
      this.setState({price: event.target.value})
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
      this.setState({stock: event.target.value})
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
      <div>

          <label>Name</label>
          <input type="text" onInput={this._handleInputName}/>
          <br />

          <label>Image</label>
          <input type="text" onInput={this._handleInputImage}/>
          <br />

          <label>Description</label>
          <input type="text" onInput={this._handleInputDescription}/>
          <br />

          <label>Size</label>
          <input type="text" onInput={this._handleInputSize}/>
          <br />

          <label>Color</label>
          <input type="text" onInput={this._handleInputColor}/>
          <br />

          <label>Price</label>
          <input type="text" onInput={this._handleInputPrice}/>
          <br />

          <label>Stock</label>
          <input type="text" onInput={this._handleInputStock}/>
          <br />

          
            <form onSubmit={this._handleSubmit} >
              <label>Category:</label>
                <select onChange={this._handleChangeCategory}>
                  <option></option>
                  <option value="Clothing">Clothing</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Toys">Toys</option>
                </select>
                  <br/>
              <label>Pet Type:</label>
                <select onChange={this._handleChangePetType}>
                  <option></option>
                  <option value="Dog">Dog</option>
                  <option value="Cat">Cat</option>
                  <option value="Fish">Fish</option>
                </select>
                <br/>

          <button type="submit" onClick={"http://localhost:3000/#/products"} >Create Item!</button>



        </form>
      </div>
    );
  }
};



export default NewProducts;
