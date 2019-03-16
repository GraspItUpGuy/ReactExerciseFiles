import React, { Component } from 'react'
const firebase = require('firebase')
const uuid = require('uuid')

// initializing the firebase => copied from the  docs
var config = {
    apiKey: "AIzaSyD0at8LzGZR2BKgB__yrTvrpXV_OWDeZ38",
    authDomain: "u-survey-ab057.firebaseapp.com",
    databaseURL: "https://u-survey-ab057.firebaseio.com",
    projectId: "u-survey-ab057",
    storageBucket: "u-survey-ab057.appspot.com",
    messagingSenderId: "705561358082"
  };
  firebase.initializeApp(config);
  // firebase initialisation ends
  // API keys exposed but it will not create any problem as it is just a test app




class Usurvey extends Component{
    constructor(props){
        super(props);

        this.state ={
            uid : uuid.v1()
        }
    }
    render(){
        return(
            <h1> I am U-Survey Component.  Nice to meet you !!!</h1>
        )
    }
}


export default Usurvey ;

