import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { deleteBookAction, setBooks, setSortBookList } from '../actions/book';

const data = handleActions({
  [setBooks]: (state, action) => action.payload,
  [deleteBookAction]: (state, action) => {
    const { id } = action;
    const books = { ...state };

    delete books[id];

    return books;
  },
}, {});

const sort = handleActions({
  [setSortBookList]: (state, action) => action.payload,
}, {});

export default combineReducers({
  data,
  sort,
});

export const getListBook = state => state.books.data;
export const getSortListBook = state => state.books.sort;
