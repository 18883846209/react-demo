import React, { Component } from 'react';
import 'babel-polyfill';
import './lis.css';

class Li extends Component {
  constructor(props) {
    super(props);
    this.handle = this.handle.bind(this);
  }
  handle(e) {
    console.log(e.target.dataset.value);
  }
  render() {
    let arr = [1, 2, 3, 4];
    let items = arr.map((item) =>
        <li className={ 'li_item ' + item } key={ item } onClick={ this.handle } data-value={ item }>{ item }</li>
    );
    return (
      <ul>{ items }</ul>
    );
  }
}

export default Li;
