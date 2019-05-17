import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../App.css';
import axios from 'axios';
import Nav from './Nav.js';
import { Dropdowns }  from "react-bootstrap";
import { Button, Container, Row, Col } from "reactstrap";


import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
import Footer from './Footer.js'

const FEATURECT = 5;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      featuredproducts: []
    }

    //pick random products
    const fetchFeatured = () => {
      axios.get("https://pamper-my-pet.herokuapp.com/products.json").then((results) => {
        //console.log("axios call=" + results.data);
        const allproducts = results.data;
        const randIndexArray = [];
        const featured = [];

        if (allproducts<3) {
          featured = allproducts;
        } else { //pick random
          for (let y=0; y<FEATURECT; y++ ) {
            let tempInd = 0;
            do {
              tempInd = Math.floor(Math.random() * allproducts.length);
            } while(randIndexArray.includes(tempInd)===true);
            randIndexArray[y] = tempInd;
          }
          //populate frestured
          for (let y=0; y<FEATURECT; y++ ) {
            const ridx = randIndexArray[y];
            featured[y] = allproducts[ridx];
          }
        }

        this.setState({featuredproducts: featured});

        setTimeout(fetchFeatured, 10000);
      })
    };

    fetchFeatured();
  } //constructor


  render() {
    return (
      <div className="App">
      <Nav />
      <h1>PAMPER MY PET</h1>
      <p>With the huge variety of pet-oriented content on the web, this "best of" list should give you a better idea of where to find anything from trendy haute couture pet creations to the lowest prices on dog, cat, bird and fish products. Happy shopping!</p>
      <div><DisplayFeatured featured={this.state.featuredproducts} /></div>
      <Footer />
      </div>
    );
  }
}


class DisplayFeatured extends Component {
  constructor(props) {
    super(props);

    this. state = {
      galleryItems: [] //[1, 2, 3].map((i) => (<h2 key={i}>{i}</h2>)),
    }

    const setupProducts = () => {
      const products = this.props.featured;
      //console.log("setupProducts props=" + products);

      const newp = products.map( (urpl) => <Link to={ "/product/" + urpl.id }><img src={urpl.image} alt={urpl.name} class="featurenotify"/></Link> );
      //console.log("formatted = " + newp);

      this.setState({galleryItems: newp});

      //console.log("state= " + this.state.galleryItems);

      setTimeout(setupProducts, 5000);
    }

    //console.log("props=" + this.props);
    setupProducts();
  } //constructor

  responsive = {
    0: { items: 1 },
    1024: { items: 2 },
  }

  onSlideChange(e) {
    //console.debug('Item`s position during a change: ', e.item)
    //console.debug('Slide`s position during a change: ', e.slide)
  }

  onSlideChanged(e) {
    //console.debug('Item`s position after changes: ', e.item)
    //console.debug('Slide`s position after changes: ', e.slide)
  }

  render() {
    //console.log("render props=" + this.props);
    return(
      <AliceCarousel
      items={this.state.galleryItems}
      responsive={this.responsive}
      autoPlayInterval={2000}
      autoPlayDirection="rtl"
      autoPlay={true}
      fadeOutAnimation={true}
      mouseDragEnabled={true}
      playButtonEnabled={true}
      disableAutoPlayOnAction={true}
      onSlideChange={this.onSlideChange}
      onSlideChanged={this.onSlideChanged}
      />
    )
  }
}



export default Home;
