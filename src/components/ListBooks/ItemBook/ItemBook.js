import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styles from './styles.scss';
import EditIcon from '../../commons/buttons/EditButton';
import DeleteButton from '../../commons/buttons/DeleteButton/DeleteButton';
import Specification from './Specification';

class ItemBook extends PureComponent {
  render() {
    return (
      <div className={styles.card}>
        <Paper className={styles.paper}>
          <Grid container>
            <Grid item xs={8}>
              <div className={styles.title}>
                message
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={styles.alignButton}>
                <EditIcon classContainer={styles.alignEdit} />
                <DeleteButton />
              </div>
            </Grid>
          </Grid>
          <Specification caption="заголовок" text="Название книги" />
          <Specification caption="список авторов" text="Автор 1, автор 2" />
          <Specification caption="количество страниц" text="500" />
          <Specification caption="название издательства" text="Дрофа" />
          <Specification caption="год публикации" text="1985" />
          <Specification caption="дата выхода в тираж" text="01.01.1985" />
          <Specification caption="ISBN" text="16516546464654" />
          <Specification caption="изображение" text="image" />
        </Paper>
        <Paper className={styles.paper}>
          <Grid container >
            <Grid item xs={8}>
              <div className={styles.title}>
                message
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={styles.alignButton}>
                <EditIcon classContainer={styles.alignEdit} />
                <DeleteButton />
              </div>
            </Grid>
          </Grid>
          <Specification caption="заголовок" text="Название книги" />
          <Specification caption="список авторов" text="Автор 1, автор 2" />
          <Specification caption="количество страниц" text="500" />
          <Specification caption="название издательства" text="Дрофа" />
          <Specification caption="год публикации" text="1985" />
          <Specification caption="дата выхода в тираж" text="01.01.1985" />
          <Specification caption="ISBN" text="16516546464654" />
          <Specification caption="изображение" text="image" />
        </Paper>
      </div>
    );
  }
}

ItemBook.propTypes = {};

export default ItemBook;
