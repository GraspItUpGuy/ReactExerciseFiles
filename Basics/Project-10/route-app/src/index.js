import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ONE from './ONE'
import TWO from './TWO'
import THREE from './THREE'
import FOUR from './FOUR'

import {
       Router,
      Route, Link } from "react-router-dom"

      import history from './history'
ReactDOM.render(
       <Router history = {history }> 
        <Route path = "/" component = {App}></Route>
         >
         
         <Route path = "/ONE" component = {ONE}></Route> 
         <Route path = "/TWO" component = {TWO}></Route>
          <Route path = "/THREE" component = {THREE}></Route>
          <Route path = "/FOUR" component = {FOUR}></Route>
         
</Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// this is the olc convention => new convention in Project-9



