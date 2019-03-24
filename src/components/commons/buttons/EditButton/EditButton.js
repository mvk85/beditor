import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

class EditButton extends PureComponent {
  render() {
    const { classContainer, handleClick } = this.props;

    return (
      <span className={classContainer}>
        <Fab
          color="primary"
          aria-label="Edit"
          size="small"
          onClick={handleClick}
        >
          <Icon>edit_icon</Icon>
        </Fab>
      </span>
    );
  }
}

EditButton.propTypes = {
  classContainer: PropTypes.string,
  handleClick: PropTypes.func,
};

export default EditButton;
