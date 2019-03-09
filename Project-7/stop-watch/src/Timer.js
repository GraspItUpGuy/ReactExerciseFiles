import React, { Component }  from 'react' ;

class Timer extends Component{
    componentDidMount(){
        // console.log('aaaaa')
       this.timer = setInterval(this.ticker, 1000)
    }
    ticker(){
        // console.log('bbbbb')
        this.setState({clock : new Date() - this.props.start})
    }
    constructor (props){
        super(props)
        // console.log('ccccc')
        this.state = {
            
            clock : 0
        }
        this.ticker = this.ticker.bind(this)
    }
   
    render(){
        var clock = Math.round(this.state.clock / 1000)
        return(
            <div>
              <p>You have been in this site since : </p> <br />
              <span> {clock}</span>
              <p> Seconds.</p>
             
            </div>
        )
    }
}
export default Timer;