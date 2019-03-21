import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

class EditButton extends PureComponent {
  render() {
    const { classContainer } = this.props;

    return (
      <span className={classContainer}>
        <Fab color="secondary" aria-label="Edit" size="small">
          <Icon>edit_icon</Icon>
        </Fab>
      </span>
    );
  }
}

EditButton.propTypes = {
  classContainer: PropTypes.string,
};

export default EditButton;
