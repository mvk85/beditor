import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import uuid from 'uuid/v4';
import InputField from './Input';
import styles from './styles.scss';

class ListAuthor extends PureComponent {
  static defaultProps = {
    input: {
      value: [],
    },
  };

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
    const errorText = (touched && error) || '';

    return (
      <div className={classContainer}>
        <div className={styles.label}>{label}</div>
        <div>
          {
            value && value.map(field => (
              <div className={styles.item} key={field.id}>
                <InputField
                  value={field.name}
                  handleChange={this.handleChange}
                  classContainer={styles.fieldFirst}
                  label="Имя автора"
                  isError={touched && invalid}
                  errorText={errorText}
                  type={type}
                  field={field}
                  isName
                />
                <InputField
                  value={field.surname}
                  handleChange={this.handleChange}
                  classContainer={styles.field}
                  label="Фамилия автора"
                  isError={touched && invalid}
                  errorText={errorText}
                  type={type}
                  field={field}
                  isSurname
                />
              </div>
            ))
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
};

export default ListAuthor;
