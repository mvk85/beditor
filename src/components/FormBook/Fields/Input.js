import React, { PureComponent } from 'react';
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
    } = this.props;

    console.log('F props = ', this.props);

    return (
      <div>
        <InputField
          value={value}
          handleChange={this.handleChange}
          classContainer={classContainer}
          disabled={disabled}
          label={label}
          isError={touched && invalid}
          errorText={touched && error}
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
};

export default Input;
