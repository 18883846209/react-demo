import React, { Component } from 'react';
import 'babel-polyfill';
import './input.css';

class Input extends Component {
  constructor(props) {
    super(props);
    this.handle = this.handle.bind(this);
    this.state = { value: '' };
  }
  handle(e) {
    // console.log(e.target.value);
    this.setState({
      value: e.target.value.toUpperCase()
    });
  }
  render() {
    return (
      <div>
        <div className="input">
          <input type="text" value={ this.state.value } refs={ this.props.refs } onChange={ this.handle } onKeyDown={ this.props.handle } placeholder="请输入信息" />
        </div>
      </div>
    );
  }
}

export default Input;
