import 'babel-polyfill';
import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './about.css';
import { isNull, isUndefined } from 'util';

// const Desc = ({ match }) => {
//   <div>
//     <div>this is about desc</div>
//     <div>{ match }</div>
//   </div>
// };

class Desc extends Comment {
  render () {
    return (
      <div>
        <div>this is about desc</div>
      </div>
    )
  }
}

class About extends Component {
  render() {
    console.log(this.props.match.params);
    return (
      <div className='about'>
        <div>this is about page</div>
        {/* <div className="desc"><Link to="/about/:desc">this is about desc</Link></div>
        <Route path='desc' component={ Desc }></Route> */}
      </div>
    );
  }
}

export default About;
