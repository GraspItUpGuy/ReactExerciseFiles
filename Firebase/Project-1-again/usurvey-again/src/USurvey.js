import React, { Component } from 'react';

//var firebase = require('firebase');
const firebase = require('firebase/app');
var uuid  = require('uuid');

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCI0dbx4_Na9TtfnNJINBK0CDovEQcawXM",
    authDomain: "survey-app-bf816.firebaseapp.com",
    databaseURL: "https://survey-app-bf816.firebaseio.com",
    projectId: "survey-app-bf816",
    storageBucket: "survey-app-bf816.appspot.com",
    messagingSenderId: "623443004699"
  };
  firebase.initializeApp(config);

class Usurvey extends Component{
    nameSubmit(event){
        console.log('name submitted');
        var studentName = this.refs.name.value;
        this.setState = ({ studentName : studentName},()=>{
            console.log( this.state.studentName );
        });
       
    }
    constructor(props){
        super(props);
        this.state = { 
            uid : uuid.v1(),
            studentName : "",
            answers : {
                answer1 : "",
                answer2 : "",
                answer3 : "",
            },
            isSubmitted : false,
        };
        this.nameSubmit = this.nameSubmit.bind(this);
    }
    render(){
        var studentName;
        var questions;
        if(this.state.studentName === ""  && this.state.isSubmitted ===false){
            studentName = <div>
                <h1>Help us with a  quick survey</h1>
                <form onSubmit={this.nameSubmit}>
                    <input  className="nammy" type="text" placeholder="enter your name" refs="name" /><br />
                    
                     
                </form>
            </div>
        }
        return(
            <div>
            {studentName}
            _______________________
            {questions}
            </div>
        );
    }
}
export default Usurvey;