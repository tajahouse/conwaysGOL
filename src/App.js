import React, { useState } from 'react';
import './App.css';
import Grid from './components/Grid';





class App extends React.Component {
  constructor(){
    super();
    this.state = {
      generation:0
    }
  }

  render(){
    return (
      <div className="App">
        <h1>Welcome to Conway's Game of Life. Enjoy the Science Before You</h1>
        <Grid
        />
  
      </div>
    );
  }
}

export default App;
