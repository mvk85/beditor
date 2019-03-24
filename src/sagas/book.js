import {
  takeLatest, put, call, fork,
} from 'redux-saga/effects';
import {deleteBook, getBooks, saveBook} from '../api/localStorage';
import {deleteBookAction, fetchBooks, saveNewBook, setBooks} from '../actions/book';

function* saveBookWorker(action) {
  try {
    yield call(saveBook, action.payload);

    // console.log('saveBookWorker action = ', action);
  } catch (error) {
    console.error('saveBookWorker error: ', error);
    // error view?
  }
}

export function* saveBookWatcher() {
  yield takeLatest(saveNewBook, saveBookWorker);
}


function* getBooksWorker(action) {
  try {
    const books = yield call(getBooks, action.payload);

    yield put(setBooks(books));
  } catch (error) {
    console.error('getBooksWorker error: ', error);
    // error view?
  }
}

export function* getBooksWatcher() {
  yield takeLatest(fetchBooks, getBooksWorker);
}


function* deleteBookWorker(action) {
  try {
    yield call(deleteBook, action.payload.id);
    yield put(fetchBooks());

    // yield put(deleteBookAction(action.payload));
  } catch (error) {
    console.error('deleteBookWorker error: ', error);
    // error view?
  }
}

export function* deleteBookWatcher() {
  yield takeLatest(deleteBookAction, deleteBookWorker);
}

export default [
  fork(saveBookWatcher),
  fork(getBooksWatcher),
  fork(deleteBookWatcher),
];
