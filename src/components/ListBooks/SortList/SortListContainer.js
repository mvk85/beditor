import { connect } from 'react-redux';
import SortList from './SortList';
import { getSortBookList, sendSortBookList } from '../../../actions/book';
import { getSortListBook } from '../../../reducers/book';

export default connect(
  state => ({
    sort: getSortListBook(state),
  }),
  {
    getSortBookList,
    sendSortBookList,
  },
)(SortList);
