import React, { Component } from 'react';
import 'babel-polyfill';
import './input.css';

class Input extends Component {
  constructor(props) {
    super(props);
    this.handle = this.handle.bind(this);
    this.sub = this.sub.bind(this);
    this.state = { 
      value: '',
      subdata: []
    };
  }
  handle(e) {
    console.log(e.target.value);
    this.setState({
      value: e.target.value
    });
  }
  sub() {
    console.log(this.state.value);
    let value = this.state.value.length > 0 ? this.state.value : 'no input';
    let arr = this.state.subdata;
    arr.push(value);
    this.setState({
      value: '',
      subdata: arr
    });
  }
  render() {
    return (
      <div>
        <div className="input">
          <input type="text" value={ this.state.value } onChange={ this.handle } placeholder="请输入信息" />
        </div>
        <button onClick={ this.sub }>提交</button>
        <ol>
          { this.state.subdata && this.state.subdata.map((item, index) => 
              <li key={ index }>{ item }</li>
          ) }
        </ol>
      </div>
    );
  }
}

export default Input;
