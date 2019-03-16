import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'

class Four extends Component{
    render(){
        return(
            <div>
              <p>I am Four component</p>
              <ul>
                  <li> <Link to "/Four/:123">FourDotOne </Link></li>
              </ul>
              {this.props.children}
            </div>
            
            
        )
    }
}

class FourDotOne extends Component{
    render(){
        return(
            <div>
<p>this is the page four Dot One</p>
            </div>
        )
    }

export default Four ;
export default FourDotOne;