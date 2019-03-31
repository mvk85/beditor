import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';

class DeleteButton extends PureComponent {
  render() {
    const {
      handleClick,
      classContainer,
    } = this.props;

    return (
      <span className={classContainer}>
        <Fab
          aria-label="Delete"
          size="small"
          onClick={handleClick}
        >
          <DeleteIcon />
        </Fab>
      </span>
    );
  }
}

DeleteButton.propTypes = {
  handleClick: PropTypes.func,
  classContainer: PropTypes.string,
};

export default DeleteButton;
