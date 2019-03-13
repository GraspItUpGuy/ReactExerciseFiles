import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Home from './Home'
import About from './About'
import Blog from './Blog'
import Contact from './Contact-Me'
import Services from './Services'

import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'

ReactDOM.render(
   <Router>
   <div>
         <ul>
             <li><Link exact to="/home" >Home </Link> </li>
             <li><Link exact to="/services" >Services </Link> </li>
             <li><Link exact to="/blog" >Blog </Link> </li>
             <li><Link exact to="/about" >About </Link> </li>
             <li><Link exact to="/contact" >Contact-Me </Link> </li>      
         </ul>
          {/* just the links over here */}
         <hr />
         <Route exact path="/" component = {Home}/>
         <Route exact path="/services" component = {Services}/>
         <Route exact path="/blog" component = {Blog}/>
         <Route exact path="/about" component = {About}/>
         <Route exact path="/contact" component = {Contact}/>
     </div>
   </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
