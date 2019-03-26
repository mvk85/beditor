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
    const { handleChange } = this.props;

    handleChange(event.target.value);
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
};

export default InputField;
