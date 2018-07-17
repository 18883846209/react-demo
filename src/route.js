import React, { Component } from 'react';
import 'babel-polyfill';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import logo from './logo.svg';
import Btn from './btns/btn';
import Login from './login/login';
import Li from './lis/lis';
import About from './about/about';
import Home from './home/home';
import './App.css';


class Routes extends Component {
  render() {
    return (
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={ Home }></Route>
              <Route path="/about" component={ About }></Route>
              <Route path="/btn" component={ Btn }></Route>
              <Route path="/login" component={ Login }></Route>
              <Route path="/li" component={ Li }></Route>
            </Switch>
          </div>
        </Router>
    );
  }
}

export default Routes;
