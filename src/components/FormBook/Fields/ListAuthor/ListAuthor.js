import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import uuid from 'uuid/v4';
import InputField from './Input';
import styles from './styles.scss';
import { isEmpty } from '../../../../utils/data';

class ListAuthor extends PureComponent {
  static defaultProps = {
    input: {
      value: [],
    },
  };

  componentDidMount() {
    const { input: { onChange, value }, isEdit } = this.props;

    if (isEmpty(value) && !isEdit) {
      const newAuthor = this.getEmptyAuthor();
      const newValue = [newAuthor];

      onChange(newValue);
    }
  }

  getEmptyAuthor = () => ({
    id: uuid(),
    name: '',
    surname: '',
  });

  handleChange = (newAuthor) => {
    const { input: { onChange, value } } = this.props;
    const newValue = value.map((field) => {
      if (field.id === newAuthor.id) {
        return newAuthor;
      }

      return field;
    });

    onChange(newValue);
  };

  addAuthor = () => {
    const {
      input: { value, onChange },
    } = this.props;
    const newAuthor = this.getEmptyAuthor();
    const newValue = [...value, newAuthor];

    onChange(newValue);
  };

  render() {
    const {
      input: { value },
      meta: { error, invalid, touched },
      label,
      classContainer,
      type,
    } = this.props;
    let errorRequired;
    const arErrorData = error && error.data;
    const errorData = {};

    if (!isEmpty(arErrorData)) {
      arErrorData.forEach(errorItem => errorData[errorItem.id] = { ...errorItem });
    }

    return (
      <div className={classContainer}>
        <div className={styles.label}>{label}</div>
        <div>
          {
            value && value.map((field, index) => {
              let errorItem = '';
              let errorName = '';
              let errorSurname = '';
              let isErrorName = false;
              let isErrorSurname = false;

              if (index === 0) {
                errorRequired = (touched && error && error.errorRequired) || '';
                isErrorName = touched && invalid && Boolean(errorRequired);
                isErrorSurname = touched && invalid && Boolean(errorRequired);
              }

              if (!isEmpty(arErrorData)) {
                errorItem = errorData[field.id];
                errorName = errorItem && errorItem.name;
                errorSurname = errorItem && errorItem.surname;
                isErrorName = (touched && invalid && Boolean(errorName)) || false;
                isErrorSurname = (touched && invalid && Boolean(errorSurname)) || false;
              }

              return (
                <div className={styles.item} key={field.id}>
                  <InputField
                    value={field.name}
                    handleChange={this.handleChange}
                    classContainer={styles.fieldFirst}
                    label="Имя автора"
                    isError={isErrorName}
                    errorText={errorRequired || errorName}
                    type={type}
                    field={field}
                    isName
                  />
                  <InputField
                    value={field.surname}
                    handleChange={this.handleChange}
                    classContainer={styles.field}
                    label="Фамилия автора"
                    isError={isErrorSurname}
                    errorText={errorRequired || errorSurname}
                    type={type}
                    field={field}
                    isSurname
                  />
                </div>
              );
            })
          }
        </div>
        <div className={styles.add}>
          <Button
            variant="contained"
            color="primary"
            onClick={this.addAuthor}
          >
            Добавить автора
          </Button>
        </div>
      </div>
    );
  }
}

ListAuthor.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  label: PropTypes.string,
  classContainer: PropTypes.string,
  type: PropTypes.string,
  isEdit: PropTypes.bool,
};

export default ListAuthor;
