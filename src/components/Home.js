import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../App.css';
import axios from 'axios';

import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
import Footer from './Footer.js'

const FEATURECT = 3;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      featuredproducts: []
    }

    //pick random products
    const fetchFeatured = () => {
      axios.get("https://pamper-my-pet.herokuapp.com/products.json").then((results) => {
        console.log("axios call=" + results.data);
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
        <h1>Pamper My Pet</h1>


        <div style={{backgroundColor: 'aquamarine'}}><DisplayFeatured featured={this.state.featuredproducts} /></div>

        <p>
          <Link to="/products">Products</Link>
        </p>

        <p>
          <Link to="/checkout">View Cart</Link>
        </p>

        <p>
          <Link to="/orders">View Orders</Link>
        </p>

        <Footer />
      </div>
    );
  }
}

//<Link to={ urlItem }><img src={props.image} alt="From Flickr" /></Link>
//<a href={urlItem} ><img src={props.image} alt="From Flickr" /></a>
const ImageLink = (props) => {
  let urlstr = window.location.href;
  if (urlstr.includes("#")) {
    urlstr = urlstr.split("#")[0] + "#/product/" + props.id;
  }

  console.log(urlstr);

  return (
      <a href={urlstr} ><img src={props.image} alt="From Flickr" /></a>
  );
};


class DisplayFeatured extends Component {
    constructor(props) {
      super(props);

      this. state = {
        galleryItems: [] //[1, 2, 3].map((i) => (<h2 key={i}>{i}</h2>)),
      }

      const setupProducts = () => {
        const products = this.props.featured;
        console.log("setupProducts props=" + products);

        let urlstr = window.location.href;
        if (urlstr.includes("#")) {
          urlstr = urlstr.split("#")[0] + "#/product/";
        }

        const newp = products.map( (urpl) => <a href={urlstr + urpl.id} ><img src={urpl.image} alt={urpl.name} class="featurenotify"/></a> );
        console.log("formatted = " + newp);

        this.setState({galleryItems: newp});

        console.log("state= " + this.state.galleryItems);

        setTimeout(setupProducts, 5000);
      }

      console.log("props=" + this.props);
      setupProducts();
    } //constructor

    responsive = {
      0: { items: 1 },
      1024: { items: 2 },
    }
   
    onSlideChange(e) {
      console.debug('Item`s position during a change: ', e.item)
      console.debug('Slide`s position during a change: ', e.slide)
    }
  
    onSlideChanged(e) {
      console.debug('Item`s position after changes: ', e.item)
      console.debug('Slide`s position after changes: ', e.slide)
    }
    
    render() {
      console.log("render props=" + this.props);
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
