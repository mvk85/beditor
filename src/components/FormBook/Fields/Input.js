import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../commons/fields/Input/Input';

class Input extends React.Component {
  handleChange = (valueNew) => {
    const { input: { onChange } } = this.props;

    onChange(valueNew);
  };

  render() {
    const {
      input: { value },
      meta: { error, invalid, touched },
      label,
      disabled,
      classContainer,
      type,
    } = this.props;
    const errorText = (touched && error) || '';

    return (
      <div>
        <InputField
          value={value}
          handleChange={this.handleChange}
          classContainer={classContainer}
          disabled={disabled}
          label={label}
          isError={touched && invalid}
          errorText={errorText}
          type={type}
        />
      </div>
    );
  }
}

Input.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  classContainer: PropTypes.string,
  type: PropTypes.string,
};

export default Input;
