import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';

class DeleteButton extends PureComponent {
  render() {
    return (
      <Fab aria-label="Delete" size="small">
        <DeleteIcon />
      </Fab>
    );
  }
}

DeleteButton.propTypes = {};

export default DeleteButton;