import React from 'react';
import PropTypes from 'prop-types';
import FileInput from '../../commons/fields/FileInput/FileInput';

class FileField extends React.Component {
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
        <FileInput
          value={value}
          handleChange={this.handleChange}
          disabled={disabled}
          label={label}
          isError={touched && invalid}
          errorText={errorText}
          type={type}
          zoneContainer={classContainer}
        />
      </div>
    );
  }
}

FileField.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  classContainer: PropTypes.string,
  type: PropTypes.string,
};

export default FileField;
