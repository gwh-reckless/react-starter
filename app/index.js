import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './index.css';

class App extends Component {
  state = {};
  render() {
    console.log('hello world');
    return <h1>Hello World</h1>;
  }
}

export default App;

ReactDom.render(<App />, document.getElementById('app'));
