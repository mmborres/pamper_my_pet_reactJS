import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../App.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer" >
      <div className="footerA">
        A
      </div>
      <div className="footerB">
        B
      </div>
      <div className="footerC">
        C
      </div>
      </div>
    );
  }
}

export default Footer;
