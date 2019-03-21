import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './styles.scss';
import EditIcon from "../../commons/buttons/EditButton";

class ItemBook extends PureComponent {
  render() {
    return (
      <div className="card">
        <Paper className="paper">
          <Grid container wrap="nowrap">
            <Grid item spacing={16} xs={8}>
              <Typography
                noWrap
                align="left"
                variant="h5"
                className="align"
              >
                message
              </Typography>
            </Grid>
            <Grid item spacing={16} xs={4}>
              <span className="align">
                <EditIcon/>
                {/*<DelIcon/>*/}
              </span>
            </Grid>
          </Grid>
          <Grid container wrap="nowrap">
            <Grid item spacing={16} xs={4}>
              <Typography
                noWrap
                align="left"
                variant="body1"
                className="align"
              >
                заголовок
              </Typography>
            </Grid>
            <Grid item spacing={16} xs={8}>
              Название книги
            </Grid>
          </Grid>
          <Grid container wrap="nowrap">
            <Grid item spacing={16} xs={4}>
              <Typography
                noWrap
                align="left"
                variant="body1"
                className="align"
              >
                список авторов
              </Typography>
            </Grid>
            <Grid item spacing={16} xs={8}>
              Автор 1, автор 2
            </Grid>
          </Grid>
          <Grid container wrap="nowrap">
            <Grid item spacing={16} xs={4}>
              <Typography
                noWrap
                align="left"
                variant="body1"
                className="align"
              >
                количество страниц
              </Typography>
            </Grid>
            <Grid item spacing={16} xs={8}>
              500
            </Grid>
          </Grid>
          <Grid container wrap="nowrap">
            <Grid item spacing={16} xs={4}>
              <Typography
                noWrap
                align="left"
                variant="body1"
                className="align"
              >
                название издательства
              </Typography>
            </Grid>
            <Grid item spacing={16} xs={8}>
              Дрофа
            </Grid>
          </Grid>
          <Grid container wrap="nowrap">
            <Grid item spacing={16} xs={4}>
              <Typography
                noWrap
                align="left"
                variant="body1"
                className="align"
              >
                год публикации
              </Typography>
            </Grid>
            <Grid item spacing={16} xs={8}>
              1985
            </Grid>
          </Grid>
          <Grid container wrap="nowrap">
            <Grid item spacing={16} xs={4}>
              <Typography
                noWrap
                align="left"
                variant="body1"
                className="align"
              >
                дата выхода в тираж
              </Typography>
            </Grid>
            <Grid item spacing={16} xs={8}>
              01.01.1985
            </Grid>
          </Grid>
          <Grid container wrap="nowrap">
            <Grid item spacing={16} xs={4}>
              <Typography
                noWrap
                align="left"
                variant="body1"
                className="align"
              >
                ISBN
              </Typography>
            </Grid>
            <Grid item spacing={16} xs={8}>
              16516546464654
            </Grid>
          </Grid>
          <Grid container wrap="nowrap">
            <Grid item spacing={16} xs={4}>
              <Typography
                noWrap
                align="left"
                variant="body1"
                className="align"
              >
                изображение
              </Typography>
            </Grid>
            <Grid item spacing={16} xs={8}>
              image
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

ItemBook.propTypes = {};

export default ItemBook;