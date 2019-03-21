import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import './styles.scss';

class EditButton extends PureComponent {
  render() {
    return (
      <Fab color="secondary" aria-label="Edit" size="small" className="align-edit">
        <Icon>edit_icon</Icon>
      </Fab>
    );
  }
}

EditButton.propTypes = {};

export default EditButton;