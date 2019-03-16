import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
        <Parent />
      </div>
    );
  }
}


class Parent extends Component{
    render(){
        return(
            <div>
            <h1>Just some random information here</h1>
            <Cars msg="Cool cars are present here" model="2018" condition="Good" />
            </div>
        )
    }
}

// Parent.defaultProps = {
//     cars : [ "i10", "Alto", "Ciaz", "Creta", "Scorpio", "City"]
// }

class Cars extends Component{
    render(){
        return(
            <div>
            <h3>information about cars is here</h3>
             <p>{this.props.msg}</p>
             <p>{this.props.model}</p>
             <p>{this.props.condition}</p>
            </div>
        )
    }
}


export default App;