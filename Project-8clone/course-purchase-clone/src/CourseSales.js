import React, {Component} from 'react'

class CourseSales extends Component{

     CartTotal(price){
        console.log('CartTotal function working')
         this.setState = { CartTotal : this.CartTotal + price}
     }

    constructor(props){
        super(props);
     this.setState = { 
         CartTotal  : 0,
     }
     this.CartTotal = this.CartTotal.bind(this)
    }


    render(){
        console.log(this.props.courseName)
        var courseName = this.props.courseName.map((course , i)=>{
            return <Course name ={courseName.name}  price = {courseName.price}
                     CartTotal = {this.CartTotal} active={this.state.active}
            />
        })
        return(
            <div>
            <h2>Buy Courses here : </h2>
                 {courseName}
                 <p>total : {this.CartTotal} </p>
           
            </div>
        )
    }
}

class Course extends Component { 
    
    Clicker(){
        console.log('clicker function working')
        var active = !(this.state.active)
        this.setState={ active : active}
        this.props.CartTotal(active ? this.props.price : -this.props.price)

    }
     

    constructor(props){
        super(props)

        this.setState = { 
            active : true,
        }
        this.Clicker = this.Clicker.bind(this)
    }
    
    render(){
        return(
            <div>
           <p onClick = {this.Clicker}> {this.props.name} <br/> {this.props.price}</p>
            </div>
        )
    }
}




export default CourseSales;