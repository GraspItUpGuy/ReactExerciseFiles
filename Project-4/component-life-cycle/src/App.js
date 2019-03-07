import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//State gets updated after the event

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
     //  these methods are automatically called
  componentWillMount(){
    // called when component is about to be mounted
    console.log('componentWillMount is called here')
  }
  componentDidMount(){
    console.log("componentDidMount called here")
  }

componentWillReceiveProps(newProps){
  // called when component is about to recieve a prop
  console.log("componentWillReceiveProps called here")
}

shouldComponentUpdate(newProps , nextState){
  console.log(" shouldComponentUpdate called here")
  return true;
}
componentWillUpdate(newProps , nextState){
   console.log("componentWillUpdate called here")

}
componentDidUpdate(newProps , nextState){
  console.log("componentDidUpdate called here")

}

componentWillUnmount(newProps , nextState){
  console.log("componentWillUnmount called here")

}

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




// order in  which the methods are called

// componentWillMount is called here
//  componentDidMount called here
//  componentWillReceiveProps called here
//   shouldComponentUpdate called here
//  componentWillUpdate called here
//  componentDidUpdate called here