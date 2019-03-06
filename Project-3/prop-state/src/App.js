import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       
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
        <Parent />
      </div>
    );
  }
}

class Parent extends Component{
  render(){
    return(
      <div>
        <h2>Just some info</h2>
        <Cars  msg = "Cars are very very cool" model= "2343235" coolCars = {this.props.cars}/>
      </div>
    )
  }
}

Parent.defaultProps = {
  cars : ["BMW " , "AUDI " , "TOYOTA ", "CITY "] 
}

class Cars extends Component{
  render(){
    console.log(this.props)
    return(
      <h3>I am from cars component
      <p>{this.props.msg}</p>
      <p> {this.props.coolCars}</p> 
      <p>{this.props.model} </p>
      </h3>
      
    )
  }
}
export default App;