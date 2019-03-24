import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import books from './book';

export default combineReducers({
  form: formReducer,
  books,
});
