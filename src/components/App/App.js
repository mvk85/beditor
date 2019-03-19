import React, { Component } from 'react';
import './App.css';
import Header from "../Header/Header";
import RootRouter from "../RootRouter/RootRouter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <RootRouter/>
      </div>
    );
  }
}

export default App;
