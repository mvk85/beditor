import { createStore, compose } from 'redux';
import rootReducer from './reducers';

// eslint-disable-next-line no-undef
const reduxTools = window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f;

export default createStore(
  rootReducer,
  compose(reduxTools),
);
