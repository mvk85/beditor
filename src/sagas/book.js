import {
  takeLatest, put, call, fork,
} from 'redux-saga/effects';
import {
  deleteBook, getBooks, getSortBooks, saveBook, setSortBooks,
} from '../api/localStorage';
import {
  deleteBookAction, fetchBooks, getSortBookList, saveNewBook, sendSortBookList, setBooks, setSortBookList,
} from '../actions/book';

function* saveBookWorker(action) {
  try {
    const { book, cb } = action.payload;
    yield call(saveBook, book);

    if (cb) { cb(); }
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
  } catch (error) {
    console.error('deleteBookWorker error: ', error);
    // error view?
  }
}

export function* deleteBookWatcher() {
  yield takeLatest(deleteBookAction, deleteBookWorker);
}

function* sortBooksWorker() {
  try {
    const sort = yield call(getSortBooks);
    yield put(setSortBookList(sort));
  } catch (error) {
    console.error('deleteBookWorker error: ', error);
    // error view?
  }
}

export function* sortBooksWatcher() {
  yield takeLatest(getSortBookList, sortBooksWorker);
}

function* sendSortBooksWorker(action) {
  try {
    yield call(setSortBooks, action.payload);
    yield put(setSortBookList(action.payload));
  } catch (error) {
    console.error('sendSortBooksWorker error: ', error);
    // error view?
  }
}

export function* sendSortBooksWatcher() {
  yield takeLatest(sendSortBookList, sendSortBooksWorker);
}

export default [
  fork(saveBookWatcher),
  fork(getBooksWatcher),
  fork(deleteBookWatcher),
  fork(sortBooksWatcher),
  fork(sendSortBooksWatcher),
];
