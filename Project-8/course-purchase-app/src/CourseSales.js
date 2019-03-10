import React , { Component} from 'react'

class CourseSales extends Component{
    CartTotal(price){
        this.setState({total : this.state.total + price})
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
            return  <Course name ={item.name} price = {item.price} />
        })
        return(
            <div>
           
            </div>
        )
    }
}

class Course extends Component{
    render(){
        return(
            <div>

            </div>
        )
    }
}


export default CourseSales;