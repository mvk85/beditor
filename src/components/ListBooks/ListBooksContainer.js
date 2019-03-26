import { connect } from 'react-redux';
import ListBooks from './ListBooks';
import { deleteBookAction, fetchBooks } from '../../actions/book';
import { getListBook, getSortListBook } from '../../reducers/book';

export default connect(
  state => ({
    data: getListBook(state),
    sort: getSortListBook(state),
  }),
  {
    fetchBooks,
    deleteBookAction,
  },
)(ListBooks);
