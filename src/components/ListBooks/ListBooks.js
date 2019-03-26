import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemBook from './ItemBook';
import styles from './styles.scss';
import AddBook from './AddBook/AddBook';
import FilterList from './SortList';
import { isEmpty, sortByKeyBook } from '../../utils/data';
import { BOOK_TITLE_FIELD, BOOK_YEAR_FIELD } from '../../consts/book';

class ListBooks extends Component {
  componentDidMount() {
    const { fetchBooks } = this.props;

    fetchBooks();
  }

  sortData = () => {
    const {
      data,
      sort,
    } = this.props;

    if (isEmpty(sort)) {
      return [];
    }

    const { title, year } = sort;
    const arData = Object.keys(data).map(key => data[key]);

    if (title.active) {
      arData.sort(sortByKeyBook(BOOK_TITLE_FIELD, title.isDown));
    } else if (year.active) {
      arData.sort(sortByKeyBook(BOOK_YEAR_FIELD, year.isDown));
    }

    return arData;
  };

  render() {
    const {
      // data,
      deleteBookAction,
    } = this.props;
    const data = this.sortData();

    return (
      <div className={styles.container}>
        <AddBook />
        <FilterList />
        {data.map(item => (
          <ItemBook
            key={item.id}
            item={item}
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
  sort: PropTypes.object,
};

export default ListBooks;
