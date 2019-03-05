import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Intro from './Intro'
import Outro from './Outo'

class App extends Component {
  render() {
    return (
      <div className="App">
      
      <Header />
      <p>Hey there folks! </p>
      <Intro />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
         
            Learn React

            {
              // this is how we give comments in react => inside the blocks
            }
          </a>
        </header>
        <Outro />
      </div>
    );
  }
}











export default App;