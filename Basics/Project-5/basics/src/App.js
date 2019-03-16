import React , {Component} from 'react';
import ReactDOM from 'react-dom';



class App extends Component{
    render(){
        return(
            // JSX goes here
          <div>
              Cool React App
          </div>  
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))