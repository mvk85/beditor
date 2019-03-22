import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import ListBooks from '../ListBooks';
import FormBook from '../FormBook/FormBook';

class RootRouter extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={ListBooks} />
        <Route path="/book" component={FormBook} />
      </Switch>
    );
  }
}

RootRouter.propTypes = {};

export default RootRouter;
