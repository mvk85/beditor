import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

class AddButton extends Component {
  render() {
    return (
      <div>
        <Fab color="primary" aria-label="Add">
          <AddIcon />
        </Fab>
      </div>
    );
  }
}

AddButton.propTypes = {};

export default AddButton;