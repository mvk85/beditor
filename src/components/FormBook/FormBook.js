/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import styles from './styles.scss';
import Input from './Fields/Input';
import SaveButton from '../commons/buttons/SaveButton/SaveButton';
import {
  BOOK_COUNT_CAPTION_FIELD,
  BOOK_COUNT_FIELD, BOOK_DATE_CAPTION_FIELD, BOOK_DATE_FIELD,
  BOOK_ISBN_CAPTION_FIELD,
  BOOK_ISBN_FIELD,
  BOOK_TITLE_CAPTION_FIELD, BOOK_TITLE_FIELD, BOOK_YEAR_CAPTION_FIELD, BOOK_YEAR_FIELD,
} from '../../consts/book';

class FormBook extends React.Component {
  onKeyDown = (e) => {
    const { handleSubmit } = this.props;

    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  render() {
    const {
      handleSubmit,
      isEdit,
    } = this.props;
    const title = isEdit ? 'Редактировать книгу' : 'Добавить книгу';

    return (
      <div className={styles.container}>
        <form
          onSubmit={handleSubmit}
          onKeyDown={this.onKeyDown}
        >
          <div className={styles.title}>
            {title}
          </div>
          <Field
            name={BOOK_TITLE_FIELD}
            component={Input}
            type="text"
            label={BOOK_TITLE_CAPTION_FIELD}
            classContainer={styles.field}
          />
          <Field
            name={BOOK_COUNT_FIELD}
            component={Input}
            type="number"
            label={BOOK_COUNT_CAPTION_FIELD}
            classContainer={styles.field}
          />
          <Field
            name={BOOK_YEAR_FIELD}
            component={Input}
            type="number"
            label={BOOK_YEAR_CAPTION_FIELD}
            classContainer={styles.field}
          />
          <Field
            name={BOOK_ISBN_FIELD}
            component={Input}
            type="text"
            label={BOOK_ISBN_CAPTION_FIELD}
            classContainer={styles.field}
          />
          <Field
            name={BOOK_DATE_FIELD}
            component={Input}
            type="date"
            label={BOOK_DATE_CAPTION_FIELD}
            classContainer={styles.field}
          />
        </form>
        <SaveButton
          handleClick={handleSubmit}
          classContainer={styles.save}
        />
      </div>
    );
  }
}

FormBook.propTypes = {
  handleSubmit: PropTypes.func,
  isEdit: PropTypes.bool,
};

export default FormBook;
