import { connect } from 'react-redux';
import ListBooks from './ListBooks';
import {deleteBookAction, fetchBooks} from '../../actions/book';
import { getListBook } from '../../reducers/book';

export default connect(
  state => ({
    data: getListBook(state),
  }),
  {
    fetchBooks,
    deleteBookAction,
  },
)(ListBooks);
