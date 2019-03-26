import React, { Component } from 'react';
var firebase = require('firebase');
var uid =  require('uuid');

// Initialize Firebase
var config = {
    apiKey: "AIzaSyD0at8LzGZR2BKgB__yrTvrpXV_OWDeZ38",
    authDomain: "u-survey-ab057.firebaseapp.com",
    databaseURL: "https://u-survey-ab057.firebaseio.com",
    projectId: "u-survey-ab057",
    storageBucket: "u-survey-ab057.appspot.com",
    messagingSenderId: "705561358082"
  };
  firebase.initializeApp(config);


class Test extends Component{
    render(){
        return(
            <div>
            <form>
                <input type="text" placeholder="enter name" ref="name"/> <br />
                
                <input type="submit" name="submit" value="submit"/>
            </form>
            </div>
        )
    }
}

export default Test;