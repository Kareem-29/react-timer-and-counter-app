import './App.css';
import React, { Component } from 'react'




class App extends Component {
  constructor(props) {
    super(props)
    this.handleClick= this.handleClick.bind(this)
    this.ResetTimer= this.ResetTimer.bind(this)
    this.IncCounter= this.IncCounter.bind(this)
    this.state = {
      hour:0,
      min:0,
      sec:0,
      counter:0,
  }
}

/*React componant lifecycle phases are 1-mounting{1-1:constructer 1-2:render 1-3:componentDidMount}
2-updating{2-1:render 2-2:componentDidUpdate}
3-Unmounting{3-1: componentWillUnmount} to remove the componant from the dom*/
componentDidMount(){
  window.setTimeout(this.handleClick,1000)
}

componentDidUpdate(){
  if(this.state.sec>59){
    this.setState({
      min:this.state.min+1,
      sec:0
    })
  }

  if(this.state.min>59){
    this.setState({
      hour:this.state.hour+1,
      min:0
    })
  }

  if(this.state.hour>12){
    this.setState({
      hour:0,
      min:0,
      sec:0
    })
  }
}
//binding 
handleClick(){
  this.setState({
    sec: this.state.sec +1
  })
  window.setTimeout(this.handleClick,1000)
}

ResetTimer(){
  this.setState({
    hour:0,
    min:0,
    sec:0
  })
}

IncCounter(){
  this.setState({counter: this.state.counter +1})
}
//no need to bind the arrow function
DecCounter=()=>{
  if(this.state.counter>0){
    this.setState({counter: this.state.counter-1})
    }
}

ResetCounter=()=>{
  this.setState({counter: 0})
}
  render() {
    return (
      <div className='container'>
      <div className='Timer-container'>
      <h1 className='Timer'>Timer: {this.state.hour}:{this.state.min}:{this.state.sec}</h1>
      <button onClick={this.ResetTimer}>Reset</button>
      </div>
      <h1>Counter:</h1> 
      <div className="counter">
      <button id='increment-btn' onClick={this.IncCounter}>+</button>
      <span>{this.state.counter} </span>
      <button id='decrement-btn' onClick={this.DecCounter}>-</button>
      </div>
      <button id='reset' onClick={this.ResetCounter}>Reset</button>

      </div>

    )
  }
}


export default App;
