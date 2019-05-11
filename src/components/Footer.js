import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div>
      <p>
        <Link to="/home"> Back to Home </Link>
      </p>
      </div>
    );
  }
}

export default Footer;
