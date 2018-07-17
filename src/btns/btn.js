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
    let classname = this.props.ownerclass ? `btn ${this.props.ownerclass}` : 'btn';
    return (
      <div className={ classname } onClick={this.onClickBtn}>
        { this.props.text ? this.props.text : 'btn' }
      </div>
    );
  }
}

export default Btn;
