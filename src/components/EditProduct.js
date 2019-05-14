import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import UserProfile from './UserProfile';
import Nav from './Nav.js';
import Footer from './Footer.js'

class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit_pro : []
    }
    this.updateProduct = this.updateProduct.bind(this);

    const pro_id = this.props.match.params.id;
    const URL = "https://pamper-my-pet.herokuapp.com/products/" + pro_id + ".json"

    const fetchValues = () => {
        axios.get(URL).then((results) => {
          console.table(results.data);
          this.setState({edit_pro: results.data});
          console.log(this.state.edit_pro);
          //setTimeout(fetchPlanes, 4000);
        })
      };
      fetchValues();

  }

  updateProduct( name, image, description, size, color, price, stock, category, pettype) {
    const pro_id = this.props.match.params.id;
    const URL = "https://pamper-my-pet.herokuapp.com/products/" + pro_id + ".json";

    console.log(URL);

    axios.put(URL, {name: name, image:image, description:description, size:size, color:color, price:price, stock:stock, classification:category, pet_type:pettype}).then((result) => {
      this.setState({edit_prod: result.data})
      console.log(result.data);
    });

    const urlback = "/product/" + pro_id;
    this.props.history.push(urlback);
  }

  render(){
      return(
        <div>
        <Nav/>
        <h1>Edit Product</h1>
        <EditForm edit_pro={this.state.edit_pro} onSubmit={this.updateProduct}/>
        <Footer/>
        </div>
      )
  }
};

class EditForm extends Component {
  constructor(props){
    super(props);
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
    this._handleChangeName = this._handleChangeName.bind(this);
    this._handleInputImage = this._handleInputImage.bind(this);
    this._handleInputDescription = this._handleInputDescription.bind(this);
    this._handleInputPrice = this._handleInputPrice.bind(this);
    this._handleInputColor = this._handleInputColor.bind(this);
    this._handleInputSize = this._handleInputSize.bind(this);
    this._handleInputStock = this._handleInputStock.bind(this)
    this._handleSubmit = this._handleSubmit.bind(this);

  }

  componentDidMount() {
    this.setState({name: this.props.edit_pro.name})
    this.setState({image: this.props.edit_pro.image})
    this.setState({description: this.props.edit_pro.description})
    this.setState({size: this.props.edit_pro.size})
    this.setState({color: this.props.edit_pro.color})
    this.setState({price: this.props.edit_pro.price})
    this.setState({stock: this.props.edit_pro.stock})
    this.setState({category: this.props.edit_pro.classification})
    this.setState({pettype: this.props.edit_pro.pet_type})
  }

  _handleChangeCategory(event) {
    this.setState({ category: event.target.value});
    //console.log(this.state.category);
  };

  _handleChangePetType(event) {
    this.setState({pettype: event.target.value});
    //console.log(this.state.pettype);
  };

  _handleChangeName(event) {
    this.setState({name: event.target.value})
  };

  _handleInputImage(event) {
    this.setState({image: event.target.value})
  };

  _handleInputDescription(event) {
    this.setState({description: event.target.value})
  };

  _handleInputPrice(event) {
    this.setState({price: parseInt(event.target.value)})
    console.log(this.state.price)
  };

  _handleInputColor(event) {
    this.setState({color: event.target.value})
  };

  _handleInputSize(event) {
    this.setState({size: event.target.value})
  };

  _handleInputStock(event) {
    this.setState({stock: parseInt(event.target.value)})
  };

  _handleSubmit(event){
    event.preventDefault();
    this.props.onSubmit(this.state.name, this.state.image, this.state.description, this.state.size, this.state.color, this.state.price, this.state.stock, this.state.category, this.state.pettype);

  }
  render () {

    return (
      <div>
      <form onSubmit={this._handleSubmit} >
      <label>Name</label>
      <input type="text" defaultValue={this.props.edit_pro.name} onChange={this._handleChangeName}/>
      <br />

      <label>Image</label>
      <input type="text" defaultValue={this.props.edit_pro.image} onInput={this._handleInputImage}/>
      <br />

      <label>Description</label>
      <input type="text" defaultValue={this.props.edit_pro.description} onInput={this._handleInputDescription}/>
      <br />

      <label>Size</label>
      <input type="text" defaultValue={this.props.edit_pro.size} onInput={this._handleInputSize}/>
      <br />

      <label>Color</label>
      <input type="text" defaultValue={this.props.edit_pro.color} onInput={this._handleInputColor}/>
      <br />

      <label>Price</label>
      <input type="number" defaultValue={this.props.edit_pro.price} onChange={this._handleInputPrice} />
      <br />

      <label>Stock</label>
      <input type="number" defaultValue={this.props.edit_pro.stock} onInput={this._handleInputStock} />
      <br />

      <label>Category:</label>
      <select defaultValue={this.props.edit_pro.classification} onChange={this._handleChangeCategory}>
      <option></option>
      <option >Clothing</option>
      <option >Accessories</option>
      <option >Toys</option>
      </select>
      <br/>
      <label>Pet Type:</label>
      <select defaultValue={this.props.edit_pro.pet_type} onChange={this._handleChangePetType}>
      <option></option>
      <option>Dog</option>
      <option>Cat</option>
      <option>Fish</option>
      </select>
      <br/>

      <button type="submit">Edit Item</button>
      </form>
      </div>
    );
  }
};



export default EditProduct;
