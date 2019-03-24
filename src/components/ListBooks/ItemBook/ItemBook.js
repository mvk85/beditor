import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import styles from './styles.scss';
import Specification from './Specification';
import ChangeBook from './ChangeBook';

class ItemBook extends PureComponent {
  render() {
    const {
      item: { data, id },
      deleteBook,
    } = this.props;

    const {
      title,
    } = data;

    return (
      <div className={styles.card}>
        <Paper className={styles.paper}>
          <ChangeBook
            idBook={id}
            title={title}
            deleteBook={deleteBook}
          />
          <Specification caption="заголовок" text={title} />
          {/* <Specification caption="список авторов" text="Автор 1, автор 2" />
          <Specification caption="количество страниц" text="500" />
          <Specification caption="название издательства" text="Дрофа" />
          <Specification caption="год публикации" text="1985" />
          <Specification caption="дата выхода в тираж" text="01.01.1985" />
          <Specification caption="ISBN" text="16516546464654" />
          <Specification caption="изображение" text="image" />*/}
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
