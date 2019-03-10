import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CourseSales from './CourseSales';

// import PropTypes from 'prop-types'


class App extends Component {
  render() {
    let courses = [
      {name : 'Full Stack Web-Development using Node.js', price : 799},
      {name : 'Complete Front-End Development ', price : 699},
      {name : 'Git and Github ', price : 999},
      {name : 'React JS BootCamp', price : 1299},
      {name : 'React Native BootCamp', price : 899},
      {name : 'Data Structures and Algorithm', price : 1199},
      {name : 'Machine Learning', price : 1599}
    ];
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the Course Sales App</h2>
        </div>
        <CourseSales items={courses}/>
      </div>
      
    );
  }
}

export default App;
