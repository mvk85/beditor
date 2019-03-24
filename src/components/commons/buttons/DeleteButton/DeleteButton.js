import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';

class DeleteButton extends PureComponent {
  handleClick = () => {
    const { idBook, handleClick } = this.props;

    handleClick({ id: idBook });
  };

  render() {
    return (
      <Fab
        aria-label="Delete"
        size="small"
        onClick={this.handleClick}
      >
        <DeleteIcon />
      </Fab>
    );
  }
}

DeleteButton.propTypes = {
  handleClick: PropTypes.func,
  idBook: PropTypes.string,
};

export default DeleteButton;
