import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemBook from './ItemBook';
import styles from './styles.scss';
import AddBook from './AddBook/AddBook';

class ListBooks extends Component {
  render() {
    return (
      <div className={styles.container}>
        <AddBook />
        <ItemBook />
      </div>
    );
  }
}

ListBooks.propTypes = {};

export default ListBooks;
