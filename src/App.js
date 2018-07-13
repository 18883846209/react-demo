import React, { Component } from 'react';
import 'babel-polyfill';
// import logo from './logo.svg';
// import Btn from './btns/btn';
// import Login from './login/login';
// import Li from './lis/lis';
import route from './route';
import './App.css';


class App extends Component {
  render() {
    return (
        // <div>
        //   <header className="App-header">
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <h1 className="App-title">Welcome to React</h1>
        //   </header>
        //   <p className="App-intro">
        //     To get started, edit <code>src/App.js</code> and save to reload.
        //   </p>
        //   <div className="out">
        //     <div className="inner">
        //       <img src="https://sandbox.runjs.cn/uploads/rs/445/n8vp1ns5/2e2eb9389b504fc2314.jpg" alt="logo"/>
        //     </div>
        //   </div>
        //   <Btn className="test" />
        //   <Login isadd onClick={ this.cons } />
        //   <Li />
        // </div>
        <route />
    );
  }
}

// React.render((
//   <Router>
//     <Route path="/" component={App}>
//       <Route path="about" component={About} />
//     </Route>
//   </Router>
// ), document.body)

export default App;
