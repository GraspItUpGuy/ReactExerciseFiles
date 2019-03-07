import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Component Life Cycle</p>
        </header>
        <Body />
      </div>
    );
  }
}


class Body extends Component{
  constructor(props){
    super(props);

    this.state = {
      rand : 0,
    };
    this.getRandomNumber = this.getRandomNumber.bind(this)
  }
  getRandomNumber(){
    // console.log('random number called')
    this.setState({ rand :Math.floor( Math.random() * 10 ) + 1})
  }
  render(){
    return(
      <div>
           <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <button onClick={this.getRandomNumber} >Generate a random number</button>
          <Numbers myNumber={this.state.rand} />
       </div>   
    )
  }
}

class Numbers extends Component{
  render(){
    return(
      <div>
      <br />
          {this.props.myNumber}
      </div>
    )
  }
}

export default App;
