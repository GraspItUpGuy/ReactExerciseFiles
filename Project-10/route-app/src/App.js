import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Link from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>This app is running slick AF !!!</p>
        </header>
        <hr />
        <div>
        <ul>
        <li><Link to="/ONE">ONE</Link></li>
        <li><Link to="/TWO">TWO</Link></li>
        <li><Link to="/THREE">THREE</Link></li>
        <li><Link to="/FOUR">FOUR</Link></li>
        </ul>
        </div>
      </div>
    );
  }
}

export default App;
