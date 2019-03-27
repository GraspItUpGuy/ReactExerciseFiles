import React, { Component } from 'react';
var firebase = require('firebase')

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCn8n5tWJfgeNPmEjMTUplKlRCVSl3D4dE",
    authDomain: "fir-authproject-5a13d.firebaseapp.com",
    databaseURL: "https://fir-authproject-5a13d.firebaseio.com",
    projectId: "fir-authproject-5a13d",
    storageBucket: "",
    messagingSenderId: "756426620627"
  };
  firebase.initializeApp(config);



class Auth extends Component{
    render(){
        return(
            <div>
                <h1>I am Auth Component</h1>
            </div>
        )
    }
}
export default Auth;