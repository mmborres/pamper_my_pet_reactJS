import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from "react-bootstrap";
//import powerpuff from './../img/powerpuff.png';
import './../App.css';
//import "./Login.css";
import axios from 'axios';
import UserProfile from './UserProfile';
//import { Redirect } from 'react-router-dom';
//import Home from './Home';

//const SERVER_URL = 'https://powerpuffairlines.herokuapp.com/users.json';

// alert('Logged in');
// this.props.userHasAuthenticated(true);

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      password_confirmation: ""
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
    /*
    // store user id
    // via windows localstorage
    let user_id = -1;
    let userDetail = null;
    //const getUser_id = () => {
      axios.get(SERVER_URL).then((results) => {
        //this.setState({user_id: results.data});
        const userslist = results.data;
        console.log(this.state.email);
        console.log(userslist);
        for (let i=0; i<userslist.length; i++) {
          if (userslist[i].email === this.state.email) {
            user_id = userslist[i].id;
            userDetail = userslist[i];
            break;
          }
        }
        console.log(user_id);
        if ( user_id > 0 ) {
            console.log("Login=" + userDetail.admin);
            //user id found
            //direct to homepage
            UserProfile.setName(userDetail.name);
            UserProfile.setUserId(user_id);
            UserProfile.setAdmin(userDetail.admin);
            UserProfile.setEmail(userDetail.email);

            //http://localhost:3000/#/home
            let urlstr = window.location.href;
            if (urlstr.includes("#")) {
                urlstr = urlstr.split("#")[0] + "#/home"
            }

            window.location.replace(urlstr);
            //return (<Home />)
        }
      });
      //}
    //};
    //getUser_id()

    // //if (typeof (Storage) !== "undefined") {
		// localStorage.setItem('user_id', user_id);
    // //}
    // //
*/

//handle sending to json

//post to http://localhost:3000/users:
/*
{
    user: {
      email: 'test@example.com',
      password: 'anewpassword',
      password_confirmation: 'anewpassword'
    }
}*/

console.log(this.state.email, this.state.password, this.state.password_confirmation);


axios.post("https://pamper-my-pet.herokuapp.com/users", { email: this.state.email, password: this.state.password, password_confirmation: this.state.password_confirmation }).then((result) =>{
    //post actions
    console.log(result);
    console.log(result.statusText);
    });

  }

  render() {
    return (
      <div className="App Login">
      <header className="App-header">
      <h1>Sign Up</h1>

        <form onSubmit={this.handleSubmit} action="/home">
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
            Login
          </Button>
        </form>
        </header>
      </div>
    );
  }
}
