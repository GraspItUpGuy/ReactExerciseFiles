import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Usurvey from './USurvey'



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Usurvey App</p>
        </header>
       
       <Usurvey />
      </div>
    );
  }
}

export default App;
