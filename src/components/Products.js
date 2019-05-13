import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav.js';

import Footer from './Footer.js'

import UserProfile from './UserProfile';

//please make this similar to Airplane.js. Implement POST for new Products.
// 10. UserProfile - Rash Purvi - Please work on this in Product.JS and Item.JS, this is added in pages that need admin filtering. Admin can add Product and edit Product.
class Products extends Component {
  constructor(props){
    super(props);
    this.state = {
      products:[],
      pet: [],
      category: []
    }

    this.fetchProducts = this.fetchProducts.bind(this);
    //this.handleProduct = this.handleProduct.bind(this);
    const showProducts = () => {
      axios.get("https://pamper-my-pet.herokuapp.com/products.json").then((results) => {
        this.setState({products: results.data});

      })
    };
    showProducts();

    const pet = this.props.match.params.pet
    const fetchPet = () => {
      axios.get("https://pamper-my-pet.herokuapp.com/products/" + pet + ".json").then((results) => {
        this.setState({pet: results.data})
        console.log(results.data.name)
      })
    }


    const category = this.props.match.params.category
    const fetchCategory = () => {
      axios.get("https://pamper-my-pet.herokuapp.com/products/" + category + ".json").then((results) => {
        this.setState({category: results.data})
      })
    }



    //get value from params
    //this.
    //setstate

    //this.fetchProducts(c,p)
  }

     fetchProducts = (c,p) => {
      const category = c;
      const pet_type = p;
      // console.log(category + "category");
      // console.log(pet_type + "pet_type");
      axios.get("https://pamper-my-pet.herokuapp.com/products.json").then((results) => {
        //console.log(results.data);

        const p_data = results.data;
        const listProducts = [];
        //console.log(p_data.length + " p_data.lenth");

        for (let i = 0; i < p_data.length; i++) {
          const productData = p_data[i];
            //console.log(productData)
          if (category === "" && pet_type === ""){
            listProducts.push(productData);//All product items
          } else if (category!== "" && pet_type === ""){
            if (productData.classification!==null && productData.classification === category ){
              listProducts.push(productData)//all pet_type and selected category
            }

          } else if (category==="" && pet_type!==null){
            if (productData.pet_type!==null && productData.pet_type === pet_type ){
              listProducts.push(productData)//all category and selected pet type
            }
          } else {
            //console.log('hi');
            // console.log(productData.classification);
            // console.log(category);
            // console.log(productData.pet_type);
            // console.log(pet_type);
            if((productData.classification === category) && (productData.pet_type === pet_type)){
              listProducts.push(productData);//selected category and pet_type
            }
          }
        }
        console.log("listProducts =" + listProducts.length);
        this.setState({products: listProducts});

      })

    };
    //fetchProducts(this._handleChangeCategory,this._handleChangePetType);



  // handleProduct(category, pettype){
  //   console.log(category, pettype);
  // }

  render () {
    const isAdmin = UserProfile.getAdmin();


    return(
      <div>
        <Nav />
        <h2>Products</h2>
        <SearchForm pet = {this.fetchPet} category = {this.fetchCategory} onSubmit={ this.fetchProducts}/>
        {
          isAdmin
          ?  <p><Link to="/newproducts">Add New Product</Link></p>
          : ''
        }
        <Allproducts products={this.state.products}/>

        <Footer/>


      </div>
    );
  }
};

const Allproducts = (props) => {
  console.log("products" + props.products.length);
  if (props.products.length === 0){
    return 'You have 0 search result';
  } else {
    return(
      <div>
    {props.products.map( (p) =>
      <div>
     <img src={p.image}/>
     <p><strong>Name:</strong><Link to={ "/product/" + p.id }>{p.name}</Link></p>
     </div>
   )}
   </div>
 )


  }
}


class SearchForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      category: '',
      pettype: ''
    }

    this._handleChangeCategory = this._handleChangeCategory.bind(this);
    this._handleChangePetType = this._handleChangePetType.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);

    //setstate from props values
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
    // console.log("hi");

    this.props.onSubmit(this.state.category, this.state.pettype);
    //this.props.onSubmit("TEST", "this.state.pettype");

  }
  render () {
    //make values pre-selected
    const categories = [{name: "Clothing", selected: "selected"}, {name: "Accessories", selected: ""} ]

    return (
      <div>

          <form onSubmit={this._handleSubmit} >
            <label>Category:</label>
              <select onChange={this._handleChangeCategory}>
                <option></option>
                <option value="Clothing">Clothing</option>
                <option value="Accessories">Accessories</option>
                <option value="Toys">Toys</option>

                { categories.map( (c) => <option name={c.name} value={c.name} selected={c.selected}>{c.name}</option>)
                }
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
