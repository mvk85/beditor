import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  FormControl, InputLabel, FormHelperText, Input,
} from '@material-ui/core';

class InputField extends PureComponent {
  static defaultProps = {
    value: '',
    classContainer: '',
  };

  handleChange = (event) => {
    const value = event.target.value;
    const {
      handleChange,
      field,
      isName,
      isSurname,
    } = this.props;
    const newField = { ...field };

    if (isName) {
      newField.name = value;
    } else if (isSurname) {
      newField.surname = value;
    }

    handleChange(newField);
  };

  render() {
    const {
      value,
      classContainer,
      isError,
      errorText,
      label,
      type,
    } = this.props;
    const htmlFor = isError ? 'component-error' : 'component-helper';
    const id = isError ? 'component-error' : 'component-helper';
    const idText = isError ? 'component-helper-text' : 'component-error-text';

    return (
      <div className={classContainer}>
        <FormControl
          className=""
          error={isError}
          fullWidth
        >
          <InputLabel htmlFor={htmlFor}>
            {label}
          </InputLabel>
          <Input
            id={id}
            value={value}
            onChange={this.handleChange}
            fullWidth
            type={type}
          />
          {isError && (
            <FormHelperText id={idText}>
              {errorText}
            </FormHelperText>
          )}
        </FormControl>
      </div>
    );
  }
}

InputField.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
  classContainer: PropTypes.string,
  isError: PropTypes.bool,
  label: PropTypes.string,
  errorText: PropTypes.string,
  type: PropTypes.string,
  field: PropTypes.object,
  isName: PropTypes.bool,
  isSurname: PropTypes.bool,
};

export default InputField;
