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

//users/login

/*
{
  "email": "test@example.com",
  "password": "anewpassword"
}
*/
//const baseURL = "http://localhost:3000";
const baseURL = "https://pamper-my-pet.herokuapp.com";

console.log(baseURL);
axios.post(baseURL + "/users/login", { email: this.state.email, password: this.state.password }).then((result) =>{
    //post actions
    console.log(result);
    console.log(result.statusText);
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
      <header className="App-header">
      <h1>Login</h1>

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
