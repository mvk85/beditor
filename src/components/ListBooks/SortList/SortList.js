import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import styles from './styles.scss';
import SortButton from '../../commons/buttons/SortButton/SortButton';
import { isEmpty } from '../../../utils/data';

class SortList extends PureComponent {
  componentDidMount() {
    const { getSortBookList } = this.props;

    getSortBookList();
  }

  handleTitleClick = () => {
    const { sort: { title, year }, sendSortBookList } = this.props;
    let newSort;

    if (!title.active) {
      newSort = {
        title: { ...title, active: true },
        year: { ...year, active: false },
      };
    } else {
      newSort = {
        title: { ...title, isDown: !title.isDown, isUp: !title.isUp },
        year: { ...year },
      };
    }

    sendSortBookList(newSort);
  };

  handleYearClick = () => {
    const { sort: { title, year }, sendSortBookList } = this.props;
    let newSort;

    if (!year.active) {
      newSort = {
        title: { ...title, active: false },
        year: { ...year, active: true },
      };
    } else {
      newSort = {
        title: { ...title },
        year: { ...year, isDown: !year.isDown, isUp: !year.isUp },
      };
    }

    sendSortBookList(newSort);
  };

  render() {
    const {
      sort: { title, year },
      sort,
    } = this.props;

    if (isEmpty(sort)) {
      return (
        <div className={styles.card}>
          <Paper className={styles.paper} />
        </div>
      );
    }

    console.log('sort = ', sort);

    return (
      <div className={styles.card}>
        <Paper className={styles.paper}>
          <div className={styles.filter}>
            <SortButton
              text="Заголовок"
              classContainer={styles.sort}
              isDown={title.isDown}
              isUp={title.isUp}
              active={title.active}
              handleClick={this.handleTitleClick}
            />
            <SortButton
              text="Год публикации"
              isDown={year.isDown}
              isUp={year.isUp}
              active={year.active}
              handleClick={this.handleYearClick}
            />
          </div>
        </Paper>
      </div>
    );
  }
}

SortList.propTypes = {
  getSortBookList: PropTypes.func,
  sort: PropTypes.object,
  sendSortBookList: PropTypes.func,
};

export default SortList;
