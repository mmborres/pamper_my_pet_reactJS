import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from "react-bootstrap";
//import powerpuff from './../img/powerpuff.png';
import './../App.css';
//import "./Login.css";
import axios from 'axios';
import UserProfile from './UserProfile';
import Nav from './Nav.js';
import Footer from './Footer.js';
//import { Redirect } from 'react-router-dom';


export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      error_message: ""
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
    
console.log(this.state.email, this.state.password, this.state.password_confirmation);

if (this.state.password !== this.state.password_confirmation) {
  this.setState({error_message: 'Passwords do not match.'});
  return;
}
console.log('passwords ok');

axios.post("https://pamper-my-pet.herokuapp.com/users", { name: this.state.name, email: this.state.email, password: this.state.password}).then((result) =>{
    //post actions
    console.log(result);
    console.log(result.statusText);
    if (result.statusText==="Created") {
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
    })
    .catch((error) => {
      console.log('error', error.response.data.errors[0]);
      this.setState({ error_message: error.response.data.errors[0]})
    });

  }

  render() {
    return (
      <div className="App Login">
      <Nav />
      <header className="App-header">
      <h1>Sign Up</h1>

        <form onSubmit={this.handleSubmit} action="/home">
          <FormGroup controlId="name" bsSize="large">
            <span style={{color: 'black'}}>Name</span>
            <FormControl
              autoFocus
              type="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="email" bsSize="large">
            <span style={{color: 'black'}}>Email</span>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
          <span style={{color: 'black'}}>Password</span>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <FormGroup controlId="password_confirmation" bsSize="large">
          <span style={{color: 'black'}}>Confirm Password</span>
            <FormControl
              value={this.state.password_confirmation}
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
            Sign Up
          </Button>
        </form>
        <p>{this.state.error_message}</p>
        </header>
        <Footer />
      </div>
    );
  }
}
