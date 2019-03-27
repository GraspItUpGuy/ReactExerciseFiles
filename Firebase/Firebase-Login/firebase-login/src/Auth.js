import React, { Component } from 'react';
import { firestore } from 'firebase';
var firebase = require('firebase')

// Initialize Firebase => from documentation
var config = {
    // exposed API keys =>  db to be deleted after the project
    // hence exposed keys won't create a problem eventually
    apiKey: "AIzaSyCn8n5tWJfgeNPmEjMTUplKlRCVSl3D4dE",
    authDomain: "fir-authproject-5a13d.firebaseapp.com",
    databaseURL: "https://fir-authproject-5a13d.firebaseio.com",
    projectId: "fir-authproject-5a13d",
    storageBucket: "",
    messagingSenderId: "756426620627"
  };
  firebase.initializeApp(config);
  // Initialize Firebase ends



class Auth extends Component{
    // my functions

    // function to handle LogIn Calls
    LogIn(event){
        // setting state and values
        const email = this.refs.email.value ;
        this.refs.email.value = ""; 
        const password = this.refs.password.value;
        this.refs.password.value = "";
        console.log(email,password);

        // setting firebase auth
        const auth = firebase.auth();

        // SignIn metods return a promise => needs catch and try
       const promise = auth.signInWithEmailAndPassword(email, password);
       // TODO : Handle  login Promise
        
       // db connections error messages
       promise.catch(e => {
           var err = e.message;
           console.log(err);
           this.setState({err : err}); 
       })

    }; // end of LogIn Function

    // function to handle  SignUp Calls
    SignUp(){};
    // end of SignUp Function

    // function to handle LogOut calls
    LogOut(){};
    // end of LogOut Functio
    
      
// my functions end

    constructor(props){
        super(props);
        this.state={
            err : '',
        };

        // binding the  functions
        this.LogIn = this.LogIn.bind(this);
        this.SignUp = this.SignUp.bind(this);
        this.LogOut = this.LogOut.bind(this);
    }
    render(){
        return(
            <div>
            {/* landing page  form  */}
            <input id="email" ref="email" type="email" placeholder="Enter your Email" /><br />
            <input id="password" ref="password" type="password" placeholder="Enter your Password" /><br />
            
            <p>{this.state.err}</p> // prints the error message => promise => inside LogIn function
            <button onClick={this.LogIn}>Log-In</button> // button click events
            <button onClick={this.SignUp}>Sign-Up</button>// button click events
            <button onClick={this.LogOut}>Log-Out</button>// button click events

            </div>
        )
    }
}
export default Auth;