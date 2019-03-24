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
  // how firebase works =>  basically on refs and set
  // whatever we pass in refs => if found in database -> it goes inside it
  //                             not found in database -> created new one for us
  // refs => just go and read the args in database
  // set  =>  sets the values in the database
   


class Usurvey extends Component {
    nameSubmit(event){
        var studentName = this.refs.name.value;
        console.log(studentName)
        this.setState({studentName : studentName},()=>{
            console.log(this.state)
        }) 
    }
    answerSelected(event){
        // TODO : give answers their value
        let answers = this.state.answers;
        if(event.target.name === 'answer1'){
            answers.answer1 = event.target.value;
        }else if(event.target.name === 'answer2'){
            answers.answer2 = event.target.value;
        }else if(event.target.name === 'answer3'){
            answers.answer3 = event.target.value;
        }
        this.setState({answers : answers}, ()=>{
            console.log(this.state)
        })

    }
    questionSubmit(event){
        this.setState({isSubmitted : true})
        // + is used to create a node inside the database
        firebase.database().ref('/uSurvey/' + this.state.uid).set({
            studentName : this.state.studentName,
            answers : this.state.answers,
        });
        
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
        this.answerSelected = this.answerSelected.bind(this)
        this.questionSubmit =this.questionSubmit.bind(this)
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
            questions = <div>
                    <h2>Here are some quick questions : </h2>
                    <form onSubmit = {this.questionSubmit}>
                     <div className = "card">
                     <label>What kind of courses you like the most: </label><br />
                     <input type="radio" name="answer1" value="Technolgy" onChange={this.answerSelected} />Technology <br />
                     <input type="radio" name="answer1" value="Cinematography" onChange={this.answerSelected} />Cinematography <br />
                     <input type="radio" name="answer1" value="Design" onChange={this.answerSelected} />Design <br />
                     <input type="radio" name="answer1" value="Marketing" onChange={this.answerSelected} />Marketing <br />
                     <input type="radio" name="answer1" value="Legal" onChange={this.answerSelected} />Legal <br />
                     <input type="radio" name="answer1" value="BuisnessAnalysis" onChange={this.answerSelected} />Buisness Analysis <br />
                     <input type="radio" name="answer1" value="Sales" onChange={this.answerSelected} />Sales <br />
                     </div>
                     <div className = "card">
                     <label>You are a: ____________  </label><br />
                     <input type="radio" name="answer2" value="Student" onChange={this.answerSelected} />Student <br />
                     <input type="radio" name="answer2" value="WorkingProfessional" onChange={this.answerSelected} />Working Professional <br />
                     <input type="radio" name="answer2" value="LookingForJob" onChange={this.answerSelected} /> Looking For Job <br />
                     <input type="radio" name="answer2" value="CuriousLearner" onChange={this.answerSelected} />Curious-Learner <br />
                     </div>

                     <div className = "card">
                     <label>Is learning online helpful ?  </label><br />
                     <input type="radio" name="answer3" value="Yes" onChange={this.answerSelected} />Yes <br />
                     <input type="radio" name="answer3" value="No" onChange={this.answerSelected} />No<br />
                     <input type="radio" name="answer3" value="NotSure" onChange={this.answerSelected} />NotSure <br />
                     <input type="radio" name="answer3" value="Probably" onChange={this.answerSelected} />Probably <br />
                      </div>
                      <input className="feedback-button" type="submit" value="Submit" />
                    </form>
            </div>;
           
        } else if( (this.state.studentName !== '') && (this.state.isSubmitted ===true)){
            studentName = <h1> Thanks a lot, {this.state.studentName} for your precious time</h1>
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