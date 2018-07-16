import React, { Component } from 'react';
import 'babel-polyfill';
import './inputlist.css';

class InputList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { listarr: ['23', '121'] }
  // }
  render () {
    let items = this.props.arr && this.props.arr.map((item, index) => // 不能加花括号包裹
      <li key={ index.toString() }>{ item }</li>
    );
    return (
      <ul>
        { items }
      </ul>
    );
  }
}

export default InputList;
