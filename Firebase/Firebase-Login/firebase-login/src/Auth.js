import React, { Component } from 'react';
import { firestore } from 'firebase';
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
    LogIn(event){
        const email = this.refs.email.value ;
        this.refs.email.value = ""; 
        const password = this.refs.password.value;
        this.refs.password.value = "";
        console.log(email,password);

        const auth = firebase.auth();
       const promise = auth.signInWithEmailAndPassword(email, password);
       // TODO : Handle  login Promise

       promise.catch(e => {
           var err = e.message;
           console.log(err);
           this.setState({err : err}); 
       })

    };
    LogOut(){};
    SignUp(){};

    constructor(props){
        super(props);
        this.state={
            err : '',
        };
        this.LogIn = this.LogIn.bind(this);
        this.SignUp = this.SignUp.bind(this);
        this.LogOut = this.LogOut.bind(this);
    }
    render(){
        return(
            <div>
            
            <input id="email" ref="email" type="email" placeholder="Enter your Email" /><br />
            <input id="password" ref="password" type="password" placeholder="Enter your Password" /><br />
            <p>{this.state.err}</p>
            <button onClick={this.LogIn}>Log-In</button>
            <button onClick={this.SignUp}>Sign-Up</button>
            <button onClick={this.LogOut}>Log-Out</button>

            </div>
        )
    }
}
export default Auth;