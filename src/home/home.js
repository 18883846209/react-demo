import 'babel-polyfill';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.handle = this.handle.bind(this);
    this.state = {
      params: ['jason', 'undefined'],
      data: ''
    };
  }
  handle() {
    this.state.params.push('aaa');
    console.log(this.state.params);
  }
  componentDidMount() { // 网络请求放在该生命周期内
    this.setState({
      data: 'update state data'
    });
    axios.get('https://www.easy-mock.com/mock/5b4c5fb27566935928eeb4f1/example/mock')
    .then((value) => {
      console.log(value.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }
  render() {
    let params = this.state.params;
    // params.push('test');
    console.log(params);
    return (
      <div>
        {/* <div className="home"><Link to="/about">go to about</Link></div> */}
        <div className="home" onClick={ this.handle }>{ this.state.data }</div>
        <div className="home"><Link to={ `/about/${params.join('/')}` }>go to about</Link></div>
        <div className="home"><Link to="/login">go to login</Link></div>
        <div className="home"><Link to="/btn">go to btn</Link></div>
        <div className="home"><Link to="/li">go to li</Link></div>
      </div>
    );
  }
}

export default Home;
