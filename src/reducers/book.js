import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { deleteBookAction, setBooks } from '../actions/book';

const data = handleActions({
  [setBooks]: (state, action) => action.payload,
  [deleteBookAction]: (state, action) => {
    const { id } = action;
    const books = { ...state };

    delete books[id];

    return books;
  },
}, {});

export default combineReducers({
  data,
});

export const getListBook = state => state.books.data;
