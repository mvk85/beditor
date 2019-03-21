import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import styles from './styles.scss';

class Specification extends PureComponent {
  render() {
    const { caption, text } = this.props;

    return (
      <Grid container>
        <Grid item xs={4}>
          <div className={styles.align}>
            {caption}
          </div>
        </Grid>
        <Grid item xs={8}>
          <div className={styles.align}>
            {text}
          </div>
        </Grid>
      </Grid>
    );
  }
}

Specification.propTypes = {
  caption: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Specification;
