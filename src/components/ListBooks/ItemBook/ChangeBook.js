import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import styles from './styles.scss';
import EditIcon from '../../commons/buttons/EditButton';
import DeleteButton from '../../commons/buttons/DeleteButton/DeleteButton';

class ChangeBook extends PureComponent {
  render() {
    const {
      title,
      idBook,
      deleteBook,
    } = this.props;

    return (
      <Grid container>
        <Grid item xs={8}>
          <div className={styles.title}>
            {title}
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={styles.alignButton}>
            <EditIcon
              classContainer={styles.alignEdit}
              idBook={idBook}
            />
            <DeleteButton
              idBook={idBook}
              handleClick={deleteBook}
            />
          </div>
        </Grid>
      </Grid>
    );
  }
}

ChangeBook.propTypes = {
  title: PropTypes.string,
  idBook: PropTypes.string,
  deleteBook: PropTypes.func,
};

export default ChangeBook;
