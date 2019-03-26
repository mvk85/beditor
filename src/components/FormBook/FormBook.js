import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import styles from './styles.scss';
import Input from './Fields/Input';
import SaveButton from '../commons/buttons/SaveButton/SaveButton';
import { BOOK_TITLE_FIELD } from '../../consts/book';

class FormBook extends React.Component {
  render() {
    const {
      handleSubmit,
      invalid,
      isEdit,
    } = this.props;
    const title = isEdit ? 'Редактировать книгу' : 'Добавить книгу';

    return (
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <div className={styles.title}>
            {title}
          </div>
          <Field
            name={BOOK_TITLE_FIELD}
            component={Input}
            type="text"
            label="Заголовок"
            classContainer={styles.field}
          />
        </form>
        <SaveButton
          handleClick={handleSubmit}
          disabled={invalid}
          classContainer={styles.save}
        />
      </div>
    );
  }
}

FormBook.propTypes = {
  handleSubmit: PropTypes.func,
  invalid: PropTypes.bool,
  isEdit: PropTypes.bool,
};

export default FormBook;
