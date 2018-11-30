import 'babel-polyfill';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import lrz from 'lrz';
import scale from '../scale';
import '../transform';
import './home.css';
import { Transform } from 'stream';
const arr = [11, 22, 33, 44];

class Home extends Component {
  constructor(props) {
    super(props);
    this.handle = this.handle.bind(this);
    this.upfile = this.upfile.bind(this);
    this.state = {
      params: ['jason', 'undefined'],
      data: '',
      arr: [],
      src: '',
      dom: '',
      selectedIndex: null
    };
  }
  click(id) {
    this.setState({
      selectedIndex: id
    });
  }
  handle() {
    this.state.params.push('aaa');
    // console.log(this.state.params);
  }
  upfile(e) {
    let file = e.target.files[0];
    // console.log(file);
    lrz(file, {width: 250, quality: 0.6})
    .then(rst => {
        let uploadImg = rst.base64;
        // console.log(uploadImg);
        this.setState({
          src: uploadImg
        });
    })
  }
  componentDidMount() { // 网络请求放在该生命周期内
    console.log(window.location);
    let img = this.refs.img;
    Transform(img);
    new scale(img, {
      pinch: function (evt) {
        img.scaleX = img.scaleY = evt.zoom;
    }
    });
    this.setState({
      data: 'update state data'
    });
    // axios.get('https://www.easy-mock.com/mock/5b4c5fb27566935928eeb4f1/example/mock')
    // .then((value) => {
    //   // console.log(value.data.data.projects);
    //   this.setState({
    //     arr: value.data.data.projects
    //   });
    //   // console.log(this.state.src);
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
  }
  render() {
    let params = this.state.params;
    // params.push('test');
    // console.log(params);
    return (
      <div>
        <div>
          {arr.map((item, index) => 
            <div className={index === this.state.selectedIndex ? 'acvtive' : ''} onClick={() => this.click(index)}>{item}</div>
          )}
        </div>
        {/* <div className="home"><Link to="/about">go to about</Link></div> */}
        <div className="home" onClick={ this.handle }>{ this.state.data }</div>
        <div className="home"><Link to={ `/about/${params.join('/')}` }>go to about</Link></div>
        <div className="home"><Link to="/login">go to login</Link></div>
        <div className="home"><Link to="/btn">go to btn</Link></div>
        <div className="home"><Link to="/li">go to li</Link></div>
        <div className="home"><Link to="/input">go to input</Link></div>
        <div className="home">
          <input type="file" name="file" className="input" onChange={ this.upfile } />
          <label htmlFor="file" className="choose">choose a file</label>
          <img src={ this.state.src ? this.state.src : '' } ref="img" alt="img" />
        </div>
        <input type="text" placeholder="search" />
        <div className="test1"></div>
        <div className="test2"></div>
        <div className="test3"></div>
        {/* { this.state.arr && this.state.arr.map((item, index) =>
          <div className="item" key={ index }>测试：{ item.name }</div>
        ) } */}
      </div>
    );
  }
}

export default Home;
