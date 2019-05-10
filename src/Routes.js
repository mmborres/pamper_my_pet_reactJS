import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Products from './components/Products';
import Item from './components/Item';
import Checkout from './components/Checkout.js';
import Login from './components/Login.js';
import Logout from './components/Logout.js';

const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/item" component={Item} />
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/logout" component={Logout} />
    </div>
  </Router>
);

export default Routes;
