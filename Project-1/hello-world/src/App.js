import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
          </a>
        </header>
        
      </div>
    );
  }
}

export default App;


class Header extends Component {
  render(){
    return(
      <div className = "App-Header">
          
          <p>Welcome to react in the Header class </p>
      </div>
    )
  }

}

class Intro extends Component {
  render(){
    return(
      <div>
        <p>
           Welcome back to react app in the intro class.
          </p>
      </div>
    )
  }
  
}