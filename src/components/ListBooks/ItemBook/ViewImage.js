import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import styles from './styles.scss';

class ViewImage extends PureComponent {
  render() {
    const { caption, src } = this.props;

    if (!src) {
      return null;
    }

    return (
      <Grid container>
        <Grid item xs={12}>
          <div className={styles.align}>
            {caption}
          </div>
        </Grid>
        <Grid item xs={12}>
          <div>
            <img
              src={src}
              alt={caption}
              className={styles.img}
            />
          </div>
        </Grid>
      </Grid>
    );
  }
}

ViewImage.propTypes = {
  caption: PropTypes.string.isRequired,
  src: PropTypes.string,
};

export default ViewImage;
