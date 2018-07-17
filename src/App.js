import React, { Component } from 'react';
import 'babel-polyfill';
// import {BrowserRouter, Route, Link} from 'react-router-dom';
// import logo from './logo.svg';
// import Btn from './btns/btn';
// import Login from './login/login';
// import Li from './lis/lis';
// import About from './about/about';
import Route from './route';
// import Input from './input/input';
// import InputList from './inputlist/inputlist';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route />
      </div>
    );
  }
}

export default App;
