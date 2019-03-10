import React , { Component} from 'react'
// import PropTypes from 'prop-types'

class CourseSales extends Component{
    CartTotal(price){
        this.setState = {total : this.total + price}
    }
     constructor(props){
         super(props)

         this.setState ={
            total : 0 , 
         }
         this.CartTotal = this.CartTotal.bind(this)
     }
    render(){
        console.log(this.props.items)
        var courses = this.props.items.map((item , i)=>{
            return  <Course name ={item.name} price = {item.price}  key = {i}
                      CartTotal ={this.CartTotal} active = {item.active} />
        })
        return(
            <div>
           
               <h1>Buy courses here</h1>
               <div className = "courses">
                   {courses}
                   <p className = "total">total : {this.total}</p>
               </div>
               
               
            </div>
        )
    }
}

class Course extends Component{
    clicker(){
        console.log('clicker function')
        var active = !this.state.active
        this.setState = {active : active}
        this.props.CartTotal(active ? this.props.price  : -this.props.price)
    }
    constructor(props){
        super(props);

        this.state = {
            active : false
        }
        this.clicker = this.clicker.bind(this)
    }
    render(){
        return(
            <div>
              <p className="this.state.active ? 'active' : '' " onClick = {this.clicker }>
                     {this.props.name} <b>{this.props.price}</b></p> 
            </div>
        )
    }
}


export default CourseSales;