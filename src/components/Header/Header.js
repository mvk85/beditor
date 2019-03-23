import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Fab } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import styles from './styles.scss';

class Header extends Component {
  handleClick = () => {
    const { history } = this.props;

    history.push('/');
  };

  render() {
    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Fab
              variant="extended"
              arial-label="add"
              onClick={this.handleClick}
            >
              <div className={styles.label}>BEditor</div>
            </Fab>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(Header);
