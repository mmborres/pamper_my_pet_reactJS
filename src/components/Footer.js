import React, { Component } from 'react';
import './../App.css';
import { Dropdowns }  from "react-bootstrap";
import { Button, Container, Row, Col } from "reactstrap";

import 'font-awesome/css/font-awesome.min.css';

class Footer extends Component {
  render() {
    return (
    <div>
    <footer class="clearfix">
		<p class="copyright">&copy; SEI-31</p>
		<p class="message"><a href="https://github.com/pandyapurvi/pet_shop_react" target="_blank"><i class="fa fa-github fa-2x"></i></a></p>
	</footer>
  </div>
    );
  }
}

export default Footer;
