import React , { Component } from 'react'
let firebase = require('firebase');
var uuid = require('uuid')

// Initialize Firebase => from documentation
var config = {
    apiKey: "AIzaSyD0at8LzGZR2BKgB__yrTvrpXV_OWDeZ38",
    authDomain: "u-survey-ab057.firebaseapp.com",
    databaseURL: "https://u-survey-ab057.firebaseio.com",
    projectId: "u-survey-ab057",
    storageBucket: "u-survey-ab057.appspot.com",
    messagingSenderId: "705561358082"
  };
  firebase.initializeApp(config);


class Usurvey extends Component {
    nameSubmit(event){
        var studentName = this.refs.name.value;
        console.log(studentName)
        this.setState({studentName : studentName},()=>{
            console.log(this.state)
        }) 
    }
    constructor(props){
        super(props);
        this.state = { 
            uid :uuid.v1(),
            studentName : '',
            answers : {
                answer1 : '',
                answer2 : '',
                answer3 : '',
            },
            isSubmitted : false,    // answers submitted => initially false 
        };
        this.nameSubmit = this.nameSubmit.bind(this);
    }
    render(){
        let questions;
        let studentName;

        if((this.state.studentName === '') && (this.state.isSubmitted === false)){
           studentName = <div>
               <h1>Provide us with your details, Student !!!!</h1>
               <form onSubmit={this.nameSubmit}>
                <input className="Nammy" type="text" placeholder="Enter your name here" ref="name" />
               </form>
           </div>;
           questions = null;

        }else if((this.state.studentName!== '') && (this.state.isSubmitted == false)){
           
            studentName = <h1>Welcome to Usurvey , {this.state.studentName}</h1>;
            questions = <p>Some questions here</p>;
           
        }
        return(
            <div>
                
                {studentName}
                ----------------
                {questions}
            </div>
        )
    }
}
export default Usurvey;