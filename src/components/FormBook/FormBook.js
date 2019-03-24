import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import styles from './styles.scss';
import Input from './Fields/Input';
import SaveButton from '../commons/buttons/SaveButton/SaveButton';

class FormBook extends React.Component {
  render() {
    const {
      handleSubmit,
      invalid,
    } = this.props;

    return (
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <div className={styles.title}>Добавить Книгу</div>
          <Field
            name="title"
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
};

export default FormBook;
