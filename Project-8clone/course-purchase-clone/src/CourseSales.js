import React, {Component} from 'react'

class CourseSales extends Component{

     CartTotal(price){
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
            return "to be filled with course class"
        })
        return(
            <div>
            <h2>Buy Courses here : </h2>


            </div>
        )
    }
}


export default CourseSales;