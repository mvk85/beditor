import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import styles from './styles.scss';
import Specification from './Specification';
import ChangeBook from './ChangeBook';
import {
  BOOK_COUNT_CAPTION_FIELD, BOOK_DATE_CAPTION_FIELD, BOOK_FILE_CAPTION_FIELD,
  BOOK_ISBN_CAPTION_FIELD, BOOK_LIST_AUTHORS_CAPTION_FIELD, BOOK_PUBLISHING_CAPTION_FIELD,
  BOOK_TITLE_CAPTION_FIELD,
  BOOK_YEAR_CAPTION_FIELD,
} from '../../../consts/book';
import { getFormatDateForBook } from '../../../utils/date';
import ViewImage from './ViewImage';

class ItemBook extends PureComponent {
  prepareAuthors = () => {
    const { item: { data: { authors } } } = this.props;
    let result = '';

    if (!authors) {
      return result;
    }

    authors.forEach((author) => {
      if (!result) {
        result = `${author.name} ${author.surname}`;
      } else {
        result = `${result}, ${author.name} ${author.surname}`;
      }
    });

    return result;
  };

  render() {
    const {
      item: { data, id },
      deleteBook,
    } = this.props;

    const {
      title,
      year,
      isbn,
      count,
      date,
      file,
      publishing,
    } = data;
    const dateFormat = date && getFormatDateForBook(date);
    const authorsFormatting = this.prepareAuthors();

    return (
      <div className={styles.card}>
        <Paper className={styles.paper}>
          <ChangeBook
            idBook={id}
            title={title}
            deleteBook={deleteBook}
          />
          <Specification
            caption={BOOK_TITLE_CAPTION_FIELD}
            text={title}
          />
          <Specification
            caption={BOOK_LIST_AUTHORS_CAPTION_FIELD}
            text={authorsFormatting}
          />
          <Specification
            caption={BOOK_COUNT_CAPTION_FIELD}
            text={count}
          />
          <Specification
            caption={BOOK_PUBLISHING_CAPTION_FIELD}
            text={publishing}
          />
          <Specification
            caption={BOOK_YEAR_CAPTION_FIELD}
            text={year}
          />
          <Specification
            caption={BOOK_DATE_CAPTION_FIELD}
            text={dateFormat}
          />
          <Specification
            caption={BOOK_ISBN_CAPTION_FIELD}
            text={isbn}
          />
          <ViewImage
            caption={BOOK_FILE_CAPTION_FIELD}
            src={file}
          />
        </Paper>
      </div>
    );
  }
}

ItemBook.propTypes = {
  item: PropTypes.shape({
    data: PropTypes.object,
    id: PropTypes.string,
  }),
  deleteBook: PropTypes.func,
};

export default ItemBook;
