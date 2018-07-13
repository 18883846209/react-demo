import React, { Component } from 'react';
import 'babel-polyfill';
import './btn.css';

class Btn extends Component {
  constructor(props) {
    super(props);
    this.onClickBtn = this.onClickBtn.bind(this);
    this.state = { count: 0 };
  }
  onClickBtn() {
    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    return (
      <div className="btn" onClick={this.onClickBtn}>
        click count:{ this.state.count }
      </div>
    );
  }
}

export default Btn;
