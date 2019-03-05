import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
     this.thename = " amma "
    this.state = {};
  }



  sayHello(name){
    return  "Hello " + name
  }
  render() {
    const myName =  "Sammy"
    return (
      <div className="App">
       <h2> Just some sample data : {this.sayHello("Sammy ") + myName + this.thename +  " Singh"} </h2>
      </div>
    );
  }
}

export default App;
