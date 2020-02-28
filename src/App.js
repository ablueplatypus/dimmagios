import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Sidebar from './components/SideDraw.js';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Nav/>
        <Sidebar />
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path ="/about" component={About}/>
          </Switch>
        </Router>
      </div>
    );
 }
}

export default App;
