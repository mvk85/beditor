import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Icon, Button } from '@material-ui/core';
import styles from './styles.scss';

class SortButton extends PureComponent {
  render() {
    const {
      classContainer,
      handleClick,
      text,
      isDown,
      isUp,
      active,
    } = this.props;
    const color = active ? 'primary' : 'default';

    return (
      <span className={classContainer}>
        <Button
          variant="contained"
          onClick={handleClick}
          color={color}
        >
          <span className={styles.label}>{text}</span>
          {isDown && <Icon>arrow_downward</Icon>}
          {isUp && <Icon>arrow_upward</Icon>}
        </Button>
      </span>
    );
  }
}

SortButton.propTypes = {
  classContainer: PropTypes.string,
  handleClick: PropTypes.func,
  text: PropTypes.string,
  isDown: PropTypes.bool,
  isUp: PropTypes.bool,
  active: PropTypes.bool,
};

export default SortButton;
