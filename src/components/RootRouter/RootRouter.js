import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ListBooks from '../ListBooks';
import FormBook from '../FormBook';
import styles from './styles.scss';

class RootRouter extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Switch>
          <Route path="/" exact component={ListBooks} />
          <Route path="/book/:id" component={FormBook} />
          <Route path="/book" component={FormBook} />
        </Switch>
      </div>
    );
  }
}

export default RootRouter;
