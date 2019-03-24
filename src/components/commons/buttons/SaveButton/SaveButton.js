import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

class SaveButton extends PureComponent {
  render() {
    const {
      classContainer,
      handleClick,
      disabled,
    } = this.props;

    return (
      <div className={classContainer}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClick}
          disabled={disabled}
        >
          Сохранить
        </Button>
      </div>
    );
  }
}

SaveButton.propTypes = {
  classContainer: PropTypes.string,
  handleClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default SaveButton;
