import { createAction } from 'redux-actions';

export const saveNewBook = createAction('SAVE_NEW_BOOK');
export const fetchBooks = createAction('FETCH_BOOKS');
export const setBooks = createAction('SET_BOOKS');
export const deleteBookAction = createAction('DELETE_BOOK_ACTION');
