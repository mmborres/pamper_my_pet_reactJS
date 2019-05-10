import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Logout extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <p>
          <Link to="/">Home</Link>
        </p>
      </div>
    );
  }
}

export default Logout;
