import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import ListBooks from '../ListBooks';

class RootRouter extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={ListBooks} />
      </Switch>
    );
  }
}

RootRouter.propTypes = {};

export default RootRouter;
