import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav.js';
import './../App.css';
import Footer from './Footer.js'

import UserProfile from './UserProfile';

class Products extends Component {
  constructor(props){
    super(props);
    this.state = {
      products:[],
      pet: '',
      category: '',
      pets:[],
      categories: [],

    }

    this.fetchProducts = this.fetchProducts.bind(this);

    const showProducts = () => {
      axios.get("https://pamper-my-pet.herokuapp.com/products.json").then((results) => {

        this.setState({products: results.data});

      })
    };

    showProducts();

    const getPets = () => {
      axios.get("https://pamper-my-pet.herokuapp.com/pets.json").then((results) => {
        //console.log("pets " + results.data );
        const pets = [];
        results.data.map((p)=> {pets.push(p.name)});
        //console.log(pets);
        this.setState({pets: pets});

      })
    };
    getPets();

    const getCategories = () => {

      axios.get("https://pamper-my-pet.herokuapp.com/categories.json").then((results) => {
        const categories = [];
        results.data.map((c) => { categories.push(c.name)});
        this.setState({categories: categories});
        //console.log("thisis catefory" + categories);
      })
    };
    getCategories();

    if ( this.props.match.params.category!==undefined && this.props.match.params.pet!==undefined ) {
      // console.log("props here");
      // console.log(this.props.match.params.category);

      //get value from params
      const category = this.props.match.params.category;
      const pet = this.props.match.params.pet;
      //console.log("1a=" + pet);

      //setstate
      this.setState({category: category, pet: pet});

      //console.log("1b=" + this.state.pet);

      this.fetchProducts(category, pet);

    }

  }

     fetchProducts = (c,p) => {
      const category = c;
      const pet_type = p;
      //console.log(category + " = category");
      //console.log(pet_type + " = pet_type");

      axios.get("https://pamper-my-pet.herokuapp.com/products.json").then((results) => {
        const p_data = results.data;
        const listProducts = [];
        for (let i = 0; i < p_data.length; i++) {
          const productData = p_data[i];

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

            // console.log(productData.classification);
            // console.log(productData.pet_type);

            if((productData.classification === category) && (productData.pet_type === pet_type)){
              listProducts.push(productData);//selected category and pet_type
            }
          }
        }
        //console.log("listProducts =" + listProducts.length);
        this.setState({products: listProducts});

      })

    };

  componentDidUpdate(prevProps, prevState, snapshot) {
    //console.log('update!', this.props.match);
    //console.log(prevProps.match);
    //console.log(prevState);
    // todo: update the state here
    const pet = this.props.match.params.pet;
    const category = this.props.match.params.category;

    const prevpet = prevProps.match.params.pet;
    const prevcategory = prevProps.match.params.category;

    //this.setState({pet: this.props.match.params.pet, category: this.props.match.params.category})
    // todo: maybe fetch products
    if (pet !== prevpet || category !== prevcategory) {
      this.fetchProducts(category, pet);
      //this.setState({category: category, pet: pet});
      //console.log("2==" + this.state.pet);
    }
  }

  render () {
    const isAdmin = UserProfile.getAdmin();
    //console.log("parent = " + this.state.categories);
    //console.log("parent pet = " + this.state.pet);

    //console.log("render props pet = " + this.props.match.params.pet);

    return(

      <div>
        <Nav />
        <h2>{this.state.pet} Products</h2>
        <SearchForm pet={this.props.match.params.pet} category = {this.props.match.params.category} pets={this.state.pets} categories={this.state.categories} onSubmit={ this.fetchProducts}/>
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

  //console.log("products = " + props.products.length);
  if (props.products.length === 0){
    return 'You have 0 search result';
  } else {
    //console.log('rendering...')
    return(
      <div>
    {props.products.map( (p) =>
      <div>
     <img src={p.image} className="featurenotify"/>
     <p><strong>Name:</strong><Link to={ "/product/" + p.id }>{p.name}</Link></p>

     </div>
   )}
   </div>
 )


  }

}


class SearchForm extends Component {
  constructor(){
    super();
    this.state = {
      category: '',
      pettype: ''
    }

    this._handleChangeCategory = this._handleChangeCategory.bind(this);
    this._handleChangePetType = this._handleChangePetType.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);

    //setstate from props values
    //this.setState({pets: this.props.pets})
    //console.log("searchform = " + props.pets);
  }

  _handleChangeCategory(event){
    //console.log(event.target.value);
    this.setState({ category: event.target.value});
    //console.log(this.state.category);
  };

  _handleChangePetType(event) {
    //console.log(event.target.value);
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

    //console.log("here 123 = " + this.props.categories);

    return (
      <div>

          <form onSubmit={this._handleSubmit} >
            <label>Category:</label>
              <select onChange={this._handleChangeCategory}>
                <option></option>
                {
                  this.props.categories.map( (c) => <option name={c} value={c} selected={ (c===this.props.category) ? "selected" : ""}>{c}</option>)
                }
              </select>

            <label>Pet Type:</label>
              <select onChange={this._handleChangePetType}>
                <option></option>
                {
                  this.props.pets.map( (p) => <option name={p} value={p} selected={ (p===this.props.pet) ? "selected" : "" }>{p}</option>)
                }
              </select>

          <button type="submit">Shop Now!</button>
        </form>
      </div>
    );
  }
};

export default Products;
