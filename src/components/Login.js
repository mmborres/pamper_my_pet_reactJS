import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import './../App.css';
import axios from 'axios';
import UserProfile from './UserProfile';
import Nav from './Nav.js';
import Footer from './Footer.js';


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    const baseURL = "https://pamper-my-pet.herokuapp.com";

    //console.log(baseURL);
    axios.post(baseURL + "/users/login", { email: this.state.email, password: this.state.password }).then((result) =>{
      //post actions
      //console.log(result);
      //console.log(result.statusText);
      if (result.statusText==="OK") {
        UserProfile.setName(result.data.name);
        UserProfile.setUserId(result.data.user_id);
        UserProfile.setAdmin(result.data.admin);
        UserProfile.setEmail(result.data.email);

        let urlstr = window.location.href;
        if (urlstr.includes('#')) {
          urlstr = urlstr.split('#')[0] + '#/home'
        }
        window.location.replace(urlstr);
      }
    });

  }

  render() {
    return (
      <div className="App Login">
      <Nav />
      <header className="App-header">
      <h1>Login</h1>
      <br/>
      <br/>
      <form onSubmit={this.handleSubmit} action="/home">
      <FormGroup controlId="email" bsSize="large">
      <span style={{color: 'black'}} className="fa fa-envelope-o fa-fw"></span>
      <FormControl
      autoFocus
      type="email"
      value={this.state.email}
      onChange={this.handleChange}
      />
      </FormGroup>
      <FormGroup controlId="password" bsSize="large">
      <span style={{color: 'black'}} className="fa fa-key fa-fw"></span>
      <br/>
      <FormControl
      value={this.state.password}
      onChange={this.handleChange}
      type="password"
      />
      </FormGroup>
      <Button
      block
      bsSize="large"
      disabled={!this.validateForm()}
      type="submit"
      >
      Login
      </Button>
      </form>
      </header>
      <Footer />
      </div>
    );
  }
}
