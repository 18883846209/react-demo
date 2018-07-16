import React, { Component } from 'react';
import 'babel-polyfill';
// import { Link } from 'react-router-dom';
import './login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
    this.onLogout = this.onLogout.bind(this);
    this.state = { islogin: false };
  }
  onLogin() {
    // this.setState({
    //   islogin: true
    // });
    this.setState((prev) => {
        return { islogin: !prev.islogin }
    });
  }
  onLogout() {
    // this.setState({
    //   islogin: false
    // });
    this.setState((prev) => {
        return { islogin: !prev.islogin }
    });
  }
  render() {
    let classname = 'login';
    if (this.props.isadd) {
        classname += ' test'
    }
    return (
      <div>
        {/* <div className="alink"><Link to="/about">About</Link></div> */}
        <div className={ classname } onClick={this.onLogin}>
          islogin:{ this.state.islogin ? 1 : 0 }
        </div>
      </div>
    );
  }
}

export default Login;
