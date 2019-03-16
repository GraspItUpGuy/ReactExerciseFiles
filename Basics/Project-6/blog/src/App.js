import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar'
import Header from './Header'
import Container from './Container'
import Footer from './Footer'

class App extends Component {
     render() {
     return (
      <div>
      <NavBar />
      <Header />
      <Container />
      <Footer />
    </div>
    );
  }
}

export default App;
