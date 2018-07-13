import React, { Component } from 'react';
import 'babel-polyfill';
import {BrowserRouter, Route, Link} from 'react-router-dom';
// import logo from './logo.svg';
// import Btn from './btns/btn';
// import Login from './login/login';
// import Li from './lis/lis';
import About from './about/about';
// import route from './route';
import './App.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
              <div><Link to="/about">About</Link></div>
              {/*注意这个地方path的值要跟上面Link的to一样*/}
              <Route path="/about" component={About}/>
          </div>
      </BrowserRouter>
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
