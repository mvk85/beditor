import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddButton from '../commons/buttons/AddButton/AddButton';
import ItemBook from './ItemBook';
import styles from './styles.scss';

class ListBooks extends Component {
  render() {
    return (
      <div className={styles.container}>
        <AddButton />
        <ItemBook />
      </div>
    );
  }
}

ListBooks.propTypes = {};

export default ListBooks;
