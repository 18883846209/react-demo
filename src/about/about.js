import 'babel-polyfill';
import React, { Component } from 'react';
import Btn from '../btns/btn';
import './about.css';

class About extends Component {
  render() {
    console.log(this.props.match.params);
    return (
      <div className='about'>
        <div>this is about page</div>
        {/* <div className="desc"><Link to="/about/:desc">this is about desc</Link></div>
        <Route path='desc' component={ Desc }></Route> */}
        <Btn text="this is a button" ownerclass="aboutbtn" />
      </div>
    );
  }
}

export default About;
