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
            uid : uuid.v1(),
            // read documentation => uuid npm
            studentName : '',
            answers : {
                answer1 : '',
                answer2 : '',
                answer3 : '',
            },
            isSubmitted : false,
        }
    }
    render(){
       let studentName ;
       let questions;
       if(this.state.studentName === '' && this.state.isSubmitted === false){
           studentName = <div>
               <h1>Hey student, please give us your name :</h1>
               <form>
                   <input type="text" placeholder = "Enter your name" ref = "name" />
               </form>
           </div>
       }

        return(
           <div>
               {studentName}
               ------------------------------------
               {questions}
           </div>
        )
    }
}


export default Usurvey ;
