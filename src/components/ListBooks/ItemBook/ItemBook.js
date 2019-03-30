import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import styles from './styles.scss';
import Specification from './Specification';
import ChangeBook from './ChangeBook';
import {
  BOOK_COUNT_CAPTION_FIELD,
  BOOK_ISBN_CAPTION_FIELD,
  BOOK_TITLE_CAPTION_FIELD,
  BOOK_YEAR_CAPTION_FIELD,
} from '../../../consts/book';

class ItemBook extends PureComponent {
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
    } = data;

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
            caption={BOOK_COUNT_CAPTION_FIELD}
            text={count}
          />
          <Specification
            caption={BOOK_YEAR_CAPTION_FIELD}
            text={year}
          />
          <Specification
            caption={BOOK_ISBN_CAPTION_FIELD}
            text={isbn}
          />
          {/* <Specification caption="список авторов" text="Автор 1, автор 2" />
          <Specification caption="количество страниц" text="500" />
          <Specification caption="название издательства" text="Дрофа" />
          <Specification caption="год публикации" text="1985" />
          <Specification caption="дата выхода в тираж" text="01.01.1985" />
          <Specification caption="ISBN" text="16516546464654" />
          <Specification caption="изображение" text="image" /> */}
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
