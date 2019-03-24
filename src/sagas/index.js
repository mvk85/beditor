import { all } from 'redux-saga/effects';
import book from './book';

export default function* () {
  yield all([
    ...book,
  ]);
}
