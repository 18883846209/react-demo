import 'babel-polyfill';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="home"><Link to="/about">go to about</Link></div>
        <div className="home"><Link to="/login">go to login</Link></div>
        <div className="home"><Link to="/btn">go to btn</Link></div>
        <div className="home"><Link to="/li">go to li</Link></div>
      </div>
    );
  }
}

export default Home;
