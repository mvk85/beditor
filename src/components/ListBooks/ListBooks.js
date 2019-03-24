import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemBook from './ItemBook';
import styles from './styles.scss';
import AddBook from './AddBook/AddBook';

class ListBooks extends Component {
  componentDidMount() {
    const { fetchBooks } = this.props;

    fetchBooks();
  }

  render() {
    const {
      data,
      deleteBookAction,
    } = this.props;

    return (
      <div className={styles.container}>
        <AddBook />
        {Object.keys(data).map(key => (
          <ItemBook
            key={data[key].id}
            item={data[key]}
            deleteBook={deleteBookAction}
          />
        ))}
      </div>
    );
  }
}

ListBooks.propTypes = {
  fetchBooks: PropTypes.func,
  data: PropTypes.object,
  deleteBookAction: PropTypes.func,
};

export default ListBooks;
