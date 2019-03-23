import React, { Component } from 'react';
import Header from '../Header/Header';
import RootRouter from '../RootRouter/RootRouter';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <RootRouter />
      </div>
    );
  }
}

export default App;
