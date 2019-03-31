import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router-dom';
import styles from './styles.scss';
import EditIcon from '../../commons/buttons/EditButton';
import DeleteButton from '../../commons/buttons/DeleteButton/DeleteButton';

class ChangeBook extends PureComponent {
  handleEdit = () => {
    const { history, idBook } = this.props;

    history.push('/book/' + idBook);
  };

  handleDelete = () => {
    const { idBook, deleteBook } = this.props;

    deleteBook({ id: idBook });
  };

  render() {
    const {
      title,
      idBook,
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
              handleClick={this.handleEdit}
            />
            <DeleteButton
              handleClick={this.handleDelete}
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
  history: PropTypes.object,
};

export default withRouter(ChangeBook);
