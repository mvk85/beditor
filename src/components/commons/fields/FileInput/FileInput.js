import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import { Button } from '@material-ui/core';

class FileInput extends PureComponent {
  onDrop = (acceptedFiles) => {
    const { handleChange } = this.props;
    const reader = new FileReader();

    reader.onabort = () => console.log('file reading was aborted');
    reader.onerror = () => console.log('file reading has failed');
    reader.onload = () => {
      const base64Blob = reader.result;

      handleChange(base64Blob);
    };

    acceptedFiles.forEach((file) => {
      reader.readAsDataURL(file);
    });
  };

  clearField = () => {
    const { handleChange } = this.props;

    handleChange('');
  };

  render() {
    const {
      value,
      zoneContainer,
      classContainer,
    } = this.props;
    const isValue = Boolean(value);

    return (
      <div>
        <Dropzone onDrop={this.onDrop} accept="image/*">
          {({ getRootProps, getInputProps }) => (
            <section className={classContainer}>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <div className={zoneContainer}>
                  Перетащите сюда файл или кликните для выбора файла
                </div>
              </div>

            </section>
          )}
        </Dropzone>
        {value && <img src={value} width="200" alt="preview" />}
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={this.clearField}
            disabled={!isValue}
          >
            Удалить файл
          </Button>
        </div>
      </div>
    );
  }
}

FileInput.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
  classContainer: PropTypes.string,
  zoneContainer: PropTypes.string,
};

export default FileInput;
