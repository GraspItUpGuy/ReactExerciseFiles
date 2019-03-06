import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types'

class App extends Component {
  render() {
    return (
      <div className="App">
       
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h3>prop number is : {this.props.propNumber}</h3>
        <h3>prop number is : {this.props.propString}</h3>
        <h3>prop number is : {this.props.propObject.obj1}</h3>
       
        </header>
        <Parent />
      </div>
    );
  }
}

// PropTypes now has been included into a seperate package in npm => 'prop-types'
// install it seperately from npmjs.org

App.propTypes = {
  propObject: PropTypes.object,
  propString: PropTypes.string,
  propNumber: PropTypes.number
}

App.defaultProps = {
  propNumber: 3,
  propString: "THis is prop string",
  propObject: {
    obj1: "I am obj 1",
    obj2: "I am obj 2",
    obj3: "I am obj 3"
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