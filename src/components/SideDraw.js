import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './SideDrawer.css';
import Home from '../pages/Home.js';
import About from '../pages/About.js';

const SideDrawer = props => (
<Router>
  <nav className="side-bar">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
  <Switch>
    <Route exact path="/">
    </Route>
    <Route path="/about">
    </Route>
  </Switch>
</Router>

);

export default SideDrawer;
