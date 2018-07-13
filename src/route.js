import React, { Component } from 'react';
import 'babel-polyfill';
import {BrowserRouter, Route} from 'react-router-dom';
// import * as Router from 'react-router'
// import logo from './logo.svg';
// import Btn from './btns/btn';
// import Login from './login/login';
// import Li from './lis/lis';
import About from './about/about';
import './App.css';


class route extends Component {
  render() {
    return (
        <BrowserRouter>
          <Route path="/" component={About}>
            <indexRoute component={About}/>
          </Route>
        </BrowserRouter>
    );
  }
}

export default route;
