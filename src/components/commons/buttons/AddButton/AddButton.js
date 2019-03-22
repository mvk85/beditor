import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

class AddButton extends PureComponent {
  render() {
    const {
      handleClick,
    } = this.props;

    return (
      <div>
        <Fab
          color="primary"
          aria-label="Add"
          onClick={handleClick}
        >
          <AddIcon />
        </Fab>
      </div>
    );
  }
}

AddButton.propTypes = {
  handleClick: PropTypes.func,
};

export default AddButton;