import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import styles from './styles.scss';
import SortButton from '../../commons/buttons/SortButton/SortButton';
import { isEmpty } from '../../../utils/data';
import { setActiveItemSort, setDeactivateItemSort, setRevertDownUpSort } from './helper';

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
        title: setActiveItemSort(title),
        year: setDeactivateItemSort(year),
      };
    } else {
      newSort = {
        title: setRevertDownUpSort(title),
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
        title: setDeactivateItemSort(title),
        year: setActiveItemSort(year),
      };
    } else {
      newSort = {
        title: { ...title },
        year: setRevertDownUpSort(year),
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
