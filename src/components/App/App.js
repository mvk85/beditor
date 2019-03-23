import React, { Component } from 'react';
import Header from '../Header/Header';
import RootRouter from '../RootRouter/RootRouter';
import styles from './styles.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header />
        <RootRouter />
      </div>
    );
  }
}

export default App;
