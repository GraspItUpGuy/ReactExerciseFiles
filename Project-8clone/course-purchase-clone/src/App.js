import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CourseSales from './CourseSales'


class App extends Component {
  render() {
    let courses = [
      { name : 'Front End  Web-Development' , price : 1299},
      { name : 'Back End Web-Development using Node.js' , price : 1199},
      { name : 'React FrameWork Development' , price : 1399},
      { name : 'Git and Github' , price : 1499},
      { name : 'Java and Data-Structures' , price : 1599},
      { name : 'Android development' , price : 1699}
    ]
    console.log(courses)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <h1>Welcome to the react Course-purchase-App</h1>
        </header>

        <CourseSales courseName = {courses} />
       
      </div>
    );
  }
}

export default App;
