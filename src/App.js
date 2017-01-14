import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import StreamersContainer from './components/StreamersContainer'



class App extends Component {
  constructor (props) {
    super(props)
    this.state = {logo: "https://www.reactiongifs.com/r/mgc.gif"}
  }

  render() {
    return (
      <div className="App">
        {/*
        <div className="App-header">
          <img src={userIcon} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        */}
        <img src={this.state.logo} alt='some pic' /> 
        <StreamersContainer />
      </div>
    )
  }
}

export default App
