import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import styles from './styles.scss';
import Input from './Fields/Input';

class FormBook extends React.Component {
  render() {
    const {
      handleSubmit, pristine, reset, submitting, classes,
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
      </div>
    );
  }
}

FormBook.propTypes = {};

export default FormBook;
