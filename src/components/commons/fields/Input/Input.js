import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

class Input extends PureComponent {
  static defaultProps = {
    value: '',
  };

  render() {
    const {
      value,
    } = this.props;

    return (
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue={value}
          // className={classes.textField}
          margin="normal"
          variant="outlined"
          fullWidth
        />
      </div>
    );
  }
}

Input.propTypes = {
  value: PropTypes.string,
};

export default Input;
