import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../App.css';
import axios from 'axios';

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
        console.log(results.data);
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

        <DisplayFeatured featured={this.state.featuredproducts} />
        <PlaySlides />

        <p>
          <Link to="/products">Products</Link>
        </p>
        <p>
          <Link to="/item">Item</Link>
        </p>
        <p>
          <Link to="/login">Login</Link>
        </p>
        <p>
          <Link to="/logout">Logout</Link>
        </p>
        <p>
          <Link to="/checkout">Checkout</Link>
        </p>
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
    constructor() {
      super();

    }
    
    render() {
      const products = this.props.featured;
      //console.log(products);

      let urlstr = window.location.href;
      if (urlstr.includes("#")) {
        urlstr = urlstr.split("#")[0] + "#/product/";
      }

      const newp = products.map( (urpl) => <a href={urlstr + urpl.id} ><img src={urpl.image} alt={urpl.name} class="featurenotify"/></a> );
      console.log(newp);

    return(
        <div className="App">

        <div id="carousel" class="carousel">
          <div class="slides">
            <div class="slide" data-state="active">{ newp[0] }</div>
            <div class="slide">{ newp[1] }</div>
            <div class="slide">{ newp[2] }</div>
          </div>
          
        </div>




        </div>
      )
    }
}
/*
<div class="indicators">
            <input class="indicator" name="indicator" data-slide="1" data-state="active" checked type="radio" />
            <input class="indicator" name="indicator" data-slide="2" type="radio" />
            <input class="indicator" name="indicator" data-slide="3" type="radio" />
          </div>
          */
class PlaySlides extends Component {
  constructor() {
    super();


function playSlides() {
    var carousel = document.getElementById('carousel');
    var slides = 3;
    var speed = 2000; // 5 seconds

function carouselHide(num) {
    indicators[num].setAttribute('data-state', '');
    slides[num].setAttribute('data-state', '');

    slides[num].style.opacity=0;
}

function carouselShow(num) {
    indicators[num].checked = true;
    indicators[num].setAttribute('data-state', 'active');
    slides[num].setAttribute('data-state', 'active');

    slides[num].style.opacity=1;
}

function setSlide(slide) {
    return function() {
        // Reset all slides
        for (var i = 0; i < indicators.length; i++) {
            indicators[i].setAttribute('data-state', '');
            slides[i].setAttribute('data-state', '');
            
            carouselHide(i);
        }

        // Set defined slide as active
        indicators[slide].setAttribute('data-state', 'active');
        slides[slide].setAttribute('data-state', 'active');
        carouselShow(slide);

        // Stop the auto-switcher
        clearInterval(switcher);
    };
}

function switchSlide() {
    var nextSlide = 0;

    // Reset all slides
    for (var i = 0; i < indicators.length; i++) {
        // If current slide is active & NOT equal to last slide then increment nextSlide
        if ((indicators[i].getAttribute('data-state') == 'active') && (i !== (indicators.length-1))) {
            nextSlide = i + 1;
        }

        // Remove all active states & hide
        carouselHide(i);
    }

    // Set next slide as active & show the next slide
    carouselShow(nextSlide);
}

if (carousel) {
    var slides = carousel.querySelectorAll('.slide');
    var indicators = carousel.querySelectorAll('.indicator');

    var switcher = setInterval(function() {
        switchSlide();
    }, speed);

    for (var i = 0; i < indicators.length; i++) {
        indicators[i].addEventListener("click", setSlide(i));
    }
}

  }

  playSlides();
} // constructor
  
  render() {
    return '';
  }
  
};

export default Home;
