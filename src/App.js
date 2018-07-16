import React, { Component } from 'react';
import 'babel-polyfill';
// import {BrowserRouter, Route, Link} from 'react-router-dom';
// import logo from './logo.svg';
// import Btn from './btns/btn';
// import Login from './login/login';
// import Li from './lis/lis';
// import About from './about/about';
// import route from './route';
import Input from './input/input';
import InputList from './inputlist/inputlist';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { list: ['test'] };
    this.handleInput = this.handleInput(this);
  }
  handleInput(e) {
    console.log(this.refs.input);
    if (e.keyCode === 13) {
      let value = e.target.value;
      console.log(value);
      e.target.value = '';
      this.setState((state) => {
        let list = state.list;
        list.push(value);
        return { list: state.list }
      });
    }
  }
  render() {
    fetch('https://www.easy-mock.com/mock/59801fd8a1d30433d84f198c/example/user/all').then((res) => {
      res.json();
    })
    return (
      // <BrowserRouter basename="/login">
      //     <div>
      //         {/* <div className="alink"><Link to="/about">About</Link></div> */}
      //         {/*注意这个地方path的值要跟上面Link的to一样*/}
      //         <Route path="/login" component={ Login }/>
      //     </div>
      // </BrowserRouter>
      <div>
        <Input handle={ this.handleInput } refs="input" />
        <InputList arr={ this.state.list } />
        <div>aaa</div>
      </div>
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
